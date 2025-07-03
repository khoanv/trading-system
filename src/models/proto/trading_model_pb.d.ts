// package: 
// file: trading_model.proto

import * as jspb from "google-protobuf";

export class Order extends jspb.Message {
  hasOrderId(): boolean;
  clearOrderId(): void;
  getOrderId(): string | undefined;
  setOrderId(value: string): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasSide(): boolean;
  clearSide(): void;
  getSide(): OrderSideMap[keyof OrderSideMap] | undefined;
  setSide(value: OrderSideMap[keyof OrderSideMap]): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): OrderStatusMap[keyof OrderStatusMap] | undefined;
  setStatus(value: OrderStatusMap[keyof OrderStatusMap]): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): string | undefined;
  setPrice(value: string): void;

  hasSlippage(): boolean;
  clearSlippage(): void;
  getSlippage(): string | undefined;
  setSlippage(value: string): void;

  hasOrderType(): boolean;
  clearOrderType(): void;
  getOrderType(): OrderTypeMap[keyof OrderTypeMap] | undefined;
  setOrderType(value: OrderTypeMap[keyof OrderTypeMap]): void;

  hasExecuteType(): boolean;
  clearExecuteType(): void;
  getExecuteType(): ExecuteTypeMap[keyof ExecuteTypeMap] | undefined;
  setExecuteType(value: ExecuteTypeMap[keyof ExecuteTypeMap]): void;

  hasTimeInforce(): boolean;
  clearTimeInforce(): void;
  getTimeInforce(): TimeInforceMap[keyof TimeInforceMap] | undefined;
  setTimeInforce(value: TimeInforceMap[keyof TimeInforceMap]): void;

  hasTp(): boolean;
  clearTp(): void;
  getTp(): string | undefined;
  setTp(value: string): void;

  hasSl(): boolean;
  clearSl(): void;
  getSl(): string | undefined;
  setSl(value: string): void;

  hasExpireTime(): boolean;
  clearExpireTime(): void;
  getExpireTime(): number | undefined;
  setExpireTime(value: number): void;

  hasHide(): boolean;
  clearHide(): void;
  getHide(): number | undefined;
  setHide(value: number): void;

  hasPl(): boolean;
  clearPl(): void;
  getPl(): string | undefined;
  setPl(value: string): void;

  hasSwap(): boolean;
  clearSwap(): void;
  getSwap(): string | undefined;
  setSwap(value: string): void;

  hasFee(): boolean;
  clearFee(): void;
  getFee(): string | undefined;
  setFee(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): number | undefined;
  setTime(value: number): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): string | undefined;
  setMemo(value: string): void;

  hasComboId(): boolean;
  clearComboId(): void;
  getComboId(): string | undefined;
  setComboId(value: string): void;

  hasMamCode(): boolean;
  clearMamCode(): void;
  getMamCode(): string | undefined;
  setMamCode(value: string): void;

  hasCoverageType(): boolean;
  clearCoverageType(): void;
  getCoverageType(): number | undefined;
  setCoverageType(value: number): void;

  hasEntryType(): boolean;
  clearEntryType(): void;
  getEntryType(): number | undefined;
  setEntryType(value: number): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): number | undefined;
  setRoute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    orderId?: string,
    symbolCode?: string,
    side?: OrderSideMap[keyof OrderSideMap],
    status?: OrderStatusMap[keyof OrderStatusMap],
    amount?: string,
    price?: string,
    slippage?: string,
    orderType?: OrderTypeMap[keyof OrderTypeMap],
    executeType?: ExecuteTypeMap[keyof ExecuteTypeMap],
    timeInforce?: TimeInforceMap[keyof TimeInforceMap],
    tp?: string,
    sl?: string,
    expireTime?: number,
    hide?: number,
    pl?: string,
    swap?: string,
    fee?: string,
    time?: number,
    memo?: string,
    comboId?: string,
    mamCode?: string,
    coverageType?: number,
    entryType?: number,
    route?: number,
  }
}

export class Footprint extends jspb.Message {
  hasOrderId(): boolean;
  clearOrderId(): void;
  getOrderId(): string | undefined;
  setOrderId(value: string): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasSide(): boolean;
  clearSide(): void;
  getSide(): OrderSideMap[keyof OrderSideMap] | undefined;
  setSide(value: OrderSideMap[keyof OrderSideMap]): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): string | undefined;
  setPrice(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): number | undefined;
  setTime(value: number): void;

  hasOwner(): boolean;
  clearOwner(): void;
  getOwner(): number | undefined;
  setOwner(value: number): void;

  hasCount(): boolean;
  clearCount(): void;
  getCount(): number | undefined;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Footprint.AsObject;
  static toObject(includeInstance: boolean, msg: Footprint): Footprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Footprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Footprint;
  static deserializeBinaryFromReader(message: Footprint, reader: jspb.BinaryReader): Footprint;
}

export namespace Footprint {
  export type AsObject = {
    orderId?: string,
    symbolCode?: string,
    side?: OrderSideMap[keyof OrderSideMap],
    amount?: string,
    price?: string,
    time?: number,
    owner?: number,
    count?: number,
  }
}

