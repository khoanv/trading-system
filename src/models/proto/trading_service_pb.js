// source: trading_service.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var rpc_pb = require('./rpc_pb.js');
goog.object.extend(proto, rpc_pb);
var trading_model_pb = require('./trading_model_pb.js');
goog.object.extend(proto, trading_model_pb);
var customer_model_pb = require('./customer_model_pb.js');
goog.object.extend(proto, customer_model_pb);
goog.exportSymbol('proto.CashflowEvent', null, global);
goog.exportSymbol('proto.CashflowHistoryRequest', null, global);
goog.exportSymbol('proto.CashflowHistoryResponse', null, global);
goog.exportSymbol('proto.CashflowHistoryResponse.Result', null, global);
goog.exportSymbol('proto.DirectDealChatEvent', null, global);
goog.exportSymbol('proto.DirectDealChatHistoryRequest', null, global);
goog.exportSymbol('proto.DirectDealChatHistoryResponse', null, global);
goog.exportSymbol('proto.DirectDealChatRequest', null, global);
goog.exportSymbol('proto.DirectDealChatResponse', null, global);
goog.exportSymbol('proto.DirectDealChatResponse.Result', null, global);
goog.exportSymbol('proto.DirectDealEvent', null, global);
goog.exportSymbol('proto.DirectDealRequest', null, global);
goog.exportSymbol('proto.DirectDealResponse', null, global);
goog.exportSymbol('proto.DirectDealResponse.Result', null, global);
goog.exportSymbol('proto.EstimateTxFeeRequest', null, global);
goog.exportSymbol('proto.EstimateTxFeeResponse', null, global);
goog.exportSymbol('proto.EstimateTxFeeResponse.Result', null, global);
goog.exportSymbol('proto.ExchangeCurrencyRequest', null, global);
goog.exportSymbol('proto.ExchangeCurrencyResponse', null, global);
goog.exportSymbol('proto.ExchangeCurrencyResponse.Result', null, global);
goog.exportSymbol('proto.FootprintEvent', null, global);
goog.exportSymbol('proto.GetLatestFootpintRequest', null, global);
goog.exportSymbol('proto.GetLatestFootpintResponse', null, global);
goog.exportSymbol('proto.GetLatestOrderBookRequest', null, global);
goog.exportSymbol('proto.GetLatestOrderBookResponse', null, global);
goog.exportSymbol('proto.GetPositionRequest', null, global);
goog.exportSymbol('proto.GetPositionResponse', null, global);
goog.exportSymbol('proto.JackpotEvent', null, global);
goog.exportSymbol('proto.LeaveOrderRequest', null, global);
goog.exportSymbol('proto.LeaveOrderResponse', null, global);
goog.exportSymbol('proto.LeaveOrderResponse.Result', null, global);
goog.exportSymbol('proto.MarginCallEvent', null, global);
goog.exportSymbol('proto.ModifyOrderRequest', null, global);
goog.exportSymbol('proto.ModifyOrderResponse', null, global);
goog.exportSymbol('proto.ModifyOrderResponse.Result', null, global);
goog.exportSymbol('proto.ModifyPositionRequest', null, global);
goog.exportSymbol('proto.ModifyPositionResponse', null, global);
goog.exportSymbol('proto.ModifyPositionResponse.Result', null, global);
goog.exportSymbol('proto.ModifyType', null, global);
goog.exportSymbol('proto.NetoutRequest', null, global);
goog.exportSymbol('proto.NetoutResponse', null, global);
goog.exportSymbol('proto.NetoutResponse.Result', null, global);
goog.exportSymbol('proto.OpenOrderRequest', null, global);
goog.exportSymbol('proto.OpenOrderResponse', null, global);
goog.exportSymbol('proto.OpenOrderResponse.Result', null, global);
goog.exportSymbol('proto.OrderBookEvent', null, global);
goog.exportSymbol('proto.OrderEvent', null, global);
goog.exportSymbol('proto.PositionEvent', null, global);
goog.exportSymbol('proto.SquarePositionRequest', null, global);
goog.exportSymbol('proto.SquarePositionResponse', null, global);
goog.exportSymbol('proto.SquarePositionResponse.Result', null, global);
goog.exportSymbol('proto.SquareType', null, global);
goog.exportSymbol('proto.SubscribeFootpintRequest', null, global);
goog.exportSymbol('proto.SubscribeFootpintResponse', null, global);
goog.exportSymbol('proto.SubscribeFootpintResponse.Result', null, global);
goog.exportSymbol('proto.SubscribeJackpotRequest', null, global);
goog.exportSymbol('proto.SubscribeJackpotResponse', null, global);
goog.exportSymbol('proto.SubscribeJackpotResponse.Result', null, global);
goog.exportSymbol('proto.SubscribeOrderBookRequest', null, global);
goog.exportSymbol('proto.SubscribeOrderBookResponse', null, global);
goog.exportSymbol('proto.SubscribeOrderBookResponse.Result', null, global);
goog.exportSymbol('proto.TradingHistoryRequest', null, global);
goog.exportSymbol('proto.TradingHistoryResponse', null, global);
goog.exportSymbol('proto.TradingHistoryResponse.Result', null, global);
goog.exportSymbol('proto.UnsubscribeFootpintRequest', null, global);
goog.exportSymbol('proto.UnsubscribeFootpintResponse', null, global);
goog.exportSymbol('proto.UnsubscribeFootpintResponse.Result', null, global);
goog.exportSymbol('proto.UnsubscribeOrderBookRequest', null, global);
goog.exportSymbol('proto.UnsubscribeOrderBookResponse', null, global);
goog.exportSymbol('proto.UnsubscribeOrderBookResponse.Result', null, global);
goog.exportSymbol('proto.WithdrawRequest', null, global);
goog.exportSymbol('proto.WithdrawResponse', null, global);
goog.exportSymbol('proto.WithdrawResponse.Result', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OpenOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OpenOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OpenOrderRequest.displayName = 'proto.OpenOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OpenOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.OpenOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OpenOrderResponse.displayName = 'proto.OpenOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeaveOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.LeaveOrderRequest.repeatedFields_, null);
};
goog.inherits(proto.LeaveOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LeaveOrderRequest.displayName = 'proto.LeaveOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeaveOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LeaveOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LeaveOrderResponse.displayName = 'proto.LeaveOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyOrderRequest.displayName = 'proto.ModifyOrderRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyOrderResponse.displayName = 'proto.ModifyOrderResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SquarePositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SquarePositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SquarePositionRequest.displayName = 'proto.SquarePositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SquarePositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SquarePositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SquarePositionResponse.displayName = 'proto.SquarePositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TradingHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.TradingHistoryRequest.repeatedFields_, null);
};
goog.inherits(proto.TradingHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TradingHistoryRequest.displayName = 'proto.TradingHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TradingHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.TradingHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.TradingHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TradingHistoryResponse.displayName = 'proto.TradingHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetPositionRequest.displayName = 'proto.GetPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetPositionResponse.repeatedFields_, null);
};
goog.inherits(proto.GetPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetPositionResponse.displayName = 'proto.GetPositionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MarginCallEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MarginCallEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MarginCallEvent.displayName = 'proto.MarginCallEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.OrderEvent.repeatedFields_, null);
};
goog.inherits(proto.OrderEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderEvent.displayName = 'proto.OrderEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PositionEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.PositionEvent.repeatedFields_, null);
};
goog.inherits(proto.PositionEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PositionEvent.displayName = 'proto.PositionEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetLatestOrderBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetLatestOrderBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetLatestOrderBookRequest.displayName = 'proto.GetLatestOrderBookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetLatestOrderBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetLatestOrderBookResponse.repeatedFields_, null);
};
goog.inherits(proto.GetLatestOrderBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetLatestOrderBookResponse.displayName = 'proto.GetLatestOrderBookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetLatestFootpintRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GetLatestFootpintRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetLatestFootpintRequest.displayName = 'proto.GetLatestFootpintRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GetLatestFootpintResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GetLatestFootpintResponse.repeatedFields_, null);
};
goog.inherits(proto.GetLatestFootpintResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GetLatestFootpintResponse.displayName = 'proto.GetLatestFootpintResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.OrderBookEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.OrderBookEvent.repeatedFields_, null);
};
goog.inherits(proto.OrderBookEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.OrderBookEvent.displayName = 'proto.OrderBookEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeOrderBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeOrderBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeOrderBookRequest.displayName = 'proto.SubscribeOrderBookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeOrderBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeOrderBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeOrderBookResponse.displayName = 'proto.SubscribeOrderBookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnsubscribeOrderBookRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UnsubscribeOrderBookRequest.repeatedFields_, null);
};
goog.inherits(proto.UnsubscribeOrderBookRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UnsubscribeOrderBookRequest.displayName = 'proto.UnsubscribeOrderBookRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnsubscribeOrderBookResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UnsubscribeOrderBookResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UnsubscribeOrderBookResponse.displayName = 'proto.UnsubscribeOrderBookResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeFootpintRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeFootpintRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeFootpintRequest.displayName = 'proto.SubscribeFootpintRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeFootpintResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeFootpintResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeFootpintResponse.displayName = 'proto.SubscribeFootpintResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FootprintEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FootprintEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FootprintEvent.displayName = 'proto.FootprintEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExchangeCurrencyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExchangeCurrencyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExchangeCurrencyRequest.displayName = 'proto.ExchangeCurrencyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ExchangeCurrencyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ExchangeCurrencyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ExchangeCurrencyResponse.displayName = 'proto.ExchangeCurrencyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WithdrawRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawRequest.displayName = 'proto.WithdrawRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WithdrawResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WithdrawResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WithdrawResponse.displayName = 'proto.WithdrawResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EstimateTxFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EstimateTxFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EstimateTxFeeRequest.displayName = 'proto.EstimateTxFeeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EstimateTxFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EstimateTxFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EstimateTxFeeResponse.displayName = 'proto.EstimateTxFeeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CashflowHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CashflowHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CashflowHistoryRequest.displayName = 'proto.CashflowHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CashflowHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.CashflowHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.CashflowHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CashflowHistoryResponse.displayName = 'proto.CashflowHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CashflowEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CashflowEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CashflowEvent.displayName = 'proto.CashflowEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealChatRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealChatRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealChatRequest.displayName = 'proto.DirectDealChatRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealChatResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealChatResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealChatResponse.displayName = 'proto.DirectDealChatResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealChatHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealChatHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealChatHistoryRequest.displayName = 'proto.DirectDealChatHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealChatHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.DirectDealChatHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.DirectDealChatHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealChatHistoryResponse.displayName = 'proto.DirectDealChatHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealChatEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealChatEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealChatEvent.displayName = 'proto.DirectDealChatEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealRequest.displayName = 'proto.DirectDealRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealResponse.displayName = 'proto.DirectDealResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DirectDealEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DirectDealEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DirectDealEvent.displayName = 'proto.DirectDealEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnsubscribeFootpintRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UnsubscribeFootpintRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UnsubscribeFootpintRequest.displayName = 'proto.UnsubscribeFootpintRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UnsubscribeFootpintResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UnsubscribeFootpintResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UnsubscribeFootpintResponse.displayName = 'proto.UnsubscribeFootpintResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetoutRequest.displayName = 'proto.NetoutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.NetoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.NetoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.NetoutResponse.displayName = 'proto.NetoutResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeJackpotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeJackpotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeJackpotRequest.displayName = 'proto.SubscribeJackpotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubscribeJackpotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SubscribeJackpotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubscribeJackpotResponse.displayName = 'proto.SubscribeJackpotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JackpotEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JackpotEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JackpotEvent.displayName = 'proto.JackpotEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyPositionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyPositionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyPositionRequest.displayName = 'proto.ModifyPositionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyPositionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyPositionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyPositionResponse.displayName = 'proto.ModifyPositionResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OpenOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.OpenOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OpenOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && trading_model_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OpenOrderRequest}
 */
proto.OpenOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OpenOrderRequest;
  return proto.OpenOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OpenOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OpenOrderRequest}
 */
