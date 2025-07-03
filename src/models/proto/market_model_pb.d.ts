// package: 
// file: market_model.proto

import * as jspb from "google-protobuf";

export class Market extends jspb.Message {
  hasTradingDate(): boolean;
  clearTradingDate(): void;
  getTradingDate(): string | undefined;
  setTradingDate(value: string): void;

  hasSodTime(): boolean;
  clearSodTime(): void;
  getSodTime(): number | undefined;
  setSodTime(value: number): void;

  hasEodTime(): boolean;
  clearEodTime(): void;
  getEodTime(): number | undefined;
  setEodTime(value: number): void;

  hasPreTradingDate(): boolean;
  clearPreTradingDate(): void;
  getPreTradingDate(): string | undefined;
  setPreTradingDate(value: string): void;

  hasPreSodTime(): boolean;
  clearPreSodTime(): void;
  getPreSodTime(): number | undefined;
  setPreSodTime(value: number): void;

  hasPreEodTime(): boolean;
  clearPreEodTime(): void;
  getPreEodTime(): number | undefined;
  setPreEodTime(value: number): void;

  hasItayose2From(): boolean;
  clearItayose2From(): void;
  getItayose2From(): number | undefined;
  setItayose2From(value: number): void;

  hasItayose2To(): boolean;
  clearItayose2To(): void;
  getItayose2To(): number | undefined;
  setItayose2To(value: number): void;

  hasItayose3From(): boolean;
  clearItayose3From(): void;
  getItayose3From(): number | undefined;
  setItayose3From(value: number): void;

  hasItayose3To(): boolean;
  clearItayose3To(): void;
  getItayose3To(): number | undefined;
  setItayose3To(value: number): void;

  hasItayose4From(): boolean;
  clearItayose4From(): void;
  getItayose4From(): number | undefined;
  setItayose4From(value: number): void;

  hasItayose4To(): boolean;
  clearItayose4To(): void;
  getItayose4To(): number | undefined;
  setItayose4To(value: number): void;

  hasCurrentTime(): boolean;
  clearCurrentTime(): void;
  getCurrentTime(): number | undefined;
  setCurrentTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Market.AsObject;
  static toObject(includeInstance: boolean, msg: Market): Market.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Market, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Market;
  static deserializeBinaryFromReader(message: Market, reader: jspb.BinaryReader): Market;
}

export namespace Market {
  export type AsObject = {
    tradingDate?: string,
    sodTime?: number,
    eodTime?: number,
    preTradingDate?: string,
    preSodTime?: number,
    preEodTime?: number,
    itayose2From?: number,
    itayose2To?: number,
    itayose3From?: number,
    itayose3To?: number,
    itayose4From?: number,
    itayose4To?: number,
    currentTime?: number,
  }
}

export class Symbol extends jspb.Message {
  hasSymbolId(): boolean;
  clearSymbolId(): void;
  getSymbolId(): number | undefined;
  setSymbolId(value: number): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): SymbolTypeMap[keyof SymbolTypeMap] | undefined;
  setType(value: SymbolTypeMap[keyof SymbolTypeMap]): void;

  hasBaseCcy(): boolean;
  clearBaseCcy(): void;
  getBaseCcy(): string | undefined;
  setBaseCcy(value: string): void;

  hasCounterCcy(): boolean;
  clearCounterCcy(): void;
  getCounterCcy(): string | undefined;
  setCounterCcy(value: string): void;

  hasPipSize(): boolean;
  clearPipSize(): void;
  getPipSize(): string | undefined;
  setPipSize(value: string): void;

  hasLotSize(): boolean;
  clearLotSize(): void;
  getLotSize(): string | undefined;
  setLotSize(value: string): void;

  hasPriceDigit(): boolean;
  clearPriceDigit(): void;
  getPriceDigit(): number | undefined;
  setPriceDigit(value: number): void;

  hasSpeadDigit(): boolean;
  clearSpeadDigit(): void;
  getSpeadDigit(): number | undefined;
  setSpeadDigit(value: number): void;

  hasAmountDigit(): boolean;
  clearAmountDigit(): void;
  getAmountDigit(): number | undefined;
  setAmountDigit(value: number): void;

  hasLeverage(): boolean;
  clearLeverage(): void;
  getLeverage(): number | undefined;
  setLeverage(value: number): void;

  hasDisplayOrder(): boolean;
  clearDisplayOrder(): void;
  getDisplayOrder(): number | undefined;
  setDisplayOrder(value: number): void;

  hasMaxOrderLot(): boolean;
  clearMaxOrderLot(): void;
  getMaxOrderLot(): string | undefined;
  setMaxOrderLot(value: string): void;

  hasMinOrderLot(): boolean;
  clearMinOrderLot(): void;
  getMinOrderLot(): string | undefined;
  setMinOrderLot(value: string): void;

  hasShortSwap(): boolean;
  clearShortSwap(): void;
  getShortSwap(): string | undefined;
  setShortSwap(value: string): void;

  hasLongSwap(): boolean;
  clearLongSwap(): void;
  getLongSwap(): string | undefined;
  setLongSwap(value: string): void;

  hasIncrementalTriggerLot(): boolean;
  clearIncrementalTriggerLot(): void;
  getIncrementalTriggerLot(): string | undefined;
  setIncrementalTriggerLot(value: string): void;

  hasIncrementalMarkup(): boolean;
  clearIncrementalMarkup(): void;
  getIncrementalMarkup(): string | undefined;
  setIncrementalMarkup(value: string): void;

  hasIbCommission(): boolean;
  clearIbCommission(): void;
  getIbCommission(): string | undefined;
  setIbCommission(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): number | undefined;
  setStatus(value: number): void;

  hasQuoteExpiration(): boolean;
  clearQuoteExpiration(): void;
  getQuoteExpiration(): number | undefined;
  setQuoteExpiration(value: number): void;

  hasTradingType(): boolean;
  clearTradingType(): void;
  getTradingType(): number | undefined;
  setTradingType(value: number): void;

  hasExchangeFlg(): boolean;
  clearExchangeFlg(): void;
  getExchangeFlg(): number | undefined;
  setExchangeFlg(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Symbol.AsObject;
  static toObject(includeInstance: boolean, msg: Symbol): Symbol.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Symbol, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Symbol;
  static deserializeBinaryFromReader(message: Symbol, reader: jspb.BinaryReader): Symbol;
}