export class Position extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): string | undefined;
  setId(value: string): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasVwapPrice(): boolean;
  clearVwapPrice(): void;
  getVwapPrice(): string | undefined;
  setVwapPrice(value: string): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasMarginRequire(): boolean;
  clearMarginRequire(): void;
  getMarginRequire(): string | undefined;
  setMarginRequire(value: string): void;

  hasSwapPl(): boolean;
  clearSwapPl(): void;
  getSwapPl(): string | undefined;
  setSwapPl(value: string): void;

  hasMamCode(): boolean;
  clearMamCode(): void;
  getMamCode(): string | undefined;
  setMamCode(value: string): void;

  hasSide(): boolean;
  clearSide(): void;
  getSide(): number | undefined;
  setSide(value: number): void;

  hasTrailingPrice(): boolean;
  clearTrailingPrice(): void;
  getTrailingPrice(): string | undefined;
  setTrailingPrice(value: string): void;

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
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    id?: string,
    symbolCode?: string,
    vwapPrice?: string,
    amount?: string,
    marginRequire?: string,
    swapPl?: string,
    mamCode?: string,
    side?: number,
    trailingPrice?: string,
    sl?: string,
    tp?: string,
    closeAmount?: string,
  }
}

export class Cashflow extends jspb.Message {
  hasCcy(): boolean;
  clearCcy(): void;
  getCcy(): string | undefined;
  setCcy(value: string): void;

  hasType(): boolean;
  clearType(): void;
  getType(): CashflowTypeMap[keyof CashflowTypeMap] | undefined;
  setType(value: CashflowTypeMap[keyof CashflowTypeMap]): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): CashflowStatusMap[keyof CashflowStatusMap] | undefined;
  setStatus(value: CashflowStatusMap[keyof CashflowStatusMap]): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): number | undefined;
  setTime(value: number): void;

  hasMemo(): boolean;
  clearMemo(): void;
  getMemo(): string | undefined;
  setMemo(value: string): void;

  hasMamCode(): boolean;
  clearMamCode(): void;
  getMamCode(): string | undefined;
  setMamCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cashflow.AsObject;
  static toObject(includeInstance: boolean, msg: Cashflow): Cashflow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cashflow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cashflow;
  static deserializeBinaryFromReader(message: Cashflow, reader: jspb.BinaryReader): Cashflow;
}

export namespace Cashflow {
  export type AsObject = {
    ccy?: string,
    type?: CashflowTypeMap[keyof CashflowTypeMap],
    amount?: string,
    status?: CashflowStatusMap[keyof CashflowStatusMap],
    time?: number,
    memo?: string,
    mamCode?: string,
  }
}

export class OrderBook extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): BookTypeMap[keyof BookTypeMap] | undefined;
  setType(value: BookTypeMap[keyof BookTypeMap]): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  clearAsksList(): void;
  getAsksList(): Array<Book>;
  setAsksList(value: Array<Book>): void;
  addAsks(value?: Book, index?: number): Book;

  clearBidsList(): void;
  getBidsList(): Array<Book>;
  setBidsList(value: Array<Book>): void;
  addBids(value?: Book, index?: number): Book;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderBook.AsObject;
  static toObject(includeInstance: boolean, msg: OrderBook): OrderBook.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderBook, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderBook;
  static deserializeBinaryFromReader(message: OrderBook, reader: jspb.BinaryReader): OrderBook;
}

export namespace OrderBook {
  export type AsObject = {
    type?: BookTypeMap[keyof BookTypeMap],
    symbolCode?: string,
    asksList: Array<Book.AsObject>,
    bidsList: Array<Book.AsObject>,
  }
}

export class Book extends jspb.Message {
  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): string | undefined;
  setPrice(value: string): void;

  hasVwapPrice(): boolean;
  clearVwapPrice(): void;
  getVwapPrice(): string | undefined;
  setVwapPrice(value: string): void;

  hasVolume(): boolean;
  clearVolume(): void;
  getVolume(): string | undefined;
  setVolume(value: string): void;

  hasCounter(): boolean;
  clearCounter(): void;
  getCounter(): number | undefined;
  setCounter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Book.AsObject;
  static toObject(includeInstance: boolean, msg: Book): Book.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Book, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Book;
  static deserializeBinaryFromReader(message: Book, reader: jspb.BinaryReader): Book;
}

export namespace Book {
  export type AsObject = {
    price?: string,
    vwapPrice?: string,
    volume?: string,
    counter?: number,
  }
}

export class Chat extends jspb.Message {
  hasSender(): boolean;
  clearSender(): void;
  getSender(): string | undefined;
  setSender(value: string): void;

