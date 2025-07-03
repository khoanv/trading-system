// package: 
// file: market_service.proto

import * as jspb from "google-protobuf";
import * as rpc_pb from "./rpc_pb";
import * as market_model_pb from "./market_model_pb";

export class GetMarketRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketRequest): GetMarketRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketRequest;
  static deserializeBinaryFromReader(message: GetMarketRequest, reader: jspb.BinaryReader): GetMarketRequest;
}

export namespace GetMarketRequest {
  export type AsObject = {
  }
}

export class GetMarketResponse extends jspb.Message {
  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): market_model_pb.Market;
  setMarket(value?: market_model_pb.Market): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketResponse): GetMarketResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarketResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketResponse;
  static deserializeBinaryFromReader(message: GetMarketResponse, reader: jspb.BinaryReader): GetMarketResponse;
}

export namespace GetMarketResponse {
  export type AsObject = {
    market: market_model_pb.Market.AsObject,
  }
}

export class GetMarketStatisticRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketStatisticRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketStatisticRequest): GetMarketStatisticRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarketStatisticRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketStatisticRequest;
  static deserializeBinaryFromReader(message: GetMarketStatisticRequest, reader: jspb.BinaryReader): GetMarketStatisticRequest;
}

export namespace GetMarketStatisticRequest {
  export type AsObject = {
  }
}

export class GetMarketStatisticResponse extends jspb.Message {
  clearStatisticList(): void;
  getStatisticList(): Array<market_model_pb.MarketStatistic>;
  setStatisticList(value: Array<market_model_pb.MarketStatistic>): void;
  addStatistic(value?: market_model_pb.MarketStatistic, index?: number): market_model_pb.MarketStatistic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMarketStatisticResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMarketStatisticResponse): GetMarketStatisticResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetMarketStatisticResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMarketStatisticResponse;
  static deserializeBinaryFromReader(message: GetMarketStatisticResponse, reader: jspb.BinaryReader): GetMarketStatisticResponse;
}

export namespace GetMarketStatisticResponse {
  export type AsObject = {
    statisticList: Array<market_model_pb.MarketStatistic.AsObject>,
  }
}

export class MarketEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasMarketEventType(): boolean;
  clearMarketEventType(): void;
  getMarketEventType(): number | undefined;
  setMarketEventType(value: number): void;

  hasMarket(): boolean;
  clearMarket(): void;
  getMarket(): market_model_pb.Market;
  setMarket(value?: market_model_pb.Market): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MarketEvent): MarketEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketEvent;
  static deserializeBinaryFromReader(message: MarketEvent, reader: jspb.BinaryReader): MarketEvent;
}

export namespace MarketEvent {
  export type AsObject = {
    id?: number,
    marketEventType?: number,
    market: market_model_pb.Market.AsObject,
  }
}

export class CurrencyEvent extends jspb.Message {
  clearCcyList(): void;
  getCcyList(): Array<market_model_pb.Currency>;
  setCcyList(value: Array<market_model_pb.Currency>): void;
  addCcy(value?: market_model_pb.Currency, index?: number): market_model_pb.Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrencyEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CurrencyEvent): CurrencyEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CurrencyEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrencyEvent;
  static deserializeBinaryFromReader(message: CurrencyEvent, reader: jspb.BinaryReader): CurrencyEvent;
}

export namespace CurrencyEvent {
  export type AsObject = {
    ccyList: Array<market_model_pb.Currency.AsObject>,
  }
}

export class GetSymbolRequest extends jspb.Message {
  hasSymbolType(): boolean;
  clearSymbolType(): void;
  getSymbolType(): number | undefined;
  setSymbolType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSymbolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSymbolRequest): GetSymbolRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSymbolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSymbolRequest;
  static deserializeBinaryFromReader(message: GetSymbolRequest, reader: jspb.BinaryReader): GetSymbolRequest;
}

export namespace GetSymbolRequest {
  export type AsObject = {
    symbolType?: number,
  }
}

