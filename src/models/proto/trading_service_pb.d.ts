// package: 
// file: trading_service.proto

import * as jspb from "google-protobuf";
import * as rpc_pb from "./rpc_pb";
import * as trading_model_pb from "./trading_model_pb";
import * as customer_model_pb from "./customer_model_pb";

export class OpenOrderRequest extends jspb.Message {
  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OpenOrderRequest): OpenOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenOrderRequest;
  static deserializeBinaryFromReader(message: OpenOrderRequest, reader: jspb.BinaryReader): OpenOrderRequest;
}

export namespace OpenOrderRequest {
  export type AsObject = {
    order: trading_model_pb.Order.AsObject,
  }
}

export class OpenOrderResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): OpenOrderResponse.ResultMap[keyof OpenOrderResponse.ResultMap] | undefined;
  setResult(value: OpenOrderResponse.ResultMap[keyof OpenOrderResponse.ResultMap]): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OpenOrderResponse): OpenOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OpenOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenOrderResponse;
  static deserializeBinaryFromReader(message: OpenOrderResponse, reader: jspb.BinaryReader): OpenOrderResponse;
}

export namespace OpenOrderResponse {
  export type AsObject = {
    result?: OpenOrderResponse.ResultMap[keyof OpenOrderResponse.ResultMap],
    order?: trading_model_pb.Order.AsObject,
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class LeaveOrderRequest extends jspb.Message {
  hasLeaveType(): boolean;
  clearLeaveType(): void;
  getLeaveType(): trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap] | undefined;
  setLeaveType(value: trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap]): void;

  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveOrderRequest): LeaveOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveOrderRequest;
  static deserializeBinaryFromReader(message: LeaveOrderRequest, reader: jspb.BinaryReader): LeaveOrderRequest;
}

export namespace LeaveOrderRequest {
  export type AsObject = {
    leaveType?: trading_model_pb.OrderTypeMap[keyof trading_model_pb.OrderTypeMap],
    orderList: Array<trading_model_pb.Order.AsObject>,
  }
}

export class LeaveOrderResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): LeaveOrderResponse.ResultMap[keyof LeaveOrderResponse.ResultMap] | undefined;
  setResult(value: LeaveOrderResponse.ResultMap[keyof LeaveOrderResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LeaveOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LeaveOrderResponse): LeaveOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LeaveOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LeaveOrderResponse;
  static deserializeBinaryFromReader(message: LeaveOrderResponse, reader: jspb.BinaryReader): LeaveOrderResponse;
}

export namespace LeaveOrderResponse {
  export type AsObject = {
    result?: LeaveOrderResponse.ResultMap[keyof LeaveOrderResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class ModifyOrderRequest extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): ModifyTypeMap[keyof ModifyTypeMap] | undefined;
  setType(value: ModifyTypeMap[keyof ModifyTypeMap]): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order | undefined;
  setOrder(value?: trading_model_pb.Order): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyOrderRequest): ModifyOrderRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyOrderRequest;
  static deserializeBinaryFromReader(message: ModifyOrderRequest, reader: jspb.BinaryReader): ModifyOrderRequest;
}

export namespace ModifyOrderRequest {
  export type AsObject = {
    type?: ModifyTypeMap[keyof ModifyTypeMap],
    order?: trading_model_pb.Order.AsObject,
  }
}

export class ModifyOrderResponse extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): ModifyTypeMap[keyof ModifyTypeMap] | undefined;
  setType(value: ModifyTypeMap[keyof ModifyTypeMap]): void;

  hasOrder(): boolean;
  clearOrder(): void;
  getOrder(): trading_model_pb.Order;
  setOrder(value?: trading_model_pb.Order): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): ModifyOrderResponse.ResultMap[keyof ModifyOrderResponse.ResultMap] | undefined;
  setResult(value: ModifyOrderResponse.ResultMap[keyof ModifyOrderResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyOrderResponse): ModifyOrderResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyOrderResponse;
  static deserializeBinaryFromReader(message: ModifyOrderResponse, reader: jspb.BinaryReader): ModifyOrderResponse;
}