proto.OpenOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OpenOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OpenOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OpenOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * required Order order = 1;
 * @return {!proto.Order}
 */
proto.OpenOrderRequest.prototype.getOrder = function() {
  return /** @type{!proto.Order} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Order, 1, 1));
};


/**
 * @param {!proto.Order} value
 * @return {!proto.OpenOrderRequest} returns this
*/
proto.OpenOrderRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.OpenOrderRequest} returns this
 */
proto.OpenOrderRequest.prototype.clearOrder = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OpenOrderRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OpenOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.OpenOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OpenOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    order: (f = msg.getOrder()) && trading_model_pb.Order.toObject(includeInstance, f),
    msgCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OpenOrderResponse}
 */
proto.OpenOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OpenOrderResponse;
  return proto.OpenOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OpenOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OpenOrderResponse}
 */
proto.OpenOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.OpenOrderResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OpenOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OpenOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OpenOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OpenOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.OpenOrderResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.OpenOrderResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.OpenOrderResponse.Result}
 */
proto.OpenOrderResponse.prototype.getResult = function() {
  return /** @type {!proto.OpenOrderResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.OpenOrderResponse.Result} value
 * @return {!proto.OpenOrderResponse} returns this
 */
proto.OpenOrderResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.OpenOrderResponse} returns this
 */
proto.OpenOrderResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OpenOrderResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Order order = 2;
 * @return {?proto.Order}
 */
proto.OpenOrderResponse.prototype.getOrder = function() {
  return /** @type{?proto.Order} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Order, 2));
};


/**
 * @param {?proto.Order|undefined} value
 * @return {!proto.OpenOrderResponse} returns this
*/
proto.OpenOrderResponse.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.OpenOrderResponse} returns this
 */
proto.OpenOrderResponse.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OpenOrderResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string msg_code = 3;
 * @return {string}
 */
proto.OpenOrderResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.OpenOrderResponse} returns this
 */
proto.OpenOrderResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.OpenOrderResponse} returns this
 */
proto.OpenOrderResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.OpenOrderResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.LeaveOrderRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeaveOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.LeaveOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeaveOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    leaveType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    orderList: jspb.Message.toObjectList(msg.getOrderList(),
    trading_model_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeaveOrderRequest}
 */
proto.LeaveOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeaveOrderRequest;
  return proto.LeaveOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeaveOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeaveOrderRequest}
 */
proto.LeaveOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.OrderType} */ (reader.readEnum());
      msg.setLeaveType(value);
      break;
    case 2:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.addOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeaveOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LeaveOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LeaveOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.OrderType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * required OrderType leave_type = 1;
 * @return {!proto.OrderType}
 */
proto.LeaveOrderRequest.prototype.getLeaveType = function() {
  return /** @type {!proto.OrderType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.OrderType} value
 * @return {!proto.LeaveOrderRequest} returns this
 */
proto.LeaveOrderRequest.prototype.setLeaveType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LeaveOrderRequest} returns this
 */
proto.LeaveOrderRequest.prototype.clearLeaveType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LeaveOrderRequest.prototype.hasLeaveType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Order order = 2;
 * @return {!Array<!proto.Order>}
 */
proto.LeaveOrderRequest.prototype.getOrderList = function() {
  return /** @type{!Array<!proto.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Order, 2));
};


/**
 * @param {!Array<!proto.Order>} value
 * @return {!proto.LeaveOrderRequest} returns this
*/
proto.LeaveOrderRequest.prototype.setOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Order}
 */
proto.LeaveOrderRequest.prototype.addOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.LeaveOrderRequest} returns this
 */
proto.LeaveOrderRequest.prototype.clearOrderList = function() {
  return this.setOrderList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeaveOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.LeaveOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeaveOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeaveOrderResponse}
 */
proto.LeaveOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeaveOrderResponse;
  return proto.LeaveOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeaveOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeaveOrderResponse}
 */
proto.LeaveOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.LeaveOrderResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeaveOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LeaveOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LeaveOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.LeaveOrderResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.LeaveOrderResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.LeaveOrderResponse.Result}
 */
proto.LeaveOrderResponse.prototype.getResult = function() {
  return /** @type {!proto.LeaveOrderResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.LeaveOrderResponse.Result} value
 * @return {!proto.LeaveOrderResponse} returns this
 */
proto.LeaveOrderResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LeaveOrderResponse} returns this
 */
proto.LeaveOrderResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LeaveOrderResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.LeaveOrderResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.LeaveOrderResponse} returns this
 */
proto.LeaveOrderResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.LeaveOrderResponse} returns this
 */
proto.LeaveOrderResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.LeaveOrderResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    order: (f = msg.getOrder()) && trading_model_pb.Order.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyOrderRequest}
 */
proto.ModifyOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyOrderRequest;
  return proto.ModifyOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyOrderRequest}
 */
proto.ModifyOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ModifyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ModifyType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * required ModifyType type = 1;
 * @return {!proto.ModifyType}
 */
proto.ModifyOrderRequest.prototype.getType = function() {
  return /** @type {!proto.ModifyType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.ModifyType} value
 * @return {!proto.ModifyOrderRequest} returns this
 */
proto.ModifyOrderRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyOrderRequest} returns this
 */
proto.ModifyOrderRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Order order = 2;
 * @return {?proto.Order}
 */
proto.ModifyOrderRequest.prototype.getOrder = function() {
  return /** @type{?proto.Order} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Order, 2));
};


/**
 * @param {?proto.Order|undefined} value
 * @return {!proto.ModifyOrderRequest} returns this
*/
proto.ModifyOrderRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ModifyOrderRequest} returns this
 */
proto.ModifyOrderRequest.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    order: (f = msg.getOrder()) && trading_model_pb.Order.toObject(includeInstance, f),
    result: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyOrderResponse}
 */
proto.ModifyOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyOrderResponse;
  return proto.ModifyOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyOrderResponse}
 */
proto.ModifyOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ModifyType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
      break;
    case 3:
      var value = /** @type {!proto.ModifyOrderResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ModifyType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.ModifyOrderResponse.Result} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ModifyOrderResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required ModifyType type = 1;
 * @return {!proto.ModifyType}
 */