export namespace Symbol {
  export type AsObject = {
    symbolId?: number,
    symbolCode?: string,
    type?: SymbolTypeMap[keyof SymbolTypeMap],
    baseCcy?: string,
    counterCcy?: string,
    pipSize?: string,
    lotSize?: string,
    priceDigit?: number,
    speadDigit?: number,
    amountDigit?: number,
    leverage?: number,
    displayOrder?: number,
    maxOrderLot?: string,
    minOrderLot?: string,
    shortSwap?: string,
    longSwap?: string,
    incrementalTriggerLot?: string,
    incrementalMarkup?: string,
    ibCommission?: string,
    status?: number,
    quoteExpiration?: number,
    tradingType?: number,
    exchangeFlg?: number,
  }
}

export class MarketStatistic extends jspb.Message {
  hasSymbolType(): boolean;
  clearSymbolType(): void;
  getSymbolType(): SymbolTypeMap[keyof SymbolTypeMap] | undefined;
  setSymbolType(value: SymbolTypeMap[keyof SymbolTypeMap]): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): StatisticPeriodMap[keyof StatisticPeriodMap] | undefined;
  setPeriod(value: StatisticPeriodMap[keyof StatisticPeriodMap]): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): string | undefined;
  setVolume(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarketStatistic.AsObject;
  static toObject(includeInstance: boolean, msg: MarketStatistic): MarketStatistic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarketStatistic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarketStatistic;
  static deserializeBinaryFromReader(message: MarketStatistic, reader: jspb.BinaryReader): MarketStatistic;
}

export namespace MarketStatistic {
  export type AsObject = {
    symbolType?: SymbolTypeMap[keyof SymbolTypeMap],
    period?: StatisticPeriodMap[keyof StatisticPeriodMap],
    volume?: string,
  }
}

export class SymbolStatistic extends jspb.Message {
  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasPeriod(): boolean;
  clearPeriod(): void;
  getPeriod(): StatisticPeriodMap[keyof StatisticPeriodMap] | undefined;
  setPeriod(value: StatisticPeriodMap[keyof StatisticPeriodMap]): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): string | undefined;
  setVolume(value: string): void;

  hasTicks(): boolean;
  clearTicks(): void;
  getTicks(): string | undefined;
  setTicks(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SymbolStatistic.AsObject;
  static toObject(includeInstance: boolean, msg: SymbolStatistic): SymbolStatistic.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SymbolStatistic, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SymbolStatistic;
  static deserializeBinaryFromReader(message: SymbolStatistic, reader: jspb.BinaryReader): SymbolStatistic;
}

export namespace SymbolStatistic {
  export type AsObject = {
    symbolCode?: string,
    period?: StatisticPeriodMap[keyof StatisticPeriodMap],
    volume?: string,
    ticks?: string,
  }
}

export class Currency extends jspb.Message {
  hasCcy(): boolean;
  clearCcy(): void;
  getCcy(): string | undefined;
  setCcy(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): SymbolTypeMap[keyof SymbolTypeMap] | undefined;
  setType(value: SymbolTypeMap[keyof SymbolTypeMap]): void;