export namespace ModifyOrderResponse {
  export type AsObject = {
    type?: ModifyTypeMap[keyof ModifyTypeMap],
    order: trading_model_pb.Order.AsObject,
    result?: ModifyOrderResponse.ResultMap[keyof ModifyOrderResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class SquarePositionRequest extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): SquareTypeMap[keyof SquareTypeMap] | undefined;
  setType(value: SquareTypeMap[keyof SquareTypeMap]): void;

  hasSymbolCd(): boolean;
  clearSymbolCd(): void;
  getSymbolCd(): string | undefined;
  setSymbolCd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SquarePositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SquarePositionRequest): SquarePositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SquarePositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SquarePositionRequest;
  static deserializeBinaryFromReader(message: SquarePositionRequest, reader: jspb.BinaryReader): SquarePositionRequest;
}

export namespace SquarePositionRequest {
  export type AsObject = {
    type?: SquareTypeMap[keyof SquareTypeMap],
    symbolCd?: string,
  }
}

export class SquarePositionResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SquarePositionResponse.ResultMap[keyof SquarePositionResponse.ResultMap] | undefined;
  setResult(value: SquarePositionResponse.ResultMap[keyof SquarePositionResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SquarePositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SquarePositionResponse): SquarePositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SquarePositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SquarePositionResponse;
  static deserializeBinaryFromReader(message: SquarePositionResponse, reader: jspb.BinaryReader): SquarePositionResponse;
}

export namespace SquarePositionResponse {
  export type AsObject = {
    result?: SquarePositionResponse.ResultMap[keyof SquarePositionResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class TradingHistoryRequest extends jspb.Message {
  clearOrderStatusList(): void;
  getOrderStatusList(): Array<trading_model_pb.OrderStatusMap[keyof trading_model_pb.OrderStatusMap]>;
  setOrderStatusList(value: Array<trading_model_pb.OrderStatusMap[keyof trading_model_pb.OrderStatusMap]>): void;
  addOrderStatus(value: trading_model_pb.OrderStatusMap[keyof trading_model_pb.OrderStatusMap], index?: number): trading_model_pb.OrderStatusMap[keyof trading_model_pb.OrderStatusMap];

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): string | undefined;
  setFromTime(value: string): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): string | undefined;
  setToTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TradingHistoryRequest): TradingHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingHistoryRequest;
  static deserializeBinaryFromReader(message: TradingHistoryRequest, reader: jspb.BinaryReader): TradingHistoryRequest;
}

export namespace TradingHistoryRequest {
  export type AsObject = {
    orderStatusList: Array<trading_model_pb.OrderStatusMap[keyof trading_model_pb.OrderStatusMap]>,
    fromTime?: string,
    toTime?: string,
  }
}

export class TradingHistoryResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): TradingHistoryResponse.ResultMap[keyof TradingHistoryResponse.ResultMap] | undefined;
  setResult(value: TradingHistoryResponse.ResultMap[keyof TradingHistoryResponse.ResultMap]): void;

  clearOrdersList(): void;
  getOrdersList(): Array<trading_model_pb.Order>;
  setOrdersList(value: Array<trading_model_pb.Order>): void;
  addOrders(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TradingHistoryResponse): TradingHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TradingHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingHistoryResponse;
  static deserializeBinaryFromReader(message: TradingHistoryResponse, reader: jspb.BinaryReader): TradingHistoryResponse;
}

export namespace TradingHistoryResponse {
  export type AsObject = {
    result?: TradingHistoryResponse.ResultMap[keyof TradingHistoryResponse.ResultMap],
    ordersList: Array<trading_model_pb.Order.AsObject>,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class GetPositionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionRequest): GetPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionRequest;
  static deserializeBinaryFromReader(message: GetPositionRequest, reader: jspb.BinaryReader): GetPositionRequest;
}

export namespace GetPositionRequest {
  export type AsObject = {
  }
}

export class GetPositionResponse extends jspb.Message {
  clearPositionList(): void;
  getPositionList(): Array<trading_model_pb.Position>;
  setPositionList(value: Array<trading_model_pb.Position>): void;
  addPosition(value?: trading_model_pb.Position, index?: number): trading_model_pb.Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPositionResponse): GetPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPositionResponse;
  static deserializeBinaryFromReader(message: GetPositionResponse, reader: jspb.BinaryReader): GetPositionResponse;
}

export namespace GetPositionResponse {
  export type AsObject = {
    positionList: Array<trading_model_pb.Position.AsObject>,
  }
}