proto.ModifyOrderResponse.prototype.getType = function() {
  return /** @type {!proto.ModifyType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.ModifyType} value
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderResponse.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Order order = 2;
 * @return {!proto.Order}
 */
proto.ModifyOrderResponse.prototype.getOrder = function() {
  return /** @type{!proto.Order} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Order, 2, 1));
};


/**
 * @param {!proto.Order} value
 * @return {!proto.ModifyOrderResponse} returns this
*/
proto.ModifyOrderResponse.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.clearOrder = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderResponse.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required Result result = 3;
 * @return {!proto.ModifyOrderResponse.Result}
 */
proto.ModifyOrderResponse.prototype.getResult = function() {
  return /** @type {!proto.ModifyOrderResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.ModifyOrderResponse.Result} value
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string msg_code = 4;
 * @return {string}
 */
proto.ModifyOrderResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyOrderResponse} returns this
 */
proto.ModifyOrderResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyOrderResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SquarePositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SquarePositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SquarePositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SquarePositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    symbolCd: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SquarePositionRequest}
 */
proto.SquarePositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SquarePositionRequest;
  return proto.SquarePositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SquarePositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SquarePositionRequest}
 */
proto.SquarePositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SquareType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SquarePositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SquarePositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SquarePositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SquarePositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SquareType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required SquareType type = 1;
 * @return {!proto.SquareType}
 */
proto.SquarePositionRequest.prototype.getType = function() {
  return /** @type {!proto.SquareType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.SquareType} value
 * @return {!proto.SquarePositionRequest} returns this
 */
proto.SquarePositionRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SquarePositionRequest} returns this
 */
proto.SquarePositionRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SquarePositionRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string symbol_cd = 2;
 * @return {string}
 */
proto.SquarePositionRequest.prototype.getSymbolCd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SquarePositionRequest} returns this
 */
proto.SquarePositionRequest.prototype.setSymbolCd = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SquarePositionRequest} returns this
 */
proto.SquarePositionRequest.prototype.clearSymbolCd = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SquarePositionRequest.prototype.hasSymbolCd = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SquarePositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SquarePositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SquarePositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SquarePositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SquarePositionResponse}
 */
proto.SquarePositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SquarePositionResponse;
  return proto.SquarePositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SquarePositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SquarePositionResponse}
 */
proto.SquarePositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SquarePositionResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SquarePositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SquarePositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SquarePositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SquarePositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SquarePositionResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SquarePositionResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.SquarePositionResponse.Result}
 */
proto.SquarePositionResponse.prototype.getResult = function() {
  return /** @type {!proto.SquarePositionResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.SquarePositionResponse.Result} value
 * @return {!proto.SquarePositionResponse} returns this
 */
proto.SquarePositionResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SquarePositionResponse} returns this
 */
proto.SquarePositionResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SquarePositionResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.SquarePositionResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SquarePositionResponse} returns this
 */
proto.SquarePositionResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SquarePositionResponse} returns this
 */
proto.SquarePositionResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SquarePositionResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.TradingHistoryRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TradingHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.TradingHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TradingHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradingHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderStatusList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    fromTime: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    toTime: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TradingHistoryRequest}
 */
proto.TradingHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TradingHistoryRequest;
  return proto.TradingHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TradingHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TradingHistoryRequest}
 */
proto.TradingHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<!proto.OrderStatus>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addOrderStatus(values[i]);
      }
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TradingHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TradingHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TradingHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradingHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderStatusList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * repeated OrderStatus order_status = 1;
 * @return {!Array<!proto.OrderStatus>}
 */
proto.TradingHistoryRequest.prototype.getOrderStatusList = function() {
  return /** @type {!Array<!proto.OrderStatus>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<!proto.OrderStatus>} value
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.setOrderStatusList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!proto.OrderStatus} value
 * @param {number=} opt_index
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.addOrderStatus = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.clearOrderStatusList = function() {
  return this.setOrderStatusList([]);
};


/**
 * optional string from_time = 2;
 * @return {string}
 */
proto.TradingHistoryRequest.prototype.getFromTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.clearFromTime = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradingHistoryRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string to_time = 3;
 * @return {string}
 */
proto.TradingHistoryRequest.prototype.getToTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.setToTime = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TradingHistoryRequest} returns this
 */
proto.TradingHistoryRequest.prototype.clearToTime = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradingHistoryRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.TradingHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TradingHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.TradingHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TradingHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradingHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    ordersList: jspb.Message.toObjectList(msg.getOrdersList(),
    trading_model_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TradingHistoryResponse}
 */
proto.TradingHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TradingHistoryResponse;
  return proto.TradingHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TradingHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TradingHistoryResponse}
 */
proto.TradingHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.TradingHistoryResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.addOrders(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TradingHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TradingHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TradingHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TradingHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.TradingHistoryResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getOrdersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.TradingHistoryResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.TradingHistoryResponse.Result}
 */
proto.TradingHistoryResponse.prototype.getResult = function() {
  return /** @type {!proto.TradingHistoryResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.TradingHistoryResponse.Result} value
 * @return {!proto.TradingHistoryResponse} returns this
 */
proto.TradingHistoryResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.TradingHistoryResponse} returns this
 */
proto.TradingHistoryResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.TradingHistoryResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Order orders = 2;
 * @return {!Array<!proto.Order>}
 */
proto.TradingHistoryResponse.prototype.getOrdersList = function() {
  return /** @type{!Array<!proto.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Order, 2));
};


/**
 * @param {!Array<!proto.Order>} value
 * @return {!proto.TradingHistoryResponse} returns this
*/
proto.TradingHistoryResponse.prototype.setOrdersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Order}
 */
proto.TradingHistoryResponse.prototype.addOrders = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.TradingHistoryResponse} returns this
 */
proto.TradingHistoryResponse.prototype.clearOrdersList = function() {
  return this.setOrdersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetPositionRequest}
 */
proto.GetPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetPositionRequest;
  return proto.GetPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetPositionRequest}
 */
proto.GetPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetPositionResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionList: jspb.Message.toObjectList(msg.getPositionList(),
    trading_model_pb.Position.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetPositionResponse}
 */
proto.GetPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetPositionResponse;
  return proto.GetPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetPositionResponse}
 */
proto.GetPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Position;
      reader.readMessage(value,trading_model_pb.Position.deserializeBinaryFromReader);
      msg.addPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      trading_model_pb.Position.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Position position = 1;
 * @return {!Array<!proto.Position>}
 */
proto.GetPositionResponse.prototype.getPositionList = function() {
  return /** @type{!Array<!proto.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Position, 1));
};


/**
 * @param {!Array<!proto.Position>} value
 * @return {!proto.GetPositionResponse} returns this
*/
proto.GetPositionResponse.prototype.setPositionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Position}
 */
proto.GetPositionResponse.prototype.addPosition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetPositionResponse} returns this
 */
proto.GetPositionResponse.prototype.clearPositionList = function() {
  return this.setPositionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MarginCallEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.MarginCallEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MarginCallEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarginCallEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    timestamp: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    account: (f = msg.getAccount()) && customer_model_pb.CustomerAccount.toObject(includeInstance, f),
    marginStatus: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MarginCallEvent}
 */
proto.MarginCallEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MarginCallEvent;
  return proto.MarginCallEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MarginCallEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MarginCallEvent}
 */
proto.MarginCallEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = new customer_model_pb.CustomerAccount;
      reader.readMessage(value,customer_model_pb.CustomerAccount.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMarginStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MarginCallEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MarginCallEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MarginCallEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MarginCallEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      customer_model_pb.CustomerAccount.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * required int64 id = 1;
 * @return {number}
 */
proto.MarginCallEvent.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarginCallEvent.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int64 timestamp = 2;
 * @return {number}
 */
proto.MarginCallEvent.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarginCallEvent.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CustomerAccount account = 3;
 * @return {?proto.CustomerAccount}
 */
proto.MarginCallEvent.prototype.getAccount = function() {
  return /** @type{?proto.CustomerAccount} */ (
    jspb.Message.getWrapperField(this, customer_model_pb.CustomerAccount, 3));
};


/**
 * @param {?proto.CustomerAccount|undefined} value
 * @return {!proto.MarginCallEvent} returns this
*/
proto.MarginCallEvent.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarginCallEvent.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * required int32 margin_status = 4;
 * @return {number}
 */
proto.MarginCallEvent.prototype.getMarginStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.setMarginStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.MarginCallEvent} returns this
 */
proto.MarginCallEvent.prototype.clearMarginStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MarginCallEvent.prototype.hasMarginStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.OrderEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderList: jspb.Message.toObjectList(msg.getOrderList(),
    trading_model_pb.Order.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderEvent}
 */
proto.OrderEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderEvent;
  return proto.OrderEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderEvent}
 */
proto.OrderEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Order;
      reader.readMessage(value,trading_model_pb.Order.deserializeBinaryFromReader);
      msg.addOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      trading_model_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Order order = 1;
 * @return {!Array<!proto.Order>}
 */
proto.OrderEvent.prototype.getOrderList = function() {
  return /** @type{!Array<!proto.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Order, 1));
};


/**
 * @param {!Array<!proto.Order>} value
 * @return {!proto.OrderEvent} returns this
*/
proto.OrderEvent.prototype.setOrderList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Order}
 */
