// package: 
// file: pricing_service.proto

import * as jspb from "google-protobuf";
import * as rpc_pb from "./rpc_pb";
import * as pricing_model_pb from "./pricing_model_pb";

export class GetLastQuotesRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastQuotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastQuotesRequest): GetLastQuotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastQuotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastQuotesRequest;
  static deserializeBinaryFromReader(message: GetLastQuotesRequest, reader: jspb.BinaryReader): GetLastQuotesRequest;
}

export namespace GetLastQuotesRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class GetLastQuotesResponse extends jspb.Message {
  clearQuotesList(): void;
  getQuotesList(): Array<pricing_model_pb.Quote>;
  setQuotesList(value: Array<pricing_model_pb.Quote>): void;
  addQuotes(value?: pricing_model_pb.Quote, index?: number): pricing_model_pb.Quote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastQuotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastQuotesResponse): GetLastQuotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastQuotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastQuotesResponse;
  static deserializeBinaryFromReader(message: GetLastQuotesResponse, reader: jspb.BinaryReader): GetLastQuotesResponse;
}

export namespace GetLastQuotesResponse {
  export type AsObject = {
    quotesList: Array<pricing_model_pb.Quote.AsObject>,
  }
}

export class QuoteEvent extends jspb.Message {
  clearQuoteList(): void;
  getQuoteList(): Array<pricing_model_pb.Quote>;
  setQuoteList(value: Array<pricing_model_pb.Quote>): void;
  addQuote(value?: pricing_model_pb.Quote, index?: number): pricing_model_pb.Quote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuoteEvent.AsObject;
  static toObject(includeInstance: boolean, msg: QuoteEvent): QuoteEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: QuoteEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuoteEvent;
  static deserializeBinaryFromReader(message: QuoteEvent, reader: jspb.BinaryReader): QuoteEvent;
}

export namespace QuoteEvent {
  export type AsObject = {
    quoteList: Array<pricing_model_pb.Quote.AsObject>,
  }
}

export class SubscribeQuoteEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  hasMarketDepth(): boolean;
  clearMarketDepth(): void;
  getMarketDepth(): number | undefined;
  setMarketDepth(value: number): void;

  hasMode(): boolean;
  clearMode(): void;
  getMode(): number | undefined;
  setMode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeQuoteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeQuoteEventRequest): SubscribeQuoteEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeQuoteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeQuoteEventRequest;
  static deserializeBinaryFromReader(message: SubscribeQuoteEventRequest, reader: jspb.BinaryReader): SubscribeQuoteEventRequest;
}

export namespace SubscribeQuoteEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
    marketDepth?: number,
    mode?: number,
  }
}

export class SubscribeQuoteEventResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeQuoteEventResponse.ResultMap[keyof SubscribeQuoteEventResponse.ResultMap] | undefined;
  setResult(value: SubscribeQuoteEventResponse.ResultMap[keyof SubscribeQuoteEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeQuoteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeQuoteEventResponse): SubscribeQuoteEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeQuoteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeQuoteEventResponse;
  static deserializeBinaryFromReader(message: SubscribeQuoteEventResponse, reader: jspb.BinaryReader): SubscribeQuoteEventResponse;
}

export namespace SubscribeQuoteEventResponse {
  export type AsObject = {
    result?: SubscribeQuoteEventResponse.ResultMap[keyof SubscribeQuoteEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    HAS_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class UnsubscribeQuoteEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeQuoteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeQuoteEventRequest): UnsubscribeQuoteEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeQuoteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeQuoteEventRequest;
  static deserializeBinaryFromReader(message: UnsubscribeQuoteEventRequest, reader: jspb.BinaryReader): UnsubscribeQuoteEventRequest;
}

export namespace UnsubscribeQuoteEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class UnsubscribeQuoteEventResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): UnsubscribeQuoteEventResponse.ResultMap[keyof UnsubscribeQuoteEventResponse.ResultMap] | undefined;
  setResult(value: UnsubscribeQuoteEventResponse.ResultMap[keyof UnsubscribeQuoteEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeQuoteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeQuoteEventResponse): UnsubscribeQuoteEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeQuoteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeQuoteEventResponse;
  static deserializeBinaryFromReader(message: UnsubscribeQuoteEventResponse, reader: jspb.BinaryReader): UnsubscribeQuoteEventResponse;
}