export class MarginCallEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): number | undefined;
  setTimestamp(value: number): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): customer_model_pb.CustomerAccount | undefined;
  setAccount(value?: customer_model_pb.CustomerAccount): void;

  hasMarginStatus(): boolean;
  clearMarginStatus(): void;
  getMarginStatus(): number | undefined;
  setMarginStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginCallEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MarginCallEvent): MarginCallEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginCallEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginCallEvent;
  static deserializeBinaryFromReader(message: MarginCallEvent, reader: jspb.BinaryReader): MarginCallEvent;
}

export namespace MarginCallEvent {
  export type AsObject = {
    id?: number,
    timestamp?: number,
    account?: customer_model_pb.CustomerAccount.AsObject,
    marginStatus?: number,
  }
}

export class OrderEvent extends jspb.Message {
  clearOrderList(): void;
  getOrderList(): Array<trading_model_pb.Order>;
  setOrderList(value: Array<trading_model_pb.Order>): void;
  addOrder(value?: trading_model_pb.Order, index?: number): trading_model_pb.Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OrderEvent): OrderEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderEvent;
  static deserializeBinaryFromReader(message: OrderEvent, reader: jspb.BinaryReader): OrderEvent;
}

export namespace OrderEvent {
  export type AsObject = {
    orderList: Array<trading_model_pb.Order.AsObject>,
  }
}

export class PositionEvent extends jspb.Message {
  clearPositionList(): void;
  getPositionList(): Array<trading_model_pb.Position>;
  setPositionList(value: Array<trading_model_pb.Position>): void;
  addPosition(value?: trading_model_pb.Position, index?: number): trading_model_pb.Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: PositionEvent): PositionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PositionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionEvent;
  static deserializeBinaryFromReader(message: PositionEvent, reader: jspb.BinaryReader): PositionEvent;
}

export namespace PositionEvent {
  export type AsObject = {
    positionList: Array<trading_model_pb.Position.AsObject>,
  }
}

export class GetLatestOrderBookRequest extends jspb.Message {
  hasDepthType(): boolean;
  clearDepthType(): void;
  getDepthType(): trading_model_pb.DepthTypeMap[keyof trading_model_pb.DepthTypeMap] | undefined;
  setDepthType(value: trading_model_pb.DepthTypeMap[keyof trading_model_pb.DepthTypeMap]): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestOrderBookRequest): GetLatestOrderBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestOrderBookRequest;
  static deserializeBinaryFromReader(message: GetLatestOrderBookRequest, reader: jspb.BinaryReader): GetLatestOrderBookRequest;
}

export namespace GetLatestOrderBookRequest {
  export type AsObject = {
    depthType?: trading_model_pb.DepthTypeMap[keyof trading_model_pb.DepthTypeMap],
    symbolCode?: string,
  }
}

export class GetLatestOrderBookResponse extends jspb.Message {
  hasDepthType(): boolean;
  clearDepthType(): void;
  getDepthType(): trading_model_pb.DepthTypeMap[keyof trading_model_pb.DepthTypeMap] | undefined;
  setDepthType(value: trading_model_pb.DepthTypeMap[keyof trading_model_pb.DepthTypeMap]): void;

  clearBookList(): void;
  getBookList(): Array<trading_model_pb.OrderBook>;
  setBookList(value: Array<trading_model_pb.OrderBook>): void;
  addBook(value?: trading_model_pb.OrderBook, index?: number): trading_model_pb.OrderBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestOrderBookResponse): GetLatestOrderBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestOrderBookResponse;
  static deserializeBinaryFromReader(message: GetLatestOrderBookResponse, reader: jspb.BinaryReader): GetLatestOrderBookResponse;
}

export namespace GetLatestOrderBookResponse {
  export type AsObject = {
    depthType?: trading_model_pb.DepthTypeMap[keyof trading_model_pb.DepthTypeMap],
    bookList: Array<trading_model_pb.OrderBook.AsObject>,
  }
}

export class GetLatestFootpintRequest extends jspb.Message {
  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasMine(): boolean;
  clearMine(): void;
  getMine(): number | undefined;
  setMine(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestFootpintRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestFootpintRequest): GetLatestFootpintRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestFootpintRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestFootpintRequest;
  static deserializeBinaryFromReader(message: GetLatestFootpintRequest, reader: jspb.BinaryReader): GetLatestFootpintRequest;
}

export namespace GetLatestFootpintRequest {
  export type AsObject = {
    symbolCode?: string,
    mine?: number,
  }
}