proto.OrderEvent.prototype.addOrder = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.OrderEvent} returns this
 */
proto.OrderEvent.prototype.clearOrderList = function() {
  return this.setOrderList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.PositionEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PositionEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.PositionEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PositionEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PositionEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionList: jspb.Message.toObjectList(msg.getPositionList(),
    trading_model_pb.Position.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PositionEvent}
 */
proto.PositionEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PositionEvent;
  return proto.PositionEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PositionEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PositionEvent}
 */
proto.PositionEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Position;
      reader.readMessage(value,trading_model_pb.Position.deserializeBinaryFromReader);
      msg.addPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PositionEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PositionEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PositionEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PositionEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      trading_model_pb.Position.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Position position = 1;
 * @return {!Array<!proto.Position>}
 */
proto.PositionEvent.prototype.getPositionList = function() {
  return /** @type{!Array<!proto.Position>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Position, 1));
};


/**
 * @param {!Array<!proto.Position>} value
 * @return {!proto.PositionEvent} returns this
*/
proto.PositionEvent.prototype.setPositionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Position=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Position}
 */
proto.PositionEvent.prototype.addPosition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Position, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.PositionEvent} returns this
 */
proto.PositionEvent.prototype.clearPositionList = function() {
  return this.setPositionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetLatestOrderBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetLatestOrderBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetLatestOrderBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestOrderBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    depthType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    symbolCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetLatestOrderBookRequest}
 */
proto.GetLatestOrderBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetLatestOrderBookRequest;
  return proto.GetLatestOrderBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetLatestOrderBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetLatestOrderBookRequest}
 */
proto.GetLatestOrderBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DepthType} */ (reader.readEnum());
      msg.setDepthType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetLatestOrderBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetLatestOrderBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetLatestOrderBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestOrderBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DepthType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required DepthType depth_type = 1;
 * @return {!proto.DepthType}
 */
proto.GetLatestOrderBookRequest.prototype.getDepthType = function() {
  return /** @type {!proto.DepthType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.DepthType} value
 * @return {!proto.GetLatestOrderBookRequest} returns this
 */
proto.GetLatestOrderBookRequest.prototype.setDepthType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GetLatestOrderBookRequest} returns this
 */
proto.GetLatestOrderBookRequest.prototype.clearDepthType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetLatestOrderBookRequest.prototype.hasDepthType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string symbol_code = 2;
 * @return {string}
 */
proto.GetLatestOrderBookRequest.prototype.getSymbolCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetLatestOrderBookRequest} returns this
 */
proto.GetLatestOrderBookRequest.prototype.setSymbolCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GetLatestOrderBookRequest} returns this
 */
proto.GetLatestOrderBookRequest.prototype.clearSymbolCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetLatestOrderBookRequest.prototype.hasSymbolCode = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetLatestOrderBookResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetLatestOrderBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetLatestOrderBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetLatestOrderBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestOrderBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    depthType: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    bookList: jspb.Message.toObjectList(msg.getBookList(),
    trading_model_pb.OrderBook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetLatestOrderBookResponse}
 */
proto.GetLatestOrderBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetLatestOrderBookResponse;
  return proto.GetLatestOrderBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetLatestOrderBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetLatestOrderBookResponse}
 */
proto.GetLatestOrderBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DepthType} */ (reader.readEnum());
      msg.setDepthType(value);
      break;
    case 2:
      var value = new trading_model_pb.OrderBook;
      reader.readMessage(value,trading_model_pb.OrderBook.deserializeBinaryFromReader);
      msg.addBook(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetLatestOrderBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetLatestOrderBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetLatestOrderBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestOrderBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DepthType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBookList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      trading_model_pb.OrderBook.serializeBinaryToWriter
    );
  }
};


/**
 * required DepthType depth_type = 1;
 * @return {!proto.DepthType}
 */
proto.GetLatestOrderBookResponse.prototype.getDepthType = function() {
  return /** @type {!proto.DepthType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.DepthType} value
 * @return {!proto.GetLatestOrderBookResponse} returns this
 */
proto.GetLatestOrderBookResponse.prototype.setDepthType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GetLatestOrderBookResponse} returns this
 */
proto.GetLatestOrderBookResponse.prototype.clearDepthType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetLatestOrderBookResponse.prototype.hasDepthType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated OrderBook book = 2;
 * @return {!Array<!proto.OrderBook>}
 */
proto.GetLatestOrderBookResponse.prototype.getBookList = function() {
  return /** @type{!Array<!proto.OrderBook>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.OrderBook, 2));
};


/**
 * @param {!Array<!proto.OrderBook>} value
 * @return {!proto.GetLatestOrderBookResponse} returns this
*/
proto.GetLatestOrderBookResponse.prototype.setBookList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.OrderBook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.OrderBook}
 */
proto.GetLatestOrderBookResponse.prototype.addBook = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.OrderBook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetLatestOrderBookResponse} returns this
 */
proto.GetLatestOrderBookResponse.prototype.clearBookList = function() {
  return this.setBookList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetLatestFootpintRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.GetLatestFootpintRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetLatestFootpintRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestFootpintRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mine: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetLatestFootpintRequest}
 */
proto.GetLatestFootpintRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetLatestFootpintRequest;
  return proto.GetLatestFootpintRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetLatestFootpintRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetLatestFootpintRequest}
 */
proto.GetLatestFootpintRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMine(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetLatestFootpintRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetLatestFootpintRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetLatestFootpintRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestFootpintRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * required string symbol_code = 1;
 * @return {string}
 */
proto.GetLatestFootpintRequest.prototype.getSymbolCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.GetLatestFootpintRequest} returns this
 */
proto.GetLatestFootpintRequest.prototype.setSymbolCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GetLatestFootpintRequest} returns this
 */
proto.GetLatestFootpintRequest.prototype.clearSymbolCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetLatestFootpintRequest.prototype.hasSymbolCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 mine = 2;
 * @return {number}
 */
proto.GetLatestFootpintRequest.prototype.getMine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.GetLatestFootpintRequest} returns this
 */
proto.GetLatestFootpintRequest.prototype.setMine = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.GetLatestFootpintRequest} returns this
 */
proto.GetLatestFootpintRequest.prototype.clearMine = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GetLatestFootpintRequest.prototype.hasMine = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GetLatestFootpintResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GetLatestFootpintResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.GetLatestFootpintResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GetLatestFootpintResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestFootpintResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    executionList: jspb.Message.toObjectList(msg.getExecutionList(),
    trading_model_pb.Footprint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GetLatestFootpintResponse}
 */
proto.GetLatestFootpintResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GetLatestFootpintResponse;
  return proto.GetLatestFootpintResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GetLatestFootpintResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GetLatestFootpintResponse}
 */
proto.GetLatestFootpintResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Footprint;
      reader.readMessage(value,trading_model_pb.Footprint.deserializeBinaryFromReader);
      msg.addExecution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GetLatestFootpintResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GetLatestFootpintResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GetLatestFootpintResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GetLatestFootpintResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecutionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      trading_model_pb.Footprint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Footprint execution = 1;
 * @return {!Array<!proto.Footprint>}
 */
proto.GetLatestFootpintResponse.prototype.getExecutionList = function() {
  return /** @type{!Array<!proto.Footprint>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Footprint, 1));
};


/**
 * @param {!Array<!proto.Footprint>} value
 * @return {!proto.GetLatestFootpintResponse} returns this
*/
proto.GetLatestFootpintResponse.prototype.setExecutionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Footprint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Footprint}
 */
proto.GetLatestFootpintResponse.prototype.addExecution = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Footprint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GetLatestFootpintResponse} returns this
 */
proto.GetLatestFootpintResponse.prototype.clearExecutionList = function() {
  return this.setExecutionList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.OrderBookEvent.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.OrderBookEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.OrderBookEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.OrderBookEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderBookEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    bookList: jspb.Message.toObjectList(msg.getBookList(),
    trading_model_pb.OrderBook.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.OrderBookEvent}
 */
proto.OrderBookEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.OrderBookEvent;
  return proto.OrderBookEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.OrderBookEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.OrderBookEvent}
 */
proto.OrderBookEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.OrderBook;
      reader.readMessage(value,trading_model_pb.OrderBook.deserializeBinaryFromReader);
      msg.addBook(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.OrderBookEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.OrderBookEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.OrderBookEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.OrderBookEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBookList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      trading_model_pb.OrderBook.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OrderBook book = 1;
 * @return {!Array<!proto.OrderBook>}
 */
proto.OrderBookEvent.prototype.getBookList = function() {
  return /** @type{!Array<!proto.OrderBook>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.OrderBook, 1));
};


/**
 * @param {!Array<!proto.OrderBook>} value
 * @return {!proto.OrderBookEvent} returns this
*/
proto.OrderBookEvent.prototype.setBookList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.OrderBook=} opt_value
 * @param {number=} opt_index
 * @return {!proto.OrderBook}
 */
proto.OrderBookEvent.prototype.addBook = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.OrderBook, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.OrderBookEvent} returns this
 */
proto.OrderBookEvent.prototype.clearBookList = function() {
  return this.setBookList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeOrderBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeOrderBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeOrderBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeOrderBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeOrderBookRequest}
 */