export class GetSymbolResponse extends jspb.Message {
  clearSymbolList(): void;
  getSymbolList(): Array<market_model_pb.Symbol>;
  setSymbolList(value: Array<market_model_pb.Symbol>): void;
  addSymbol(value?: market_model_pb.Symbol, index?: number): market_model_pb.Symbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSymbolResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSymbolResponse): GetSymbolResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSymbolResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSymbolResponse;
  static deserializeBinaryFromReader(message: GetSymbolResponse, reader: jspb.BinaryReader): GetSymbolResponse;
}

export namespace GetSymbolResponse {
  export type AsObject = {
    symbolList: Array<market_model_pb.Symbol.AsObject>,
  }
}

export class SymbolEvent extends jspb.Message {
  clearSymbolList(): void;
  getSymbolList(): Array<market_model_pb.Symbol>;
  setSymbolList(value: Array<market_model_pb.Symbol>): void;
  addSymbol(value?: market_model_pb.Symbol, index?: number): market_model_pb.Symbol;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolEvent): SymbolEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolEvent;
  static deserializeBinaryFromReader(message: SymbolEvent, reader: jspb.BinaryReader): SymbolEvent;
}

export namespace SymbolEvent {
  export type AsObject = {
    symbolList: Array<market_model_pb.Symbol.AsObject>,
  }
}

export class GetSymbolStatisticRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSymbolStatisticRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSymbolStatisticRequest): GetSymbolStatisticRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSymbolStatisticRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSymbolStatisticRequest;
  static deserializeBinaryFromReader(message: GetSymbolStatisticRequest, reader: jspb.BinaryReader): GetSymbolStatisticRequest;
}

export namespace GetSymbolStatisticRequest {
  export type AsObject = {
  }
}

export class GetSymbolStatisticResponse extends jspb.Message {
  clearStatisticList(): void;
  getStatisticList(): Array<market_model_pb.SymbolStatistic>;
  setStatisticList(value: Array<market_model_pb.SymbolStatistic>): void;
  addStatistic(value?: market_model_pb.SymbolStatistic, index?: number): market_model_pb.SymbolStatistic;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSymbolStatisticResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSymbolStatisticResponse): GetSymbolStatisticResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSymbolStatisticResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSymbolStatisticResponse;
  static deserializeBinaryFromReader(message: GetSymbolStatisticResponse, reader: jspb.BinaryReader): GetSymbolStatisticResponse;
}

export namespace GetSymbolStatisticResponse {
  export type AsObject = {
    statisticList: Array<market_model_pb.SymbolStatistic.AsObject>,
  }
}

export class GetCurrencyRequest extends jspb.Message {
  hasCcy(): boolean;
  clearCcy(): void;
  getCcy(): string | undefined;
  setCcy(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrencyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrencyRequest): GetCurrencyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrencyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrencyRequest;
  static deserializeBinaryFromReader(message: GetCurrencyRequest, reader: jspb.BinaryReader): GetCurrencyRequest;
}

export namespace GetCurrencyRequest {
  export type AsObject = {
    ccy?: string,
  }
}

export class GetCurrencyResponse extends jspb.Message {
  clearCcyList(): void;
  getCcyList(): Array<market_model_pb.Currency>;
  setCcyList(value: Array<market_model_pb.Currency>): void;
  addCcy(value?: market_model_pb.Currency, index?: number): market_model_pb.Currency;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurrencyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurrencyResponse): GetCurrencyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCurrencyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurrencyResponse;
  static deserializeBinaryFromReader(message: GetCurrencyResponse, reader: jspb.BinaryReader): GetCurrencyResponse;
}

export namespace GetCurrencyResponse {
  export type AsObject = {
    ccyList: Array<market_model_pb.Currency.AsObject>,
  }
}

export class SubscribeSessionEventRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeSessionEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeSessionEventRequest): SubscribeSessionEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeSessionEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeSessionEventRequest;
  static deserializeBinaryFromReader(message: SubscribeSessionEventRequest, reader: jspb.BinaryReader): SubscribeSessionEventRequest;
}