export namespace UnsubscribeQuoteEventResponse {
  export type AsObject = {
    result?: UnsubscribeQuoteEventResponse.ResultMap[keyof UnsubscribeQuoteEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class GetLastExchangeQuotesRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastExchangeQuotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastExchangeQuotesRequest): GetLastExchangeQuotesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastExchangeQuotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastExchangeQuotesRequest;
  static deserializeBinaryFromReader(message: GetLastExchangeQuotesRequest, reader: jspb.BinaryReader): GetLastExchangeQuotesRequest;
}

export namespace GetLastExchangeQuotesRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class GetLastExchangeQuotesResponse extends jspb.Message {
  clearQuotesList(): void;
  getQuotesList(): Array<pricing_model_pb.Quote>;
  setQuotesList(value: Array<pricing_model_pb.Quote>): void;
  addQuotes(value?: pricing_model_pb.Quote, index?: number): pricing_model_pb.Quote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLastExchangeQuotesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLastExchangeQuotesResponse): GetLastExchangeQuotesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLastExchangeQuotesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLastExchangeQuotesResponse;
  static deserializeBinaryFromReader(message: GetLastExchangeQuotesResponse, reader: jspb.BinaryReader): GetLastExchangeQuotesResponse;
}

export namespace GetLastExchangeQuotesResponse {
  export type AsObject = {
    quotesList: Array<pricing_model_pb.Quote.AsObject>,
  }
}

export class ExchangeQuoteEvent extends jspb.Message {
  clearQuoteList(): void;
  getQuoteList(): Array<pricing_model_pb.Quote>;
  setQuoteList(value: Array<pricing_model_pb.Quote>): void;
  addQuote(value?: pricing_model_pb.Quote, index?: number): pricing_model_pb.Quote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeQuoteEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeQuoteEvent): ExchangeQuoteEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeQuoteEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeQuoteEvent;
  static deserializeBinaryFromReader(message: ExchangeQuoteEvent, reader: jspb.BinaryReader): ExchangeQuoteEvent;
}

export namespace ExchangeQuoteEvent {
  export type AsObject = {
    quoteList: Array<pricing_model_pb.Quote.AsObject>,
  }
}

export class SubscribeExchangeQuoteEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeExchangeQuoteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeExchangeQuoteEventRequest): SubscribeExchangeQuoteEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeExchangeQuoteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeExchangeQuoteEventRequest;
  static deserializeBinaryFromReader(message: SubscribeExchangeQuoteEventRequest, reader: jspb.BinaryReader): SubscribeExchangeQuoteEventRequest;
}

export namespace SubscribeExchangeQuoteEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class SubscribeExchangeQuoteEventResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeExchangeQuoteEventResponse.ResultMap[keyof SubscribeExchangeQuoteEventResponse.ResultMap] | undefined;
  setResult(value: SubscribeExchangeQuoteEventResponse.ResultMap[keyof SubscribeExchangeQuoteEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeExchangeQuoteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeExchangeQuoteEventResponse): SubscribeExchangeQuoteEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeExchangeQuoteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeExchangeQuoteEventResponse;
  static deserializeBinaryFromReader(message: SubscribeExchangeQuoteEventResponse, reader: jspb.BinaryReader): SubscribeExchangeQuoteEventResponse;
}

export namespace SubscribeExchangeQuoteEventResponse {
  export type AsObject = {
    result?: SubscribeExchangeQuoteEventResponse.ResultMap[keyof SubscribeExchangeQuoteEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    HAS_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class UnsubscribeExchangeQuoteEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeExchangeQuoteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeExchangeQuoteEventRequest): UnsubscribeExchangeQuoteEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeExchangeQuoteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeExchangeQuoteEventRequest;
  static deserializeBinaryFromReader(message: UnsubscribeExchangeQuoteEventRequest, reader: jspb.BinaryReader): UnsubscribeExchangeQuoteEventRequest;
}

export namespace UnsubscribeExchangeQuoteEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class UnsubscribeExchangeQuoteEventResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): UnsubscribeExchangeQuoteEventResponse.ResultMap[keyof UnsubscribeExchangeQuoteEventResponse.ResultMap] | undefined;
  setResult(value: UnsubscribeExchangeQuoteEventResponse.ResultMap[keyof UnsubscribeExchangeQuoteEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeExchangeQuoteEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeExchangeQuoteEventResponse): UnsubscribeExchangeQuoteEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeExchangeQuoteEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeExchangeQuoteEventResponse;
  static deserializeBinaryFromReader(message: UnsubscribeExchangeQuoteEventResponse, reader: jspb.BinaryReader): UnsubscribeExchangeQuoteEventResponse;
}