proto.SubscribeOrderBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeOrderBookRequest;
  return proto.SubscribeOrderBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeOrderBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeOrderBookRequest}
 */
proto.SubscribeOrderBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeOrderBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeOrderBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeOrderBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeOrderBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string symbol_code = 1;
 * @return {string}
 */
proto.SubscribeOrderBookRequest.prototype.getSymbolCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeOrderBookRequest} returns this
 */
proto.SubscribeOrderBookRequest.prototype.setSymbolCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeOrderBookRequest} returns this
 */
proto.SubscribeOrderBookRequest.prototype.clearSymbolCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeOrderBookRequest.prototype.hasSymbolCode = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeOrderBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeOrderBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeOrderBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeOrderBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeOrderBookResponse}
 */
proto.SubscribeOrderBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeOrderBookResponse;
  return proto.SubscribeOrderBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeOrderBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeOrderBookResponse}
 */
proto.SubscribeOrderBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SubscribeOrderBookResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeOrderBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeOrderBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeOrderBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeOrderBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SubscribeOrderBookResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SubscribeOrderBookResponse.Result = {
  SUCCESS: 1,
  NOT_SUBSCRIBED: 2,
  INTERNAL_ERROR: 99
};

/**
 * required Result result = 1;
 * @return {!proto.SubscribeOrderBookResponse.Result}
 */
proto.SubscribeOrderBookResponse.prototype.getResult = function() {
  return /** @type {!proto.SubscribeOrderBookResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.SubscribeOrderBookResponse.Result} value
 * @return {!proto.SubscribeOrderBookResponse} returns this
 */
proto.SubscribeOrderBookResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeOrderBookResponse} returns this
 */
proto.SubscribeOrderBookResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeOrderBookResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UnsubscribeOrderBookRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnsubscribeOrderBookRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UnsubscribeOrderBookRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnsubscribeOrderBookRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeOrderBookRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolCodeList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnsubscribeOrderBookRequest}
 */
proto.UnsubscribeOrderBookRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnsubscribeOrderBookRequest;
  return proto.UnsubscribeOrderBookRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnsubscribeOrderBookRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnsubscribeOrderBookRequest}
 */
proto.UnsubscribeOrderBookRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addSymbolCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnsubscribeOrderBookRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UnsubscribeOrderBookRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UnsubscribeOrderBookRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeOrderBookRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSymbolCodeList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string symbol_code = 1;
 * @return {!Array<string>}
 */
proto.UnsubscribeOrderBookRequest.prototype.getSymbolCodeList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.UnsubscribeOrderBookRequest} returns this
 */
proto.UnsubscribeOrderBookRequest.prototype.setSymbolCodeList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.UnsubscribeOrderBookRequest} returns this
 */
proto.UnsubscribeOrderBookRequest.prototype.addSymbolCode = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UnsubscribeOrderBookRequest} returns this
 */
proto.UnsubscribeOrderBookRequest.prototype.clearSymbolCodeList = function() {
  return this.setSymbolCodeList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnsubscribeOrderBookResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.UnsubscribeOrderBookResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnsubscribeOrderBookResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeOrderBookResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnsubscribeOrderBookResponse}
 */
proto.UnsubscribeOrderBookResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnsubscribeOrderBookResponse;
  return proto.UnsubscribeOrderBookResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnsubscribeOrderBookResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnsubscribeOrderBookResponse}
 */
proto.UnsubscribeOrderBookResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.UnsubscribeOrderBookResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnsubscribeOrderBookResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UnsubscribeOrderBookResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UnsubscribeOrderBookResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeOrderBookResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.UnsubscribeOrderBookResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.UnsubscribeOrderBookResponse.Result = {
  SUCCESS: 1,
  NOT_SUBSCRIBED: 2,
  INTERNAL_ERROR: 99
};

/**
 * required Result result = 1;
 * @return {!proto.UnsubscribeOrderBookResponse.Result}
 */
proto.UnsubscribeOrderBookResponse.prototype.getResult = function() {
  return /** @type {!proto.UnsubscribeOrderBookResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.UnsubscribeOrderBookResponse.Result} value
 * @return {!proto.UnsubscribeOrderBookResponse} returns this
 */
proto.UnsubscribeOrderBookResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.UnsubscribeOrderBookResponse} returns this
 */
proto.UnsubscribeOrderBookResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UnsubscribeOrderBookResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeFootpintRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeFootpintRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeFootpintRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeFootpintRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    mine: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeFootpintRequest}
 */
proto.SubscribeFootpintRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeFootpintRequest;
  return proto.SubscribeFootpintRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeFootpintRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeFootpintRequest}
 */
proto.SubscribeFootpintRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMine(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeFootpintRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeFootpintRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeFootpintRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeFootpintRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * required string symbol_code = 1;
 * @return {string}
 */
proto.SubscribeFootpintRequest.prototype.getSymbolCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeFootpintRequest} returns this
 */
proto.SubscribeFootpintRequest.prototype.setSymbolCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeFootpintRequest} returns this
 */
proto.SubscribeFootpintRequest.prototype.clearSymbolCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeFootpintRequest.prototype.hasSymbolCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 mine = 2;
 * @return {number}
 */
proto.SubscribeFootpintRequest.prototype.getMine = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.SubscribeFootpintRequest} returns this
 */
proto.SubscribeFootpintRequest.prototype.setMine = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeFootpintRequest} returns this
 */
proto.SubscribeFootpintRequest.prototype.clearMine = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeFootpintRequest.prototype.hasMine = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeFootpintResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeFootpintResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeFootpintResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeFootpintResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeFootpintResponse}
 */
proto.SubscribeFootpintResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeFootpintResponse;
  return proto.SubscribeFootpintResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeFootpintResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeFootpintResponse}
 */
proto.SubscribeFootpintResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SubscribeFootpintResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeFootpintResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeFootpintResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeFootpintResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeFootpintResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SubscribeFootpintResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SubscribeFootpintResponse.Result = {
  SUCCESS: 1,
  NOT_SUBSCRIBED: 2,
  INTERNAL_ERROR: 99
};

/**
 * required Result result = 1;
 * @return {!proto.SubscribeFootpintResponse.Result}
 */
proto.SubscribeFootpintResponse.prototype.getResult = function() {
  return /** @type {!proto.SubscribeFootpintResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.SubscribeFootpintResponse.Result} value
 * @return {!proto.SubscribeFootpintResponse} returns this
 */
proto.SubscribeFootpintResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeFootpintResponse} returns this
 */
proto.SubscribeFootpintResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeFootpintResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FootprintEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.FootprintEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FootprintEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FootprintEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    execution: (f = msg.getExecution()) && trading_model_pb.Footprint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FootprintEvent}
 */
proto.FootprintEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FootprintEvent;
  return proto.FootprintEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FootprintEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FootprintEvent}
 */
proto.FootprintEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Footprint;
      reader.readMessage(value,trading_model_pb.Footprint.deserializeBinaryFromReader);
      msg.setExecution(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FootprintEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FootprintEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FootprintEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FootprintEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExecution();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Footprint.serializeBinaryToWriter
    );
  }
};


/**
 * required Footprint execution = 1;
 * @return {!proto.Footprint}
 */
proto.FootprintEvent.prototype.getExecution = function() {
  return /** @type{!proto.Footprint} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Footprint, 1, 1));
};


/**
 * @param {!proto.Footprint} value
 * @return {!proto.FootprintEvent} returns this
*/
proto.FootprintEvent.prototype.setExecution = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.FootprintEvent} returns this
 */
proto.FootprintEvent.prototype.clearExecution = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.FootprintEvent.prototype.hasExecution = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExchangeCurrencyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ExchangeCurrencyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExchangeCurrencyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExchangeCurrencyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fromCcy: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    toCcy: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    amount: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    source: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExchangeCurrencyRequest}
 */
proto.ExchangeCurrencyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExchangeCurrencyRequest;
  return proto.ExchangeCurrencyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExchangeCurrencyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExchangeCurrencyRequest}
 */
proto.ExchangeCurrencyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromCcy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setToCcy(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSource(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExchangeCurrencyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExchangeCurrencyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExchangeCurrencyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExchangeCurrencyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * required string from_ccy = 1;
 * @return {string}
 */
proto.ExchangeCurrencyRequest.prototype.getFromCcy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.setFromCcy = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.clearFromCcy = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExchangeCurrencyRequest.prototype.hasFromCcy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string to_ccy = 2;
 * @return {string}
 */
proto.ExchangeCurrencyRequest.prototype.getToCcy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.setToCcy = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.clearToCcy = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExchangeCurrencyRequest.prototype.hasToCcy = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * required string amount = 3;
 * @return {string}
 */
proto.ExchangeCurrencyRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExchangeCurrencyRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 source = 4;
 * @return {number}
 */
proto.ExchangeCurrencyRequest.prototype.getSource = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.setSource = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExchangeCurrencyRequest} returns this
 */
proto.ExchangeCurrencyRequest.prototype.clearSource = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExchangeCurrencyRequest.prototype.hasSource = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ExchangeCurrencyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ExchangeCurrencyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ExchangeCurrencyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExchangeCurrencyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ExchangeCurrencyResponse}
 */
