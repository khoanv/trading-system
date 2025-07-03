import { useEffect, useState } from 'react';
import './index.css';
import {dataFeed} from './api/';
import { widget } from '../../charting_library';
import { useSelector } from 'react-redux';

function getLanguageFromURL() {
	const regex = new RegExp('[\\?&]lang=([^&#]*)');
	const results = regex.exec(window.location.search);
	return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight - 110}px`);
}
window.addEventListener('resize', appHeight)
appHeight()

const TVChartContainer = (props) => {
	const symbolInfo = useSelector((state) => state.system.mapSymbol[props.symbolCode]);
	const chartStateKey = "tvChart";

	useEffect(() => {
		if (symbolInfo) {
			localStorage.setItem("digit", symbolInfo.priceDigit);
		}
	}, [symbolInfo])

	let chartStateStr = localStorage.getItem(chartStateKey);
	let chartState = {};
	if (chartStateStr === null || chartStateStr === undefined)
        chartState = {};
	else chartState = JSON.parse(chartStateStr);

	let intervalTime = "5";

	if (chartState.charts !== null && chartState.charts !== undefined) {
		intervalTime = chartState.charts[0]["panes"][0]["sources"][0]["state"]["interval"];
	}

	var defaultProps = {
		symbol: 'USDJPY',
		interval: intervalTime,
		containerId: 'tv_chart_container',
		libraryPath: '/charting_library/',
		chartsStorageUrl: 'https://saveload.tradingview.com',
		chartsStorageApiVersion: '1.1',
		clientId: 'tradingview.com',
		userId: 'public_user_id',
		fullscreen: false,
		autosize: true,
		studiesOverrides: {},
	};

	let mapTimezone = new Map();

	mapTimezone.set("-12","");
	mapTimezone.set("-11","");
	mapTimezone.set("-10","Pacific/Honolulu");
	mapTimezone.set("-9","");
	mapTimezone.set("-8","America/Los_Angeles");
	mapTimezone.set("-7","America/Phoenix");
	mapTimezone.set("-6","America/Chicago");
	mapTimezone.set("-5","America/New_York");
	mapTimezone.set("-4","America/Caracas");
	mapTimezone.set("-3","America/Argentina/Buenos_Aires");
	mapTimezone.set("-2","America/Sao_Paulo");
	mapTimezone.set("-1","");
	mapTimezone.set("0","Europe/London");
	mapTimezone.set("1","Europe/Berlin");
	mapTimezone.set("2","Europe/Istanbul");
	mapTimezone.set("3","Europe/Moscow");
	mapTimezone.set("3.5","Asia/Tehran");
	mapTimezone.set("4","Asia/Dubai");
	mapTimezone.set("5","Asia/Ashkhabad");
	mapTimezone.set("5.5","Asia/Kolkata");
	mapTimezone.set("6","Asia/Almaty");
	mapTimezone.set("7","Asia/Bangkok");
	mapTimezone.set("8","Asia/Hong_Kong");
	mapTimezone.set("9","Asia/Tokyo");
	mapTimezone.set("10","Australia/Brisbane");
	mapTimezone.set("10.5","Australia/Adelaide");
	mapTimezone.set("11","Australia/Sydney");
	mapTimezone.set("12","Pacific/Auckland");
	mapTimezone.set("13","Pacific/Fakaofo");

	useEffect(() =>{
		if(props.symbolCode){
			defaultProps.symbol = props.symbolCode;
			initChart();
		}
	},[props.symbolCode]);

	useEffect(() => {
		if(props.quote){
			dataFeed.updateQuote(props.quote);
		}
	},[props.quote])

	const initChart =() =>{
		let timezoneOffsetHour = new Date().getTimezoneOffset()/60;

        let mOffset = timezoneOffsetHour * (-1);
        let timezone = mapTimezone.get(mOffset + "");
        if(timezone == "")
            timezone = "Asia/Tokyo";

		let symbol = defaultProps.symbol;

		const widgetOptions = {
			debug: false,
			symbol: defaultProps.symbol,
			datafeed: dataFeed,
			interval: defaultProps.interval,
			container: defaultProps.containerId,
			library_path: defaultProps.libraryPath,
			locale: getLanguageFromURL() || 'en',
			disabled_features: ['use_localstorage_for_settings','header_saveload','header_undo_redo','header_screenshot','header_compare',
			'display_market_status','header_symbol_search', 'header_fullscreen_button','timeframes_toolbar'],
			enabled_features: ['hide_left_toolbar_by_default'],
			charts_storage_url: defaultProps.chartsStorageUrl,
			charts_storage_api_version: defaultProps.chartsStorageApiVersion,
			client_id: defaultProps.clientId,
			user_id: defaultProps.userId,
			fullscreen: defaultProps.fullscreen,
			autosize: defaultProps.autosize,
			studies_overrides: defaultProps.studiesOverrides,
			// theme:"Dark",
			overrides: {
				"mainSeriesProperties.showCountdown": true,
				// "paneProperties.background": "#131722",
				// "paneProperties.vertGridProperties.color": "#363c4e",
				// "paneProperties.horzGridProperties.color": "#363c4e",
				// "symbolWatermarkProperties.transparency": 90,
				// "scalesProperties.textColor" : "#AAA",
				// "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
				// "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f'
			},
			timezone:timezone
		};

		const tvWidget = new widget(widgetOptions);

		tvWidget.onChartReady(() => {
			console.log("Chart ready");

			if (chartState.charts !== null && chartState.charts !== undefined) {
				chartState.charts[0]["panes"][0]["sources"][0]["state"]["shortName"] = defaultProps.symbol;
				chartState.charts[0]["panes"][0]["sources"][0]["state"]["symbol"] = defaultProps.symbol;
				tvWidget.load(chartState) 
			}

			tvWidget.subscribe('onAutoSaveNeeded', () => {
				console.log('onAutoSaveNeeded');
				tvWidget.save((tvChartObject) => {
					localStorage.setItem(chartStateKey, JSON.stringify(tvChartObject));
				});
			});
		});
	}

	return (
		<div
			id={ defaultProps.containerId }
			className={ 'TVChartContainer' }
		/>
	);
}

export default TVChartContainer;