  hasDigit(): boolean;
  clearDigit(): void;
  getDigit(): number | undefined;
  setDigit(value: number): void;

  hasExchangeable(): boolean;
  clearExchangeable(): void;
  getExchangeable(): boolean | undefined;
  setExchangeable(value: boolean): void;

  hasExchangeFee(): boolean;
  clearExchangeFee(): void;
  getExchangeFee(): string | undefined;
  setExchangeFee(value: string): void;

  hasWithdrawable(): boolean;
  clearWithdrawable(): void;
  getWithdrawable(): boolean | undefined;
  setWithdrawable(value: boolean): void;

  hasTransferable(): boolean;
  clearTransferable(): void;
  getTransferable(): boolean | undefined;
  setTransferable(value: boolean): void;

  hasInterestRate(): boolean;
  clearInterestRate(): void;
  getInterestRate(): string | undefined;
  setInterestRate(value: string): void;

  hasInterestCcy(): boolean;
  clearInterestCcy(): void;
  getInterestCcy(): string | undefined;
  setInterestCcy(value: string): void;

  hasPolicyInterestRate(): boolean;
  clearPolicyInterestRate(): void;
  getPolicyInterestRate(): string | undefined;
  setPolicyInterestRate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Currency.AsObject;
  static toObject(includeInstance: boolean, msg: Currency): Currency.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Currency, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Currency;
  static deserializeBinaryFromReader(message: Currency, reader: jspb.BinaryReader): Currency;
}

export namespace Currency {
  export type AsObject = {
    ccy?: string,
    type?: SymbolTypeMap[keyof SymbolTypeMap],
    digit?: number,
    exchangeable?: boolean,
    exchangeFee?: string,
    withdrawable?: boolean,
    transferable?: boolean,
    interestRate?: string,
    interestCcy?: string,
    policyInterestRate?: string,
  }
}

export class Notice extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): number | undefined;
  setType(value: number): void;

  hasTitle(): boolean;
  clearTitle(): void;
  getTitle(): string | undefined;
  setTitle(value: string): void;

  hasContent(): boolean;
  clearContent(): void;
  getContent(): string | undefined;
  setContent(value: string): void;

  hasPublishDate(): boolean;
  clearPublishDate(): void;
  getPublishDate(): number | undefined;
  setPublishDate(value: number): void;

  hasCurrency(): boolean;
  clearCurrency(): void;
  getCurrency(): string | undefined;
  setCurrency(value: string): void;

  hasRank(): boolean;
  clearRank(): void;
  getRank(): number | undefined;
  setRank(value: number): void;

  hasDetails(): boolean;
  clearDetails(): void;
  getDetails(): string | undefined;
  setDetails(value: string): void;

  hasCreateDate(): boolean;
  clearCreateDate(): void;
  getCreateDate(): number | undefined;
  setCreateDate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Notice.AsObject;
  static toObject(includeInstance: boolean, msg: Notice): Notice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Notice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Notice;
  static deserializeBinaryFromReader(message: Notice, reader: jspb.BinaryReader): Notice;
}

export namespace Notice {
  export type AsObject = {
    type?: number,
    title?: string,
    content?: string,
    publishDate?: number,
    currency?: string,
    rank?: number,
    details?: string,
    createDate?: number,
  }
}

export class MarginCalculation extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasCaseNo(): boolean;
  clearCaseNo(): void;
  getCaseNo(): string | undefined;
  setCaseNo(value: string): void;

  hasNonBetPercentage(): boolean;
  clearNonBetPercentage(): void;
  getNonBetPercentage(): string | undefined;
  setNonBetPercentage(value: string): void;

  hasBetPercentage(): boolean;
  clearBetPercentage(): void;
  getBetPercentage(): string | undefined;
  setBetPercentage(value: string): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): string | undefined;
  setMemo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarginCalculation.AsObject;
  static toObject(includeInstance: boolean, msg: MarginCalculation): MarginCalculation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarginCalculation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarginCalculation;
  static deserializeBinaryFromReader(message: MarginCalculation, reader: jspb.BinaryReader): MarginCalculation;
}

export namespace MarginCalculation {
  export type AsObject = {
    id?: number,
    caseNo?: string,
    nonBetPercentage?: string,
    betPercentage?: string,
    memo?: string,
  }
}

export interface SymbolTypeMap {
  FX: 1;
  CFD: 2;
  INDEX: 3;
  CRYPTO: 4;
}

export const SymbolType: SymbolTypeMap;

export interface StatisticPeriodMap {
  DATE: 1;
  MONTH: 2;
  YEAR: 3;
}

export const StatisticPeriod: StatisticPeriodMap;