proto.ExchangeCurrencyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ExchangeCurrencyResponse;
  return proto.ExchangeCurrencyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ExchangeCurrencyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ExchangeCurrencyResponse}
 */
proto.ExchangeCurrencyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ExchangeCurrencyResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ExchangeCurrencyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ExchangeCurrencyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ExchangeCurrencyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ExchangeCurrencyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ExchangeCurrencyResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ExchangeCurrencyResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.ExchangeCurrencyResponse.Result}
 */
proto.ExchangeCurrencyResponse.prototype.getResult = function() {
  return /** @type {!proto.ExchangeCurrencyResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ExchangeCurrencyResponse.Result} value
 * @return {!proto.ExchangeCurrencyResponse} returns this
 */
proto.ExchangeCurrencyResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExchangeCurrencyResponse} returns this
 */
proto.ExchangeCurrencyResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExchangeCurrencyResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.ExchangeCurrencyResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ExchangeCurrencyResponse} returns this
 */
proto.ExchangeCurrencyResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ExchangeCurrencyResponse} returns this
 */
proto.ExchangeCurrencyResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ExchangeCurrencyResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WithdrawRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ccy: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    memo: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WithdrawRequest}
 */
proto.WithdrawRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawRequest;
  return proto.WithdrawRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawRequest}
 */
proto.WithdrawRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCcy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WithdrawRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * required string ccy = 1;
 * @return {string}
 */
proto.WithdrawRequest.prototype.getCcy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawRequest} returns this
 */
proto.WithdrawRequest.prototype.setCcy = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WithdrawRequest} returns this
 */
proto.WithdrawRequest.prototype.clearCcy = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawRequest.prototype.hasCcy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string amount = 2;
 * @return {string}
 */
proto.WithdrawRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawRequest} returns this
 */
proto.WithdrawRequest.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WithdrawRequest} returns this
 */
proto.WithdrawRequest.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string memo = 3;
 * @return {string}
 */
proto.WithdrawRequest.prototype.getMemo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawRequest} returns this
 */
proto.WithdrawRequest.prototype.setMemo = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WithdrawRequest} returns this
 */
proto.WithdrawRequest.prototype.clearMemo = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawRequest.prototype.hasMemo = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WithdrawResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.WithdrawResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WithdrawResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WithdrawResponse}
 */
proto.WithdrawResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WithdrawResponse;
  return proto.WithdrawResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WithdrawResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WithdrawResponse}
 */
proto.WithdrawResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.WithdrawResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WithdrawResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WithdrawResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WithdrawResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WithdrawResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.WithdrawResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.WithdrawResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.WithdrawResponse.Result}
 */
proto.WithdrawResponse.prototype.getResult = function() {
  return /** @type {!proto.WithdrawResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.WithdrawResponse.Result} value
 * @return {!proto.WithdrawResponse} returns this
 */
proto.WithdrawResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WithdrawResponse} returns this
 */
proto.WithdrawResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.WithdrawResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WithdrawResponse} returns this
 */
proto.WithdrawResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.WithdrawResponse} returns this
 */
proto.WithdrawResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.WithdrawResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EstimateTxFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.EstimateTxFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EstimateTxFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EstimateTxFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    ccy: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    amount: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EstimateTxFeeRequest}
 */
proto.EstimateTxFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EstimateTxFeeRequest;
  return proto.EstimateTxFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EstimateTxFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EstimateTxFeeRequest}
 */
proto.EstimateTxFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCcy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EstimateTxFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EstimateTxFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EstimateTxFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EstimateTxFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * required string ccy = 1;
 * @return {string}
 */
proto.EstimateTxFeeRequest.prototype.getCcy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.EstimateTxFeeRequest} returns this
 */
proto.EstimateTxFeeRequest.prototype.setCcy = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.EstimateTxFeeRequest} returns this
 */
proto.EstimateTxFeeRequest.prototype.clearCcy = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EstimateTxFeeRequest.prototype.hasCcy = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string amount = 2;
 * @return {string}
 */
proto.EstimateTxFeeRequest.prototype.getAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EstimateTxFeeRequest} returns this
 */
proto.EstimateTxFeeRequest.prototype.setAmount = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.EstimateTxFeeRequest} returns this
 */
proto.EstimateTxFeeRequest.prototype.clearAmount = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EstimateTxFeeRequest.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EstimateTxFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.EstimateTxFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EstimateTxFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EstimateTxFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EstimateTxFeeResponse}
 */
proto.EstimateTxFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EstimateTxFeeResponse;
  return proto.EstimateTxFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EstimateTxFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EstimateTxFeeResponse}
 */
proto.EstimateTxFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.EstimateTxFeeResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EstimateTxFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EstimateTxFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EstimateTxFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EstimateTxFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.EstimateTxFeeResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.EstimateTxFeeResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.EstimateTxFeeResponse.Result}
 */
proto.EstimateTxFeeResponse.prototype.getResult = function() {
  return /** @type {!proto.EstimateTxFeeResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.EstimateTxFeeResponse.Result} value
 * @return {!proto.EstimateTxFeeResponse} returns this
 */
proto.EstimateTxFeeResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.EstimateTxFeeResponse} returns this
 */
proto.EstimateTxFeeResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EstimateTxFeeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.EstimateTxFeeResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EstimateTxFeeResponse} returns this
 */
proto.EstimateTxFeeResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.EstimateTxFeeResponse} returns this
 */
proto.EstimateTxFeeResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EstimateTxFeeResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CashflowHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.CashflowHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CashflowHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashflowHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    fromTime: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    toTime: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CashflowHistoryRequest}
 */
proto.CashflowHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CashflowHistoryRequest;
  return proto.CashflowHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CashflowHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CashflowHistoryRequest}
 */
proto.CashflowHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.CashflowType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromTime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setToTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CashflowHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CashflowHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CashflowHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashflowHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.CashflowType} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * required CashflowType type = 1;
 * @return {!proto.CashflowType}
 */
proto.CashflowHistoryRequest.prototype.getType = function() {
  return /** @type {!proto.CashflowType} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.CashflowType} value
 * @return {!proto.CashflowHistoryRequest} returns this
 */
proto.CashflowHistoryRequest.prototype.setType = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CashflowHistoryRequest} returns this
 */
proto.CashflowHistoryRequest.prototype.clearType = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CashflowHistoryRequest.prototype.hasType = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string from_time = 2;
 * @return {string}
 */
proto.CashflowHistoryRequest.prototype.getFromTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CashflowHistoryRequest} returns this
 */
proto.CashflowHistoryRequest.prototype.setFromTime = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CashflowHistoryRequest} returns this
 */
proto.CashflowHistoryRequest.prototype.clearFromTime = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CashflowHistoryRequest.prototype.hasFromTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string to_time = 3;
 * @return {string}
 */
proto.CashflowHistoryRequest.prototype.getToTime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CashflowHistoryRequest} returns this
 */
proto.CashflowHistoryRequest.prototype.setToTime = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CashflowHistoryRequest} returns this
 */
proto.CashflowHistoryRequest.prototype.clearToTime = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CashflowHistoryRequest.prototype.hasToTime = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.CashflowHistoryResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CashflowHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.CashflowHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CashflowHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashflowHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    cashList: jspb.Message.toObjectList(msg.getCashList(),
    trading_model_pb.Cashflow.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CashflowHistoryResponse}
 */
proto.CashflowHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CashflowHistoryResponse;
  return proto.CashflowHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CashflowHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CashflowHistoryResponse}
 */
proto.CashflowHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.CashflowHistoryResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = new trading_model_pb.Cashflow;
      reader.readMessage(value,trading_model_pb.Cashflow.deserializeBinaryFromReader);
      msg.addCash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CashflowHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CashflowHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CashflowHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashflowHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.CashflowHistoryResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCashList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      trading_model_pb.Cashflow.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.CashflowHistoryResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.CashflowHistoryResponse.Result}
 */
proto.CashflowHistoryResponse.prototype.getResult = function() {
  return /** @type {!proto.CashflowHistoryResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.CashflowHistoryResponse.Result} value
 * @return {!proto.CashflowHistoryResponse} returns this
 */
proto.CashflowHistoryResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CashflowHistoryResponse} returns this
 */
proto.CashflowHistoryResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CashflowHistoryResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Cashflow cash = 2;
 * @return {!Array<!proto.Cashflow>}
 */
proto.CashflowHistoryResponse.prototype.getCashList = function() {
  return /** @type{!Array<!proto.Cashflow>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Cashflow, 2));
};


/**
 * @param {!Array<!proto.Cashflow>} value
 * @return {!proto.CashflowHistoryResponse} returns this
*/
proto.CashflowHistoryResponse.prototype.setCashList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.Cashflow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Cashflow}
 */
proto.CashflowHistoryResponse.prototype.addCash = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.Cashflow, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.CashflowHistoryResponse} returns this
 */
proto.CashflowHistoryResponse.prototype.clearCashList = function() {
  return this.setCashList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CashflowEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.CashflowEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CashflowEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashflowEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    cash: (f = msg.getCash()) && trading_model_pb.Cashflow.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CashflowEvent}
 */