export class GetLatestFootpintResponse extends jspb.Message {
  clearExecutionList(): void;
  getExecutionList(): Array<trading_model_pb.Footprint>;
  setExecutionList(value: Array<trading_model_pb.Footprint>): void;
  addExecution(value?: trading_model_pb.Footprint, index?: number): trading_model_pb.Footprint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestFootpintResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestFootpintResponse): GetLatestFootpintResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLatestFootpintResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestFootpintResponse;
  static deserializeBinaryFromReader(message: GetLatestFootpintResponse, reader: jspb.BinaryReader): GetLatestFootpintResponse;
}

export namespace GetLatestFootpintResponse {
  export type AsObject = {
    executionList: Array<trading_model_pb.Footprint.AsObject>,
  }
}

export class OrderBookEvent extends jspb.Message {
  clearBookList(): void;
  getBookList(): Array<trading_model_pb.OrderBook>;
  setBookList(value: Array<trading_model_pb.OrderBook>): void;
  addBook(value?: trading_model_pb.OrderBook, index?: number): trading_model_pb.OrderBook;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBookEvent.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBookEvent): OrderBookEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBookEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBookEvent;
  static deserializeBinaryFromReader(message: OrderBookEvent, reader: jspb.BinaryReader): OrderBookEvent;
}

export namespace OrderBookEvent {
  export type AsObject = {
    bookList: Array<trading_model_pb.OrderBook.AsObject>,
  }
}

export class SubscribeOrderBookRequest extends jspb.Message {
  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrderBookRequest): SubscribeOrderBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookRequest;
  static deserializeBinaryFromReader(message: SubscribeOrderBookRequest, reader: jspb.BinaryReader): SubscribeOrderBookRequest;
}

export namespace SubscribeOrderBookRequest {
  export type AsObject = {
    symbolCode?: string,
  }
}

export class SubscribeOrderBookResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeOrderBookResponse.ResultMap[keyof SubscribeOrderBookResponse.ResultMap] | undefined;
  setResult(value: SubscribeOrderBookResponse.ResultMap[keyof SubscribeOrderBookResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeOrderBookResponse): SubscribeOrderBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeOrderBookResponse;
  static deserializeBinaryFromReader(message: SubscribeOrderBookResponse, reader: jspb.BinaryReader): SubscribeOrderBookResponse;
}

export namespace SubscribeOrderBookResponse {
  export type AsObject = {
    result?: SubscribeOrderBookResponse.ResultMap[keyof SubscribeOrderBookResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class UnsubscribeOrderBookRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeOrderBookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeOrderBookRequest): UnsubscribeOrderBookRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeOrderBookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeOrderBookRequest;
  static deserializeBinaryFromReader(message: UnsubscribeOrderBookRequest, reader: jspb.BinaryReader): UnsubscribeOrderBookRequest;
}

export namespace UnsubscribeOrderBookRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class UnsubscribeOrderBookResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): UnsubscribeOrderBookResponse.ResultMap[keyof UnsubscribeOrderBookResponse.ResultMap] | undefined;
  setResult(value: UnsubscribeOrderBookResponse.ResultMap[keyof UnsubscribeOrderBookResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeOrderBookResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeOrderBookResponse): UnsubscribeOrderBookResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeOrderBookResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeOrderBookResponse;
  static deserializeBinaryFromReader(message: UnsubscribeOrderBookResponse, reader: jspb.BinaryReader): UnsubscribeOrderBookResponse;
}

