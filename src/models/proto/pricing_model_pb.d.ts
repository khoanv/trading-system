// package: 
// file: pricing_model.proto

import * as jspb from "google-protobuf";

export class Band extends jspb.Message {
  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): string | undefined;
  setPrice(value: string): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): string | undefined;
  setVolume(value: string): void;

  hasTradable(): boolean;
  clearTradable(): void;
  getTradable(): boolean | undefined;
  setTradable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Band.AsObject;
  static toObject(includeInstance: boolean, msg: Band): Band.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Band, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Band;
  static deserializeBinaryFromReader(message: Band, reader: jspb.BinaryReader): Band;
}

export namespace Band {
  export type AsObject = {
    price?: string,
    volume?: string,
    tradable?: boolean,
  }
}

export class Quote extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasSymbolId(): boolean;
  clearSymbolId(): void;
  getSymbolId(): number | undefined;
  setSymbolId(value: number): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  clearAsksList(): void;
  getAsksList(): Array<Band>;
  setAsksList(value: Array<Band>): void;
  addAsks(value?: Band, index?: number): Band;

  clearBidsList(): void;
  getBidsList(): Array<Band>;
  setBidsList(value: Array<Band>): void;
  addBids(value?: Band, index?: number): Band;

  hasLow(): boolean;
  clearLow(): void;
  getLow(): string | undefined;
  setLow(value: string): void;

  hasHigh(): boolean;
  clearHigh(): void;
  getHigh(): string | undefined;
  setHigh(value: string): void;

  hasOpen(): boolean;
  clearOpen(): void;
  getOpen(): string | undefined;
  setOpen(value: string): void;

  hasScale(): boolean;
  clearScale(): void;
  getScale(): number | undefined;
  setScale(value: number): void;

  hasQuoteTime(): boolean;
  clearQuoteTime(): void;
  getQuoteTime(): number | undefined;
  setQuoteTime(value: number): void;

  hasTickPerDay(): boolean;
  clearTickPerDay(): void;
  getTickPerDay(): number | undefined;
  setTickPerDay(value: number): void;

  hasVolumePerDay(): boolean;
  clearVolumePerDay(): void;
  getVolumePerDay(): string | undefined;
  setVolumePerDay(value: string): void;

  hasFeedTime(): boolean;
  clearFeedTime(): void;
  getFeedTime(): number | undefined;
  setFeedTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quote.AsObject;
  static toObject(includeInstance: boolean, msg: Quote): Quote.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Quote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quote;
  static deserializeBinaryFromReader(message: Quote, reader: jspb.BinaryReader): Quote;
}

export namespace Quote {
  export type AsObject = {
    id?: number,
    symbolId?: number,
    symbolCode?: string,
    asksList: Array<Band.AsObject>,
    bidsList: Array<Band.AsObject>,
    low?: string,
    high?: string,
    open?: string,
    scale?: number,
    quoteTime?: number,
    tickPerDay?: number,
    volumePerDay?: string,
    feedTime?: number,
  }
}

export class Chart extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasSymbolId(): boolean;
  clearSymbolId(): void;
  getSymbolId(): number | undefined;
  setSymbolId(value: number): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasLow(): boolean;
  clearLow(): void;
  getLow(): string | undefined;
  setLow(value: string): void;

  hasHigh(): boolean;
  clearHigh(): void;
  getHigh(): string | undefined;
  setHigh(value: string): void;

  hasOpen(): boolean;
  clearOpen(): void;
  getOpen(): string | undefined;
  setOpen(value: string): void;

  hasClose(): boolean;
  clearClose(): void;
  getClose(): string | undefined;
  setClose(value: string): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): string | undefined;
  setVolume(value: string): void;

  hasChartTime(): boolean;
  clearChartTime(): void;
  getChartTime(): number | undefined;
  setChartTime(value: number): void;

  hasChartDate(): boolean;
  clearChartDate(): void;
  getChartDate(): string | undefined;
  setChartDate(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): ChartTypeMap[keyof ChartTypeMap] | undefined;
  setType(value: ChartTypeMap[keyof ChartTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chart.AsObject;
  static toObject(includeInstance: boolean, msg: Chart): Chart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chart;
  static deserializeBinaryFromReader(message: Chart, reader: jspb.BinaryReader): Chart;
}

export namespace Chart {
  export type AsObject = {
    id?: number,
    symbolId?: number,
    symbolCode?: string,
    low?: string,
    high?: string,
    open?: string,
    close?: string,
    volume?: string,
    chartTime?: number,
    chartDate?: string,
    type?: ChartTypeMap[keyof ChartTypeMap],
  }
}

export interface ChartTypeMap {
  M1: 1;
  M5: 2;
  M15: 3;
  M30: 4;
  H1: 5;
  H4: 6;
  D1: 7;
  W1: 8;
  MN: 9;
}

export const ChartType: ChartTypeMap;