proto.CashflowEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CashflowEvent;
  return proto.CashflowEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CashflowEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CashflowEvent}
 */
proto.CashflowEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Cashflow;
      reader.readMessage(value,trading_model_pb.Cashflow.deserializeBinaryFromReader);
      msg.setCash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CashflowEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CashflowEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CashflowEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CashflowEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Cashflow.serializeBinaryToWriter
    );
  }
};


/**
 * optional Cashflow cash = 1;
 * @return {?proto.Cashflow}
 */
proto.CashflowEvent.prototype.getCash = function() {
  return /** @type{?proto.Cashflow} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Cashflow, 1));
};


/**
 * @param {?proto.Cashflow|undefined} value
 * @return {!proto.CashflowEvent} returns this
*/
proto.CashflowEvent.prototype.setCash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.CashflowEvent} returns this
 */
proto.CashflowEvent.prototype.clearCash = function() {
  return this.setCash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CashflowEvent.prototype.hasCash = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealChatRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealChatRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealChatRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && trading_model_pb.Chat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealChatRequest}
 */
proto.DirectDealChatRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealChatRequest;
  return proto.DirectDealChatRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealChatRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealChatRequest}
 */
proto.DirectDealChatRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Chat;
      reader.readMessage(value,trading_model_pb.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealChatRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealChatRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealChatRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Chat.serializeBinaryToWriter
    );
  }
};


/**
 * required Chat chat = 1;
 * @return {!proto.Chat}
 */
proto.DirectDealChatRequest.prototype.getChat = function() {
  return /** @type{!proto.Chat} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Chat, 1, 1));
};


/**
 * @param {!proto.Chat} value
 * @return {!proto.DirectDealChatRequest} returns this
*/
proto.DirectDealChatRequest.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealChatRequest} returns this
 */
proto.DirectDealChatRequest.prototype.clearChat = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealChatRequest.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealChatResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealChatResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealChatResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealChatResponse}
 */
proto.DirectDealChatResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealChatResponse;
  return proto.DirectDealChatResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealChatResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealChatResponse}
 */
proto.DirectDealChatResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DirectDealChatResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealChatResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealChatResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealChatResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DirectDealChatResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.DirectDealChatResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.DirectDealChatResponse.Result}
 */
proto.DirectDealChatResponse.prototype.getResult = function() {
  return /** @type {!proto.DirectDealChatResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.DirectDealChatResponse.Result} value
 * @return {!proto.DirectDealChatResponse} returns this
 */
proto.DirectDealChatResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealChatResponse} returns this
 */
proto.DirectDealChatResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealChatResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.DirectDealChatResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.DirectDealChatResponse} returns this
 */
proto.DirectDealChatResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealChatResponse} returns this
 */
proto.DirectDealChatResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealChatResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealChatHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealChatHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealChatHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealChatHistoryRequest}
 */
proto.DirectDealChatHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealChatHistoryRequest;
  return proto.DirectDealChatHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealChatHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealChatHistoryRequest}
 */
proto.DirectDealChatHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealChatHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealChatHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealChatHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.DirectDealChatHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealChatHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealChatHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealChatHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatList: jspb.Message.toObjectList(msg.getChatList(),
    trading_model_pb.Chat.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealChatHistoryResponse}
 */
proto.DirectDealChatHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealChatHistoryResponse;
  return proto.DirectDealChatHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealChatHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealChatHistoryResponse}
 */
proto.DirectDealChatHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Chat;
      reader.readMessage(value,trading_model_pb.Chat.deserializeBinaryFromReader);
      msg.addChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealChatHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealChatHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealChatHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      trading_model_pb.Chat.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Chat chat = 1;
 * @return {!Array<!proto.Chat>}
 */
proto.DirectDealChatHistoryResponse.prototype.getChatList = function() {
  return /** @type{!Array<!proto.Chat>} */ (
    jspb.Message.getRepeatedWrapperField(this, trading_model_pb.Chat, 1));
};


/**
 * @param {!Array<!proto.Chat>} value
 * @return {!proto.DirectDealChatHistoryResponse} returns this
*/
proto.DirectDealChatHistoryResponse.prototype.setChatList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.Chat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.Chat}
 */
proto.DirectDealChatHistoryResponse.prototype.addChat = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.Chat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.DirectDealChatHistoryResponse} returns this
 */
proto.DirectDealChatHistoryResponse.prototype.clearChatList = function() {
  return this.setChatList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealChatEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealChatEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealChatEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    chat: (f = msg.getChat()) && trading_model_pb.Chat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealChatEvent}
 */
proto.DirectDealChatEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealChatEvent;
  return proto.DirectDealChatEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealChatEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealChatEvent}
 */
proto.DirectDealChatEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Chat;
      reader.readMessage(value,trading_model_pb.Chat.deserializeBinaryFromReader);
      msg.setChat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealChatEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealChatEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealChatEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealChatEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Chat.serializeBinaryToWriter
    );
  }
};


/**
 * required Chat chat = 1;
 * @return {!proto.Chat}
 */
proto.DirectDealChatEvent.prototype.getChat = function() {
  return /** @type{!proto.Chat} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Chat, 1, 1));
};


/**
 * @param {!proto.Chat} value
 * @return {!proto.DirectDealChatEvent} returns this
*/
proto.DirectDealChatEvent.prototype.setChat = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealChatEvent} returns this
 */
proto.DirectDealChatEvent.prototype.clearChat = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealChatEvent.prototype.hasChat = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    deal: (f = msg.getDeal()) && trading_model_pb.Deal.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealRequest}
 */
proto.DirectDealRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealRequest;
  return proto.DirectDealRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealRequest}
 */
proto.DirectDealRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Deal;
      reader.readMessage(value,trading_model_pb.Deal.deserializeBinaryFromReader);
      msg.setDeal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Deal.serializeBinaryToWriter
    );
  }
};


/**
 * required Deal deal = 1;
 * @return {!proto.Deal}
 */
proto.DirectDealRequest.prototype.getDeal = function() {
  return /** @type{!proto.Deal} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Deal, 1, 1));
};


/**
 * @param {!proto.Deal} value
 * @return {!proto.DirectDealRequest} returns this
*/
proto.DirectDealRequest.prototype.setDeal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealRequest} returns this
 */
proto.DirectDealRequest.prototype.clearDeal = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealRequest.prototype.hasDeal = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    deal: (f = msg.getDeal()) && trading_model_pb.Deal.toObject(includeInstance, f),
    msgCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealResponse}
 */
proto.DirectDealResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealResponse;
  return proto.DirectDealResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealResponse}
 */
proto.DirectDealResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.DirectDealResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = new trading_model_pb.Deal;
      reader.readMessage(value,trading_model_pb.Deal.deserializeBinaryFromReader);
      msg.setDeal(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.DirectDealResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getDeal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      trading_model_pb.Deal.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.DirectDealResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.DirectDealResponse.Result}
 */
proto.DirectDealResponse.prototype.getResult = function() {
  return /** @type {!proto.DirectDealResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.DirectDealResponse.Result} value
 * @return {!proto.DirectDealResponse} returns this
 */
proto.DirectDealResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealResponse} returns this
 */
proto.DirectDealResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required Deal deal = 2;
 * @return {!proto.Deal}
 */
proto.DirectDealResponse.prototype.getDeal = function() {
  return /** @type{!proto.Deal} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Deal, 2, 1));
};


/**
 * @param {!proto.Deal} value
 * @return {!proto.DirectDealResponse} returns this
*/
proto.DirectDealResponse.prototype.setDeal = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealResponse} returns this
 */
proto.DirectDealResponse.prototype.clearDeal = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealResponse.prototype.hasDeal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string msg_code = 3;
 * @return {string}
 */
proto.DirectDealResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.DirectDealResponse} returns this
 */
proto.DirectDealResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealResponse} returns this
 */
proto.DirectDealResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DirectDealEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.DirectDealEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DirectDealEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    deal: (f = msg.getDeal()) && trading_model_pb.Deal.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DirectDealEvent}
 */
proto.DirectDealEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DirectDealEvent;
  return proto.DirectDealEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DirectDealEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DirectDealEvent}
 */
proto.DirectDealEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new trading_model_pb.Deal;
      reader.readMessage(value,trading_model_pb.Deal.deserializeBinaryFromReader);
      msg.setDeal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DirectDealEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DirectDealEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DirectDealEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DirectDealEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDeal();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      trading_model_pb.Deal.serializeBinaryToWriter
    );
  }
};


/**
 * required Deal deal = 1;
 * @return {!proto.Deal}
 */
proto.DirectDealEvent.prototype.getDeal = function() {
  return /** @type{!proto.Deal} */ (
    jspb.Message.getWrapperField(this, trading_model_pb.Deal, 1, 1));
};