export namespace UnsubscribeOrderBookResponse {
  export type AsObject = {
    result?: UnsubscribeOrderBookResponse.ResultMap[keyof UnsubscribeOrderBookResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class SubscribeFootpintRequest extends jspb.Message {
  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasMine(): boolean;
  clearMine(): void;
  getMine(): number | undefined;
  setMine(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeFootpintRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeFootpintRequest): SubscribeFootpintRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeFootpintRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeFootpintRequest;
  static deserializeBinaryFromReader(message: SubscribeFootpintRequest, reader: jspb.BinaryReader): SubscribeFootpintRequest;
}

export namespace SubscribeFootpintRequest {
  export type AsObject = {
    symbolCode?: string,
    mine?: number,
  }
}

export class SubscribeFootpintResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeFootpintResponse.ResultMap[keyof SubscribeFootpintResponse.ResultMap] | undefined;
  setResult(value: SubscribeFootpintResponse.ResultMap[keyof SubscribeFootpintResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeFootpintResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeFootpintResponse): SubscribeFootpintResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeFootpintResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeFootpintResponse;
  static deserializeBinaryFromReader(message: SubscribeFootpintResponse, reader: jspb.BinaryReader): SubscribeFootpintResponse;
}

export namespace SubscribeFootpintResponse {
  export type AsObject = {
    result?: SubscribeFootpintResponse.ResultMap[keyof SubscribeFootpintResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class FootprintEvent extends jspb.Message {
  hasExecution(): boolean;
  clearExecution(): void;
  getExecution(): trading_model_pb.Footprint;
  setExecution(value?: trading_model_pb.Footprint): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FootprintEvent.AsObject;
  static toObject(includeInstance: boolean, msg: FootprintEvent): FootprintEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FootprintEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FootprintEvent;
  static deserializeBinaryFromReader(message: FootprintEvent, reader: jspb.BinaryReader): FootprintEvent;
}

export namespace FootprintEvent {
  export type AsObject = {
    execution: trading_model_pb.Footprint.AsObject,
  }
}

export class ExchangeCurrencyRequest extends jspb.Message {
  hasFromCcy(): boolean;
  clearFromCcy(): void;
  getFromCcy(): string | undefined;
  setFromCcy(value: string): void;

  hasToCcy(): boolean;
  clearToCcy(): void;
  getToCcy(): string | undefined;
  setToCcy(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasSource(): boolean;
  clearSource(): void;
  getSource(): number | undefined;
  setSource(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeCurrencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeCurrencyRequest): ExchangeCurrencyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeCurrencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeCurrencyRequest;
  static deserializeBinaryFromReader(message: ExchangeCurrencyRequest, reader: jspb.BinaryReader): ExchangeCurrencyRequest;
}

export namespace ExchangeCurrencyRequest {
  export type AsObject = {
    fromCcy?: string,
    toCcy?: string,
    amount?: string,
    source?: number,
  }
}

export class ExchangeCurrencyResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): ExchangeCurrencyResponse.ResultMap[keyof ExchangeCurrencyResponse.ResultMap] | undefined;
  setResult(value: ExchangeCurrencyResponse.ResultMap[keyof ExchangeCurrencyResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeCurrencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeCurrencyResponse): ExchangeCurrencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeCurrencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeCurrencyResponse;
  static deserializeBinaryFromReader(message: ExchangeCurrencyResponse, reader: jspb.BinaryReader): ExchangeCurrencyResponse;
}

export namespace ExchangeCurrencyResponse {
  export type AsObject = {
    result?: ExchangeCurrencyResponse.ResultMap[keyof ExchangeCurrencyResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class WithdrawRequest extends jspb.Message {
  hasCcy(): boolean;
  clearCcy(): void;
  getCcy(): string | undefined;
  setCcy(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): string | undefined;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawRequest): WithdrawRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawRequest;
  static deserializeBinaryFromReader(message: WithdrawRequest, reader: jspb.BinaryReader): WithdrawRequest;
}

export namespace WithdrawRequest {
  export type AsObject = {
    ccy?: string,
    amount?: string,
    memo?: string,
  }
}

export class WithdrawResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): WithdrawResponse.ResultMap[keyof WithdrawResponse.ResultMap] | undefined;
  setResult(value: WithdrawResponse.ResultMap[keyof WithdrawResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawResponse.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawResponse): WithdrawResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WithdrawResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawResponse;
  static deserializeBinaryFromReader(message: WithdrawResponse, reader: jspb.BinaryReader): WithdrawResponse;
}

export namespace WithdrawResponse {
  export type AsObject = {
    result?: WithdrawResponse.ResultMap[keyof WithdrawResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class EstimateTxFeeRequest extends jspb.Message {
  hasCcy(): boolean;
  clearCcy(): void;
  getCcy(): string | undefined;
  setCcy(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateTxFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateTxFeeRequest): EstimateTxFeeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstimateTxFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateTxFeeRequest;
  static deserializeBinaryFromReader(message: EstimateTxFeeRequest, reader: jspb.BinaryReader): EstimateTxFeeRequest;
}

export namespace EstimateTxFeeRequest {
  export type AsObject = {
    ccy?: string,
    amount?: string,
  }
}

export class EstimateTxFeeResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): EstimateTxFeeResponse.ResultMap[keyof EstimateTxFeeResponse.ResultMap] | undefined;
  setResult(value: EstimateTxFeeResponse.ResultMap[keyof EstimateTxFeeResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimateTxFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimateTxFeeResponse): EstimateTxFeeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EstimateTxFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimateTxFeeResponse;
  static deserializeBinaryFromReader(message: EstimateTxFeeResponse, reader: jspb.BinaryReader): EstimateTxFeeResponse;
}

export namespace EstimateTxFeeResponse {
  export type AsObject = {
    result?: EstimateTxFeeResponse.ResultMap[keyof EstimateTxFeeResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class CashflowHistoryRequest extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): trading_model_pb.CashflowTypeMap[keyof trading_model_pb.CashflowTypeMap] | undefined;
  setType(value: trading_model_pb.CashflowTypeMap[keyof trading_model_pb.CashflowTypeMap]): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): string | undefined;
  setFromTime(value: string): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): string | undefined;
  setToTime(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashflowHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CashflowHistoryRequest): CashflowHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CashflowHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashflowHistoryRequest;
  static deserializeBinaryFromReader(message: CashflowHistoryRequest, reader: jspb.BinaryReader): CashflowHistoryRequest;
}

export namespace CashflowHistoryRequest {
  export type AsObject = {
    type?: trading_model_pb.CashflowTypeMap[keyof trading_model_pb.CashflowTypeMap],
    fromTime?: string,
    toTime?: string,
  }
}

export class CashflowHistoryResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): CashflowHistoryResponse.ResultMap[keyof CashflowHistoryResponse.ResultMap] | undefined;
  setResult(value: CashflowHistoryResponse.ResultMap[keyof CashflowHistoryResponse.ResultMap]): void;

  clearCashList(): void;
  getCashList(): Array<trading_model_pb.Cashflow>;
  setCashList(value: Array<trading_model_pb.Cashflow>): void;
  addCash(value?: trading_model_pb.Cashflow, index?: number): trading_model_pb.Cashflow;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashflowHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CashflowHistoryResponse): CashflowHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CashflowHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashflowHistoryResponse;
  static deserializeBinaryFromReader(message: CashflowHistoryResponse, reader: jspb.BinaryReader): CashflowHistoryResponse;
}

export namespace CashflowHistoryResponse {
  export type AsObject = {
    result?: CashflowHistoryResponse.ResultMap[keyof CashflowHistoryResponse.ResultMap],
    cashList: Array<trading_model_pb.Cashflow.AsObject>,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class CashflowEvent extends jspb.Message {
  hasCash(): boolean;
  clearCash(): void;
  getCash(): trading_model_pb.Cashflow | undefined;
  setCash(value?: trading_model_pb.Cashflow): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CashflowEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CashflowEvent): CashflowEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CashflowEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CashflowEvent;
  static deserializeBinaryFromReader(message: CashflowEvent, reader: jspb.BinaryReader): CashflowEvent;
}

export namespace CashflowEvent {
  export type AsObject = {
    cash?: trading_model_pb.Cashflow.AsObject,
  }
}

export class DirectDealChatRequest extends jspb.Message {
  hasChat(): boolean;
  clearChat(): void;
  getChat(): trading_model_pb.Chat;
  setChat(value?: trading_model_pb.Chat): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealChatRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealChatRequest): DirectDealChatRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealChatRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealChatRequest;
  static deserializeBinaryFromReader(message: DirectDealChatRequest, reader: jspb.BinaryReader): DirectDealChatRequest;
}

export namespace DirectDealChatRequest {
  export type AsObject = {
    chat: trading_model_pb.Chat.AsObject,
  }
}

export class DirectDealChatResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): DirectDealChatResponse.ResultMap[keyof DirectDealChatResponse.ResultMap] | undefined;
  setResult(value: DirectDealChatResponse.ResultMap[keyof DirectDealChatResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealChatResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealChatResponse): DirectDealChatResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealChatResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealChatResponse;
  static deserializeBinaryFromReader(message: DirectDealChatResponse, reader: jspb.BinaryReader): DirectDealChatResponse;
}

export namespace DirectDealChatResponse {
  export type AsObject = {
    result?: DirectDealChatResponse.ResultMap[keyof DirectDealChatResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class DirectDealChatHistoryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealChatHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealChatHistoryRequest): DirectDealChatHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealChatHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealChatHistoryRequest;
  static deserializeBinaryFromReader(message: DirectDealChatHistoryRequest, reader: jspb.BinaryReader): DirectDealChatHistoryRequest;
}

export namespace DirectDealChatHistoryRequest {
  export type AsObject = {
  }
}

export class DirectDealChatHistoryResponse extends jspb.Message {
  clearChatList(): void;
  getChatList(): Array<trading_model_pb.Chat>;
  setChatList(value: Array<trading_model_pb.Chat>): void;
  addChat(value?: trading_model_pb.Chat, index?: number): trading_model_pb.Chat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealChatHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealChatHistoryResponse): DirectDealChatHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealChatHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealChatHistoryResponse;
  static deserializeBinaryFromReader(message: DirectDealChatHistoryResponse, reader: jspb.BinaryReader): DirectDealChatHistoryResponse;
}

export namespace DirectDealChatHistoryResponse {
  export type AsObject = {
    chatList: Array<trading_model_pb.Chat.AsObject>,
  }
}

export class DirectDealChatEvent extends jspb.Message {
  hasChat(): boolean;
  clearChat(): void;
  getChat(): trading_model_pb.Chat;
  setChat(value?: trading_model_pb.Chat): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealChatEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealChatEvent): DirectDealChatEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealChatEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealChatEvent;
  static deserializeBinaryFromReader(message: DirectDealChatEvent, reader: jspb.BinaryReader): DirectDealChatEvent;
}

export namespace DirectDealChatEvent {
  export type AsObject = {
    chat: trading_model_pb.Chat.AsObject,
  }
}

export class DirectDealRequest extends jspb.Message {
  hasDeal(): boolean;
  clearDeal(): void;
  getDeal(): trading_model_pb.Deal;
  setDeal(value?: trading_model_pb.Deal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealRequest): DirectDealRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealRequest;
  static deserializeBinaryFromReader(message: DirectDealRequest, reader: jspb.BinaryReader): DirectDealRequest;
}

export namespace DirectDealRequest {
  export type AsObject = {
    deal: trading_model_pb.Deal.AsObject,
  }
}

export class DirectDealResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): DirectDealResponse.ResultMap[keyof DirectDealResponse.ResultMap] | undefined;
  setResult(value: DirectDealResponse.ResultMap[keyof DirectDealResponse.ResultMap]): void;

  hasDeal(): boolean;
  clearDeal(): void;
  getDeal(): trading_model_pb.Deal;
  setDeal(value?: trading_model_pb.Deal): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealResponse): DirectDealResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealResponse;
  static deserializeBinaryFromReader(message: DirectDealResponse, reader: jspb.BinaryReader): DirectDealResponse;
}

