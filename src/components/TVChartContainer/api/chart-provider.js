import axios from "axios";
import moment from "moment";
import { API_URL, Requesturl, Result } from "../../../models/constant.model";

var _subs = [];
const history = {};

const updateBar = (quote, sub, midRate) => {
    let lastBar = sub.lastBar;

    let _lastBar;
    if (lastBar != null) {
        let resolution = sub.resolution;
        // console.log("resolution = " + resolution);
        if (resolution.includes('D')) {
            resolution = 1440
        } else if (resolution.includes('W')) {
            resolution = 10080
        }
        var coeff = resolution * 60;
        var rounded = Math.floor(Number(quote.datetime) / (coeff * 1000)) * coeff;
        var lastBarSec = lastBar.time / 1000;

        if (resolution == 1440) {
            if (midRate < lastBar.low) {
                lastBar.low = midRate;
            } else if (midRate > lastBar.high) {
                lastBar.high = midRate;
            }
            if (lastBar.volume != null)
                lastBar.volume += 0;
            lastBar.close = midRate;
            _lastBar = lastBar
        } else {
            if (rounded > lastBarSec) {
                _lastBar = {
                    time: rounded * 1000,
                    open: lastBar.close,
                    high: lastBar.close,
                    low: lastBar.close,
                    close: midRate,
                    volume: null
                }
            } else {
                // update lastBar candle!
                if (midRate < lastBar.low) {
                    lastBar.low = midRate;
                } else if (midRate > lastBar.high) {
                    lastBar.high = midRate;
                }
                if (lastBar.volume != null)
                    lastBar.volume += 0;
                lastBar.close = midRate;
                _lastBar = lastBar
            }
        }
    } else {
        const _lastBar1 = {
            time: Number(quote.datetime),
            low: midRate,
            high: midRate,
            open: midRate,
            close: midRate,
            volume: null
        };
        return _lastBar1;
    }

    return _lastBar
}

export const chartProvider = {
    subscribeBars: function (symbolInfo, resolution, updateCb, uid, resetCache) {
        // console.log("Subcribe chart for ", symbolInfo);

        var newSub = {
            uid,
            resolution,
            symbolInfo,
            lastBar: history[symbolInfo.name].lastBar,
            listener: updateCb,
        }
        _subs.push(newSub);
    },
    unsubscribeBars: function (uid) {
        console.log("UnSubcriber chart ", uid);
        var subIndex = _subs.findIndex(e => e.uid === uid)
        if (subIndex === -1) {
            console.log("No subscription found for ", uid);
            return
        }
        _subs.splice(subIndex, 1);
    },
    getBars: function (symbolInfo, resolution, from, to, first, limit) {
        // console.log("Get Bar from  = " + from + ", to = " + to + ", resolution = " + resolution);
        let chartType = 1;

        if (resolution === "1") chartType = 1;
        if (resolution === "5") chartType = 2;
        if (resolution === "15") chartType = 3;
        if (resolution === "30") chartType = 4;
        if (resolution === "60") chartType = 5;
        if (resolution === "240") chartType = 6;
        if (resolution === "1D") chartType = 7;
        if (resolution === "D") chartType = 7;

        let today = new Date().getDay();

        if (resolution === "1" || resolution === "5" || resolution === "15"){
            if (today === 6 || today === 0)
                from = from - 200000;
        }

        let params = {
            symbol: symbolInfo.name,
            chartType: chartType,
            from: from * 1000,
            to: to * 1000
        }

        const url = API_URL + Requesturl.GET_CHARTS;

        return axios.post(url, params).then((resp) => {
            if (resp.data.result === Result.SUCCESS) {
                if(resp.data.data.length){
                    var bars = resp.data.data.map(chart => {
                        let vol = chart.volume != null ? chart.volume : null;
                        if(vol == 0) vol = null;
                        let mTime = chart.chartTime;
                        if(chart.type == 7){
                            let mm = moment.utc(chart.chartDate,"YYYYMMDD");
                            mTime = mm.toDate().getTime();
                        }
                        return {
                            time: mTime ,
                            low: chart.low,
                            high: chart.high,
                            open: chart.open,
                            close: chart.close,
                            volume: vol
                        }
                    })
                    if (first) {
                        var lastBar = bars[bars.length - 1]
                        history[symbolInfo.name] = {lastBar: lastBar}
                    }
                    return bars
                }else return [];
                
            }else return [];
        }, (err) => {
            console.log(err);
        })
    },
    updateQuote: quote => {
        try {
            // console.log(quote);
            const midRate = (Number(quote.ask) + Number(quote.bid)) / 2;
            // const bid = Number(quote.bid);

            // const bar = {
            //     time: Number(quote.feedTime),
            //     low: bid,
            //     high: bid,
            //     open: bid,
            //     close: bid,
            //     volume: 0
            // }

            for (const listenerGuid in _subs) {
                let subcriber = _subs[listenerGuid];
                if (subcriber != null) {
                    let mBarValue = updateBar(quote, subcriber, midRate);
                    subcriber.listener(mBarValue);
                    subcriber.lastBar = mBarValue;

                    // subcriber.listener(barValue);
                }
            }

        } catch (e) {

        }
    }
}