export namespace SubscribeSessionEventRequest {
  export type AsObject = {
  }
}

export class SubscribeSessionEventResponse extends jspb.Message {
  hasOnlineUser(): boolean;
  clearOnlineUser(): void;
  getOnlineUser(): number | undefined;
  setOnlineUser(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeSessionEventResponse.ResultMap[keyof SubscribeSessionEventResponse.ResultMap] | undefined;
  setResult(value: SubscribeSessionEventResponse.ResultMap[keyof SubscribeSessionEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeSessionEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeSessionEventResponse): SubscribeSessionEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeSessionEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeSessionEventResponse;
  static deserializeBinaryFromReader(message: SubscribeSessionEventResponse, reader: jspb.BinaryReader): SubscribeSessionEventResponse;
}

export namespace SubscribeSessionEventResponse {
  export type AsObject = {
    onlineUser?: number,
    result?: SubscribeSessionEventResponse.ResultMap[keyof SubscribeSessionEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    HAS_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class SessionEvent extends jspb.Message {
  hasOnlineUser(): boolean;
  clearOnlineUser(): void;
  getOnlineUser(): number | undefined;
  setOnlineUser(value: number): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): number | undefined;
  setTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SessionEvent): SessionEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SessionEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionEvent;
  static deserializeBinaryFromReader(message: SessionEvent, reader: jspb.BinaryReader): SessionEvent;
}

export namespace SessionEvent {
  export type AsObject = {
    onlineUser?: number,
    time?: number,
  }
}

export class GetNoticeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNoticeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNoticeRequest): GetNoticeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNoticeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNoticeRequest;
  static deserializeBinaryFromReader(message: GetNoticeRequest, reader: jspb.BinaryReader): GetNoticeRequest;
}

export namespace GetNoticeRequest {
  export type AsObject = {
  }
}

export class GetNoticeResponse extends jspb.Message {
  clearNoticeList(): void;
  getNoticeList(): Array<market_model_pb.Notice>;
  setNoticeList(value: Array<market_model_pb.Notice>): void;
  addNotice(value?: market_model_pb.Notice, index?: number): market_model_pb.Notice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNoticeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetNoticeResponse): GetNoticeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetNoticeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNoticeResponse;
  static deserializeBinaryFromReader(message: GetNoticeResponse, reader: jspb.BinaryReader): GetNoticeResponse;
}

export namespace GetNoticeResponse {
  export type AsObject = {
    noticeList: Array<market_model_pb.Notice.AsObject>,
  }
}

export class NoticeEvent extends jspb.Message {
  clearNoticeList(): void;
  getNoticeList(): Array<market_model_pb.Notice>;
  setNoticeList(value: Array<market_model_pb.Notice>): void;
  addNotice(value?: market_model_pb.Notice, index?: number): market_model_pb.Notice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoticeEvent.AsObject;
  static toObject(includeInstance: boolean, msg: NoticeEvent): NoticeEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NoticeEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoticeEvent;
  static deserializeBinaryFromReader(message: NoticeEvent, reader: jspb.BinaryReader): NoticeEvent;
}

export namespace NoticeEvent {
  export type AsObject = {
    noticeList: Array<market_model_pb.Notice.AsObject>,
  }
}

export class MarginCalculationEvent extends jspb.Message {
  clearMarginList(): void;
  getMarginList(): Array<market_model_pb.MarginCalculation>;
  setMarginList(value: Array<market_model_pb.MarginCalculation>): void;
  addMargin(value?: market_model_pb.MarginCalculation, index?: number): market_model_pb.MarginCalculation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginCalculationEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MarginCalculationEvent): MarginCalculationEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginCalculationEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginCalculationEvent;
  static deserializeBinaryFromReader(message: MarginCalculationEvent, reader: jspb.BinaryReader): MarginCalculationEvent;
}

export namespace MarginCalculationEvent {
  export type AsObject = {
    marginList: Array<market_model_pb.MarginCalculation.AsObject>,
  }
}