export namespace DirectDealResponse {
  export type AsObject = {
    result?: DirectDealResponse.ResultMap[keyof DirectDealResponse.ResultMap],
    deal: trading_model_pb.Deal.AsObject,
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class DirectDealEvent extends jspb.Message {
  hasDeal(): boolean;
  clearDeal(): void;
  getDeal(): trading_model_pb.Deal;
  setDeal(value?: trading_model_pb.Deal): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectDealEvent.AsObject;
  static toObject(includeInstance: boolean, msg: DirectDealEvent): DirectDealEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectDealEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectDealEvent;
  static deserializeBinaryFromReader(message: DirectDealEvent, reader: jspb.BinaryReader): DirectDealEvent;
}

export namespace DirectDealEvent {
  export type AsObject = {
    deal: trading_model_pb.Deal.AsObject,
  }
}

export class UnsubscribeFootpintRequest extends jspb.Message {
  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeFootpintRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeFootpintRequest): UnsubscribeFootpintRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeFootpintRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeFootpintRequest;
  static deserializeBinaryFromReader(message: UnsubscribeFootpintRequest, reader: jspb.BinaryReader): UnsubscribeFootpintRequest;
}

export namespace UnsubscribeFootpintRequest {
  export type AsObject = {
    symbolCode?: string,
  }
}

export class UnsubscribeFootpintResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): UnsubscribeFootpintResponse.ResultMap[keyof UnsubscribeFootpintResponse.ResultMap] | undefined;
  setResult(value: UnsubscribeFootpintResponse.ResultMap[keyof UnsubscribeFootpintResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeFootpintResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeFootpintResponse): UnsubscribeFootpintResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeFootpintResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeFootpintResponse;
  static deserializeBinaryFromReader(message: UnsubscribeFootpintResponse, reader: jspb.BinaryReader): UnsubscribeFootpintResponse;
}