  hasAvatar(): boolean;
  clearAvatar(): void;
  getAvatar(): string | undefined;
  setAvatar(value: string): void;

  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): string | undefined;
  setMessage(value: string): void;

  hasAnonymous(): boolean;
  clearAnonymous(): void;
  getAnonymous(): number | undefined;
  setAnonymous(value: number): void;

  hasSendingTime(): boolean;
  clearSendingTime(): void;
  getSendingTime(): number | undefined;
  setSendingTime(value: number): void;

  hasMamCode(): boolean;
  clearMamCode(): void;
  getMamCode(): string | undefined;
  setMamCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Chat.AsObject;
  static toObject(includeInstance: boolean, msg: Chat): Chat.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Chat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Chat;
  static deserializeBinaryFromReader(message: Chat, reader: jspb.BinaryReader): Chat;
}

export namespace Chat {
  export type AsObject = {
    sender?: string,
    avatar?: string,
    message?: string,
    anonymous?: number,
    sendingTime?: number,
    mamCode?: string,
  }
}

export class Deal extends jspb.Message {
  hasOrderId(): boolean;
  clearOrderId(): void;
  getOrderId(): string | undefined;
  setOrderId(value: string): void;

  hasSymbolCode(): boolean;
  clearSymbolCode(): void;
  getSymbolCode(): string | undefined;
  setSymbolCode(value: string): void;

  hasSide(): boolean;
  clearSide(): void;
  getSide(): OrderSideMap[keyof OrderSideMap] | undefined;
  setSide(value: OrderSideMap[keyof OrderSideMap]): void;

  hasAmount(): boolean;
  clearAmount(): void;
  getAmount(): string | undefined;
  setAmount(value: string): void;

  hasPrice(): boolean;
  clearPrice(): void;
  getPrice(): string | undefined;
  setPrice(value: string): void;

  hasCounter(): boolean;
  clearCounter(): void;
  getCounter(): string | undefined;
  setCounter(value: string): void;

  hasStatus(): boolean;
  clearStatus(): void;
  getStatus(): Deal.DealStatusMap[keyof Deal.DealStatusMap] | undefined;
  setStatus(value: Deal.DealStatusMap[keyof Deal.DealStatusMap]): void;

  hasEntryType(): boolean;
  clearEntryType(): void;
  getEntryType(): number | undefined;
  setEntryType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Deal.AsObject;
  static toObject(includeInstance: boolean, msg: Deal): Deal.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Deal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Deal;
  static deserializeBinaryFromReader(message: Deal, reader: jspb.BinaryReader): Deal;
}

export namespace Deal {
  export type AsObject = {
    orderId?: string,
    symbolCode?: string,
    side?: OrderSideMap[keyof OrderSideMap],
    amount?: string,
    price?: string,
    counter?: string,
    status?: Deal.DealStatusMap[keyof Deal.DealStatusMap],
    entryType?: number,
  }

  export interface DealStatusMap {
    REQUESTING: 0;
    ACCEPTED: 1;
    DENY: 2;
    EXPIRED: 3;
  }

  export const DealStatus: DealStatusMap;
}

export interface OrderSideMap {
  BUY: 1;
  SELL: -1;
}

export const OrderSide: OrderSideMap;

export interface ExecuteTypeMap {
  MARKET: 1;
  INSTANT: 2;
  LIMIT: 3;
  STOP: 4;
}

export const ExecuteType: ExecuteTypeMap;

export interface OrderTypeMap {
  SINGLE: 1;
  DIRECT_DEAL: 6;
  DIVIDEND: 7;
  ROLLOVER: 8;
  EXCHANGE: 9;
  OCO: 10;
  OCO1: 11;
  OCO2: 12;
  IFD: 20;
  IFD1: 21;
  IFD2: 22;
  IFO: 30;
  IFO1: 31;
  IFO2: 32;
  IFO3: 33;
}

export const OrderType: OrderTypeMap;

export interface TimeInforceMap {
  DAY: 1;
  GTC: 2;
  IOC: 3;
  FOK: 4;
}

export const TimeInforce: TimeInforceMap;

export interface OrderStatusMap {
  INACTIVE: -1;
  PENDING: 0;
  EXECUTED_FULLY: 1;
  EXECUTED_PARTIALLY: 2;
  CLOSED: 3;
  EXPIRED: 4;
  CANCELED: 5;
  MATCHING: 6;
}

export const OrderStatus: OrderStatusMap;

export interface CashflowStatusMap {
  REQUESTING: 0;
  PROCESSING: 1;
  COMPLETED: 2;
  CANCELLED: 3;
  REJECT: 4;
}

export const CashflowStatus: CashflowStatusMap;

export interface CashflowTypeMap {
  DEPOSIT: 1;
  WITHDRAW: 2;
  EXCHANGED: 3;
  REALIZE_PL: 4;
  SWAP_PL: 5;
  COMMISSION: 6;
}

export const CashflowType: CashflowTypeMap;

export interface BookTypeMap {
  SINGLE_MARKET: 1;
  SINGLE_LIMIT: 2;
  SUMMARY_MARKET: 3;
  SUMMARY_LIMIT: 4;
}

export const BookType: BookTypeMap;

export interface DepthTypeMap {
  TOP_BOOK: 1;
  FULL_BOOK: 2;
}

export const DepthType: DepthTypeMap;

