import { isNull } from '../../../utils';
import {chartProvider} from './chart-provider'

const supportedResolutions = ["1", "5", "15", "30", "60", "240", "D","W","M"]

const config = {
    supported_resolutions: supportedResolutions
}; 

export const dataFeed = {
	onReady: cb => {
	console.log('=====onReady running')	
		setTimeout(() => cb(config), 0)
		
	},
	searchSymbols: (userInput, exchange, symbolType, onResultReadyCallback) => {
		console.log('====Search Symbols running')
	},
	resolveSymbol: (symbolName, onSymbolResolvedCallback, onResolveErrorCallback) => {
		console.log('======resolveSymbol running ' + symbolName);
		let digit = 3;

		if (!isNull(localStorage.getItem("digit"))) {
			digit = Number(localStorage.getItem("digit"));
		}

		var symbol_stub = {
			name: symbolName,
			description: '',
			type: 'crypto',
			session: '24x7',
			timezone: 'Europe/Moscow',
			ticker: symbolName,
			exchange: '',
			minmov: 1,
			pricescale: Math.pow(10,digit),
			has_intraday: true,
			intraday_multipliers: ["1", "5", "15", "30", "60", "240", "D","W","M"],
			supported_resolution:  supportedResolutions,
			volume_precision: 8,
			data_status: 'streaming',
			format:"price"
		}

		setTimeout(function() {
			onSymbolResolvedCallback(symbol_stub);
		}, 0)

	},
	getBars: function(symbolInfo, resolution, periodParams, onHistoryCallback, onErrorCallback) {
		// console.log('=====getBars running ');
		// console.log(periodParams);
		chartProvider.getBars(symbolInfo, resolution, periodParams.from, periodParams.to, periodParams.firstDataRequest)
		.then(bars => {
			if (bars.length) {
				onHistoryCallback(bars, {noData: false})
			} else {
				onHistoryCallback(bars, {noData: true})
			}
		}).catch(err => {
			console.log({err})
			onErrorCallback(err)
		})

	},
	subscribeBars: (symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback) => {
		console.log('=====subscribeBars runnning')
		chartProvider.subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscribeUID, onResetCacheNeededCallback)
	},
	unsubscribeBars: subscriberUID => {
		console.log('=====unsubscribeBars running')

		chartProvider.unsubscribeBars(subscriberUID)
	},
	calculateHistoryDepth: (resolution, resolutionBack, intervalBack) => {
		//optional
		console.log('=====calculateHistoryDepth running')
		return resolution < 60 ? {resolutionBack: 'D', intervalBack: '1'} : undefined
	},
	getMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
		//optional
		console.log('=====getMarks running')
	},
	getTimeScaleMarks: (symbolInfo, startDate, endDate, onDataCallback, resolution) => {
		//optional
		console.log('=====getTimeScaleMarks running')
	},
	getServerTime: cb => {
		console.log('=====getServerTime running')
	},
	updateQuote : quote => {
		chartProvider.updateQuote(quote);
	}
}