export namespace UnsubscribeFootpintResponse {
  export type AsObject = {
    result?: UnsubscribeFootpintResponse.ResultMap[keyof UnsubscribeFootpintResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class NetoutRequest extends jspb.Message {
  hasSymbolCd(): boolean;
  clearSymbolCd(): void;
  getSymbolCd(): string | undefined;
  setSymbolCd(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NetoutRequest): NetoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetoutRequest;
  static deserializeBinaryFromReader(message: NetoutRequest, reader: jspb.BinaryReader): NetoutRequest;
}

export namespace NetoutRequest {
  export type AsObject = {
    symbolCd?: string,
  }
}

export class NetoutResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): NetoutResponse.ResultMap[keyof NetoutResponse.ResultMap] | undefined;
  setResult(value: NetoutResponse.ResultMap[keyof NetoutResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NetoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NetoutResponse): NetoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NetoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NetoutResponse;
  static deserializeBinaryFromReader(message: NetoutResponse, reader: jspb.BinaryReader): NetoutResponse;
}

export namespace NetoutResponse {
  export type AsObject = {
    result?: NetoutResponse.ResultMap[keyof NetoutResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export class SubscribeJackpotRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeJackpotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeJackpotRequest): SubscribeJackpotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeJackpotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeJackpotRequest;
  static deserializeBinaryFromReader(message: SubscribeJackpotRequest, reader: jspb.BinaryReader): SubscribeJackpotRequest;
}

export namespace SubscribeJackpotRequest {
  export type AsObject = {
  }
}

export class SubscribeJackpotResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeJackpotResponse.ResultMap[keyof SubscribeJackpotResponse.ResultMap] | undefined;
  setResult(value: SubscribeJackpotResponse.ResultMap[keyof SubscribeJackpotResponse.ResultMap]): void;

  hasJackpot(): boolean;
  clearJackpot(): void;
  getJackpot(): string | undefined;
  setJackpot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeJackpotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeJackpotResponse): SubscribeJackpotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeJackpotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeJackpotResponse;
  static deserializeBinaryFromReader(message: SubscribeJackpotResponse, reader: jspb.BinaryReader): SubscribeJackpotResponse;
}

export namespace SubscribeJackpotResponse {
  export type AsObject = {
    result?: SubscribeJackpotResponse.ResultMap[keyof SubscribeJackpotResponse.ResultMap],
    jackpot?: string,
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class JackpotEvent extends jspb.Message {
  hasJackpot(): boolean;
  clearJackpot(): void;
  getJackpot(): string | undefined;
  setJackpot(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JackpotEvent.AsObject;
  static toObject(includeInstance: boolean, msg: JackpotEvent): JackpotEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: JackpotEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JackpotEvent;
  static deserializeBinaryFromReader(message: JackpotEvent, reader: jspb.BinaryReader): JackpotEvent;
}

export namespace JackpotEvent {
  export type AsObject = {
    jackpot?: string,
  }
}

export class ModifyPositionRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasSl(): boolean;
  clearSl(): void;
  getSl(): string | undefined;
  setSl(value: string): void;

  hasTp(): boolean;
  clearTp(): void;
  getTp(): string | undefined;
  setTp(value: string): void;

  hasCloseAmount(): boolean;
  clearCloseAmount(): void;
  getCloseAmount(): string | undefined;
  setCloseAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyPositionRequest): ModifyPositionRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyPositionRequest;
  static deserializeBinaryFromReader(message: ModifyPositionRequest, reader: jspb.BinaryReader): ModifyPositionRequest;
}

export namespace ModifyPositionRequest {
  export type AsObject = {
    id?: string,
    sl?: string,
    tp?: string,
    closeAmount?: string,
  }
}

export class ModifyPositionResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): ModifyPositionResponse.ResultMap[keyof ModifyPositionResponse.ResultMap] | undefined;
  setResult(value: ModifyPositionResponse.ResultMap[keyof ModifyPositionResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModifyPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ModifyPositionResponse): ModifyPositionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModifyPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModifyPositionResponse;
  static deserializeBinaryFromReader(message: ModifyPositionResponse, reader: jspb.BinaryReader): ModifyPositionResponse;
}

export namespace ModifyPositionResponse {
  export type AsObject = {
    result?: ModifyPositionResponse.ResultMap[keyof ModifyPositionResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 9;
  }

  export const Result: ResultMap;
}

export interface ModifyTypeMap {
  UPDATE: 1;
  CANCEL: 2;
}

export const ModifyType: ModifyTypeMap;

export interface SquareTypeMap {
  ONE: 1;
  ALL: 2;
}

export const SquareType: SquareTypeMap;