/**
 * @param {!proto.Deal} value
 * @return {!proto.DirectDealEvent} returns this
*/
proto.DirectDealEvent.prototype.setDeal = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.DirectDealEvent} returns this
 */
proto.DirectDealEvent.prototype.clearDeal = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.DirectDealEvent.prototype.hasDeal = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnsubscribeFootpintRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.UnsubscribeFootpintRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnsubscribeFootpintRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeFootpintRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolCode: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnsubscribeFootpintRequest}
 */
proto.UnsubscribeFootpintRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnsubscribeFootpintRequest;
  return proto.UnsubscribeFootpintRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnsubscribeFootpintRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnsubscribeFootpintRequest}
 */
proto.UnsubscribeFootpintRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnsubscribeFootpintRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UnsubscribeFootpintRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UnsubscribeFootpintRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeFootpintRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string symbol_code = 1;
 * @return {string}
 */
proto.UnsubscribeFootpintRequest.prototype.getSymbolCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UnsubscribeFootpintRequest} returns this
 */
proto.UnsubscribeFootpintRequest.prototype.setSymbolCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.UnsubscribeFootpintRequest} returns this
 */
proto.UnsubscribeFootpintRequest.prototype.clearSymbolCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UnsubscribeFootpintRequest.prototype.hasSymbolCode = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UnsubscribeFootpintResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.UnsubscribeFootpintResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UnsubscribeFootpintResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeFootpintResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UnsubscribeFootpintResponse}
 */
proto.UnsubscribeFootpintResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UnsubscribeFootpintResponse;
  return proto.UnsubscribeFootpintResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UnsubscribeFootpintResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UnsubscribeFootpintResponse}
 */
proto.UnsubscribeFootpintResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.UnsubscribeFootpintResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UnsubscribeFootpintResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UnsubscribeFootpintResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UnsubscribeFootpintResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UnsubscribeFootpintResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.UnsubscribeFootpintResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.UnsubscribeFootpintResponse.Result = {
  SUCCESS: 1,
  NOT_SUBSCRIBED: 2,
  INTERNAL_ERROR: 99
};

/**
 * required Result result = 1;
 * @return {!proto.UnsubscribeFootpintResponse.Result}
 */
proto.UnsubscribeFootpintResponse.prototype.getResult = function() {
  return /** @type {!proto.UnsubscribeFootpintResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.UnsubscribeFootpintResponse.Result} value
 * @return {!proto.UnsubscribeFootpintResponse} returns this
 */
proto.UnsubscribeFootpintResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.UnsubscribeFootpintResponse} returns this
 */
proto.UnsubscribeFootpintResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UnsubscribeFootpintResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.NetoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    symbolCd: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetoutRequest}
 */
proto.NetoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetoutRequest;
  return proto.NetoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetoutRequest}
 */
proto.NetoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbolCd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string symbol_cd = 1;
 * @return {string}
 */
proto.NetoutRequest.prototype.getSymbolCd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetoutRequest} returns this
 */
proto.NetoutRequest.prototype.setSymbolCd = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NetoutRequest} returns this
 */
proto.NetoutRequest.prototype.clearSymbolCd = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetoutRequest.prototype.hasSymbolCd = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.NetoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.NetoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.NetoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.NetoutResponse}
 */
proto.NetoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.NetoutResponse;
  return proto.NetoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.NetoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.NetoutResponse}
 */
proto.NetoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.NetoutResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.NetoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.NetoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.NetoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.NetoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.NetoutResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.NetoutResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.NetoutResponse.Result}
 */
proto.NetoutResponse.prototype.getResult = function() {
  return /** @type {!proto.NetoutResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.NetoutResponse.Result} value
 * @return {!proto.NetoutResponse} returns this
 */
proto.NetoutResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NetoutResponse} returns this
 */
proto.NetoutResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetoutResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.NetoutResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.NetoutResponse} returns this
 */
proto.NetoutResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.NetoutResponse} returns this
 */
proto.NetoutResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.NetoutResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeJackpotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeJackpotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeJackpotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeJackpotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeJackpotRequest}
 */
proto.SubscribeJackpotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeJackpotRequest;
  return proto.SubscribeJackpotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeJackpotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeJackpotRequest}
 */
proto.SubscribeJackpotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeJackpotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeJackpotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeJackpotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeJackpotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubscribeJackpotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.SubscribeJackpotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubscribeJackpotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeJackpotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    jackpot: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubscribeJackpotResponse}
 */
proto.SubscribeJackpotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubscribeJackpotResponse;
  return proto.SubscribeJackpotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubscribeJackpotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubscribeJackpotResponse}
 */
proto.SubscribeJackpotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.SubscribeJackpotResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setJackpot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubscribeJackpotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubscribeJackpotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubscribeJackpotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubscribeJackpotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.SubscribeJackpotResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SubscribeJackpotResponse.Result = {
  SUCCESS: 1,
  NOT_SUBSCRIBED: 2,
  INTERNAL_ERROR: 99
};

/**
 * required Result result = 1;
 * @return {!proto.SubscribeJackpotResponse.Result}
 */
proto.SubscribeJackpotResponse.prototype.getResult = function() {
  return /** @type {!proto.SubscribeJackpotResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.SubscribeJackpotResponse.Result} value
 * @return {!proto.SubscribeJackpotResponse} returns this
 */
proto.SubscribeJackpotResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeJackpotResponse} returns this
 */
proto.SubscribeJackpotResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeJackpotResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required string jackpot = 2;
 * @return {string}
 */
proto.SubscribeJackpotResponse.prototype.getJackpot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SubscribeJackpotResponse} returns this
 */
proto.SubscribeJackpotResponse.prototype.setJackpot = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.SubscribeJackpotResponse} returns this
 */
proto.SubscribeJackpotResponse.prototype.clearJackpot = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubscribeJackpotResponse.prototype.hasJackpot = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JackpotEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.JackpotEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JackpotEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JackpotEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    jackpot: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JackpotEvent}
 */
proto.JackpotEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JackpotEvent;
  return proto.JackpotEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JackpotEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JackpotEvent}
 */
proto.JackpotEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJackpot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JackpotEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JackpotEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JackpotEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JackpotEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * required string jackpot = 1;
 * @return {string}
 */
proto.JackpotEvent.prototype.getJackpot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JackpotEvent} returns this
 */
proto.JackpotEvent.prototype.setJackpot = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.JackpotEvent} returns this
 */
proto.JackpotEvent.prototype.clearJackpot = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JackpotEvent.prototype.hasJackpot = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyPositionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyPositionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyPositionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyPositionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    sl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    tp: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    closeAmount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyPositionRequest}
 */
proto.ModifyPositionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyPositionRequest;
  return proto.ModifyPositionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyPositionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyPositionRequest}
 */
proto.ModifyPositionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSl(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCloseAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyPositionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyPositionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyPositionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyPositionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * required string id = 1;
 * @return {string}
 */
proto.ModifyPositionRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.setId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.clearId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyPositionRequest.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string sl = 2;
 * @return {string}
 */
proto.ModifyPositionRequest.prototype.getSl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.setSl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.clearSl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyPositionRequest.prototype.hasSl = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string tp = 3;
 * @return {string}
 */
proto.ModifyPositionRequest.prototype.getTp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.setTp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.clearTp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyPositionRequest.prototype.hasTp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string close_amount = 4;
 * @return {string}
 */
proto.ModifyPositionRequest.prototype.getCloseAmount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.setCloseAmount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyPositionRequest} returns this
 */
proto.ModifyPositionRequest.prototype.clearCloseAmount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyPositionRequest.prototype.hasCloseAmount = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyPositionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyPositionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyPositionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyPositionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    msgCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyPositionResponse}
 */
proto.ModifyPositionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyPositionResponse;
  return proto.ModifyPositionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyPositionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyPositionResponse}
 */
proto.ModifyPositionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.ModifyPositionResponse.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyPositionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyPositionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyPositionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyPositionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.ModifyPositionResponse.Result} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ModifyPositionResponse.Result = {
  FAILED: 0,
  SUCCESS: 1,
  INTERNAL_ERROR: 9
};

/**
 * required Result result = 1;
 * @return {!proto.ModifyPositionResponse.Result}
 */
proto.ModifyPositionResponse.prototype.getResult = function() {
  return /** @type {!proto.ModifyPositionResponse.Result} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.ModifyPositionResponse.Result} value
 * @return {!proto.ModifyPositionResponse} returns this
 */
proto.ModifyPositionResponse.prototype.setResult = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyPositionResponse} returns this
 */
proto.ModifyPositionResponse.prototype.clearResult = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyPositionResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg_code = 2;
 * @return {string}
 */
proto.ModifyPositionResponse.prototype.getMsgCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyPositionResponse} returns this
 */
proto.ModifyPositionResponse.prototype.setMsgCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyPositionResponse} returns this
 */
proto.ModifyPositionResponse.prototype.clearMsgCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyPositionResponse.prototype.hasMsgCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * @enum {number}
 */
proto.ModifyType = {
  UPDATE: 1,
  CANCEL: 2
};

/**
 * @enum {number}
 */
proto.SquareType = {
  ONE: 1,
  ALL: 2
};

goog.object.extend(exports, proto);