export namespace UnsubscribeExchangeQuoteEventResponse {
  export type AsObject = {
    result?: UnsubscribeExchangeQuoteEventResponse.ResultMap[keyof UnsubscribeExchangeQuoteEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class ChartEvent extends jspb.Message {
  clearChartsList(): void;
  getChartsList(): Array<pricing_model_pb.Chart>;
  setChartsList(value: Array<pricing_model_pb.Chart>): void;
  addCharts(value?: pricing_model_pb.Chart, index?: number): pricing_model_pb.Chart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChartEvent.AsObject;
  static toObject(includeInstance: boolean, msg: ChartEvent): ChartEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChartEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChartEvent;
  static deserializeBinaryFromReader(message: ChartEvent, reader: jspb.BinaryReader): ChartEvent;
}

export namespace ChartEvent {
  export type AsObject = {
    chartsList: Array<pricing_model_pb.Chart.AsObject>,
  }
}

export class IterateChartsRequest extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasLimit(): boolean;
  clearLimit(): void;
  getLimit(): number | undefined;
  setLimit(value: number): void;

  hasType(): boolean;
  clearType(): void;
  getType(): pricing_model_pb.ChartTypeMap[keyof pricing_model_pb.ChartTypeMap] | undefined;
  setType(value: pricing_model_pb.ChartTypeMap[keyof pricing_model_pb.ChartTypeMap]): void;

  hasFromTime(): boolean;
  clearFromTime(): void;
  getFromTime(): number | undefined;
  setFromTime(value: number): void;

  hasToTime(): boolean;
  clearToTime(): void;
  getToTime(): number | undefined;
  setToTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IterateChartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: IterateChartsRequest): IterateChartsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IterateChartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IterateChartsRequest;
  static deserializeBinaryFromReader(message: IterateChartsRequest, reader: jspb.BinaryReader): IterateChartsRequest;
}

export namespace IterateChartsRequest {
  export type AsObject = {
    id?: number,
    symbolCode?: string,
    limit?: number,
    type?: pricing_model_pb.ChartTypeMap[keyof pricing_model_pb.ChartTypeMap],
    fromTime?: number,
    toTime?: number,
  }
}

export class IterateChartsResponse extends jspb.Message {
  clearChartsList(): void;
  getChartsList(): Array<pricing_model_pb.Chart>;
  setChartsList(value: Array<pricing_model_pb.Chart>): void;
  addCharts(value?: pricing_model_pb.Chart, index?: number): pricing_model_pb.Chart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IterateChartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: IterateChartsResponse): IterateChartsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IterateChartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IterateChartsResponse;
  static deserializeBinaryFromReader(message: IterateChartsResponse, reader: jspb.BinaryReader): IterateChartsResponse;
}

export namespace IterateChartsResponse {
  export type AsObject = {
    chartsList: Array<pricing_model_pb.Chart.AsObject>,
  }
}

export class SubscribeChartEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  hasType(): boolean;
  clearType(): void;
  getType(): pricing_model_pb.ChartTypeMap[keyof pricing_model_pb.ChartTypeMap] | undefined;
  setType(value: pricing_model_pb.ChartTypeMap[keyof pricing_model_pb.ChartTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeChartEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeChartEventRequest): SubscribeChartEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeChartEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeChartEventRequest;
  static deserializeBinaryFromReader(message: SubscribeChartEventRequest, reader: jspb.BinaryReader): SubscribeChartEventRequest;
}

export namespace SubscribeChartEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
    type?: pricing_model_pb.ChartTypeMap[keyof pricing_model_pb.ChartTypeMap],
  }
}

export class SubscribeChartEventResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): SubscribeChartEventResponse.ResultMap[keyof SubscribeChartEventResponse.ResultMap] | undefined;
  setResult(value: SubscribeChartEventResponse.ResultMap[keyof SubscribeChartEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeChartEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeChartEventResponse): SubscribeChartEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeChartEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeChartEventResponse;
  static deserializeBinaryFromReader(message: SubscribeChartEventResponse, reader: jspb.BinaryReader): SubscribeChartEventResponse;
}

export namespace SubscribeChartEventResponse {
  export type AsObject = {
    result?: SubscribeChartEventResponse.ResultMap[keyof SubscribeChartEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    HAS_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class UnsubscribeChartEventRequest extends jspb.Message {
  clearSymbolCodeList(): void;
  getSymbolCodeList(): Array<string>;
  setSymbolCodeList(value: Array<string>): void;
  addSymbolCode(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeChartEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeChartEventRequest): UnsubscribeChartEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeChartEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeChartEventRequest;
  static deserializeBinaryFromReader(message: UnsubscribeChartEventRequest, reader: jspb.BinaryReader): UnsubscribeChartEventRequest;
}

export namespace UnsubscribeChartEventRequest {
  export type AsObject = {
    symbolCodeList: Array<string>,
  }
}

export class UnsubscribeChartEventResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): UnsubscribeChartEventResponse.ResultMap[keyof UnsubscribeChartEventResponse.ResultMap] | undefined;
  setResult(value: UnsubscribeChartEventResponse.ResultMap[keyof UnsubscribeChartEventResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnsubscribeChartEventResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnsubscribeChartEventResponse): UnsubscribeChartEventResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnsubscribeChartEventResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnsubscribeChartEventResponse;
  static deserializeBinaryFromReader(message: UnsubscribeChartEventResponse, reader: jspb.BinaryReader): UnsubscribeChartEventResponse;
}

export namespace UnsubscribeChartEventResponse {
  export type AsObject = {
    result?: UnsubscribeChartEventResponse.ResultMap[keyof UnsubscribeChartEventResponse.ResultMap],
  }

  export interface ResultMap {
    SUCCESS: 1;
    NOT_SUBSCRIBED: 2;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

