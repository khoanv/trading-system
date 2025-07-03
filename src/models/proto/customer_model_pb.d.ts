// package: 
// file: customer_model.proto

import * as jspb from "google-protobuf";

export class CustomerProfile extends jspb.Message {
  hasLoginId(): boolean;
  clearLoginId(): void;
  getLoginId(): string | undefined;
  setLoginId(value: string): void;

  hasCustomerStatus(): boolean;
  clearCustomerStatus(): void;
  getCustomerStatus(): number | undefined;
  setCustomerStatus(value: number): void;

  hasTwoFaType(): boolean;
  clearTwoFaType(): void;
  getTwoFaType(): number | undefined;
  setTwoFaType(value: number): void;

  hasQrSecret(): boolean;
  clearQrSecret(): void;
  getQrSecret(): string | undefined;
  setQrSecret(value: string): void;

  hasQrLink(): boolean;
  clearQrLink(): void;
  getQrLink(): string | undefined;
  setQrLink(value: string): void;

  hasTwoFaOperation(): boolean;
  clearTwoFaOperation(): void;
  getTwoFaOperation(): string | undefined;
  setTwoFaOperation(value: string): void;

  hasIbCode(): boolean;
  clearIbCode(): void;
  getIbCode(): string | undefined;
  setIbCode(value: string): void;

  hasIbUrl(): boolean;
  clearIbUrl(): void;
  getIbUrl(): string | undefined;
  setIbUrl(value: string): void;

  hasEmailAlert(): boolean;
  clearEmailAlert(): void;
  getEmailAlert(): string | undefined;
  setEmailAlert(value: string): void;

  hasIpWhitelist(): boolean;
  clearIpWhitelist(): void;
  getIpWhitelist(): string | undefined;
  setIpWhitelist(value: string): void;

  hasNickName(): boolean;
  clearNickName(): void;
  getNickName(): string | undefined;
  setNickName(value: string): void;

  hasAnonymous(): boolean;
  clearAnonymous(): void;
  getAnonymous(): string | undefined;
  setAnonymous(value: string): void;

  hasCommonSetting(): boolean;
  clearCommonSetting(): void;
  getCommonSetting(): string | undefined;
  setCommonSetting(value: string): void;

  hasWithdrawAddress(): boolean;
  clearWithdrawAddress(): void;
  getWithdrawAddress(): string | undefined;
  setWithdrawAddress(value: string): void;

  hasIbMarkupSetting(): boolean;
  clearIbMarkupSetting(): void;
  getIbMarkupSetting(): string | undefined;
  setIbMarkupSetting(value: string): void;

  hasAvatar(): boolean;
  clearAvatar(): void;
  getAvatar(): string | undefined;
  setAvatar(value: string): void;

  hasTagId(): boolean;
  clearTagId(): void;
  getTagId(): string | undefined;
  setTagId(value: string): void;

  hasGuiSetting(): boolean;
  clearGuiSetting(): void;
  getGuiSetting(): string | undefined;
  setGuiSetting(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerProfile.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerProfile): CustomerProfile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerProfile;
  static deserializeBinaryFromReader(message: CustomerProfile, reader: jspb.BinaryReader): CustomerProfile;
}

export namespace CustomerProfile {
  export type AsObject = {
    loginId?: string,
    customerStatus?: number,
    twoFaType?: number,
    qrSecret?: string,
    qrLink?: string,
    twoFaOperation?: string,
    ibCode?: string,
    ibUrl?: string,
    emailAlert?: string,
    ipWhitelist?: string,
    nickName?: string,
    anonymous?: string,
    commonSetting?: string,
    withdrawAddress?: string,
    ibMarkupSetting?: string,
    avatar?: string,
    tagId?: string,
    guiSetting?: string,
  }
}

export class CustomerAccount extends jspb.Message {
  hasAccountType(): boolean;
  clearAccountType(): void;
  getAccountType(): number | undefined;
  setAccountType(value: number): void;

  hasAccountStatus(): boolean;
  clearAccountStatus(): void;
  getAccountStatus(): number | undefined;
  setAccountStatus(value: number): void;

  hasMamCode(): boolean;
  clearMamCode(): void;
  getMamCode(): string | undefined;
  setMamCode(value: string): void;

  hasMamName(): boolean;
  clearMamName(): void;
  getMamName(): string | undefined;
  setMamName(value: string): void;

  hasMamStatus(): boolean;
  clearMamStatus(): void;
  getMamStatus(): number | undefined;
  setMamStatus(value: number): void;

  clearWalletsList(): void;
  getWalletsList(): Array<Wallet>;
  setWalletsList(value: Array<Wallet>): void;
  addWallets(value?: Wallet, index?: number): Wallet;

  hasToken(): boolean;
  clearToken(): void;
  getToken(): TokenMatrix | undefined;
  setToken(value?: TokenMatrix): void;

  hasPositionMode(): boolean;
  clearPositionMode(): void;
  getPositionMode(): number | undefined;
  setPositionMode(value: number): void;

  hasClosePl(): boolean;
  clearClosePl(): void;
  getClosePl(): string | undefined;
  setClosePl(value: string): void;

  hasAccountLevel(): boolean;
  clearAccountLevel(): void;
  getAccountLevel(): number | undefined;
  setAccountLevel(value: number): void;

  hasMonthlyClosePl(): boolean;
  clearMonthlyClosePl(): void;
  getMonthlyClosePl(): string | undefined;
  setMonthlyClosePl(value: string): void;

  hasDailyFee(): boolean;
  clearDailyFee(): void;
  getDailyFee(): string | undefined;
  setDailyFee(value: string): void;

  hasMonthlyFee(): boolean;
  clearMonthlyFee(): void;
  getMonthlyFee(): string | undefined;
  setMonthlyFee(value: string): void;

  hasWithdrawFlg(): boolean;
  clearWithdrawFlg(): void;
  getWithdrawFlg(): number | undefined;
  setWithdrawFlg(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerAccount.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerAccount): CustomerAccount.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerAccount;
  static deserializeBinaryFromReader(message: CustomerAccount, reader: jspb.BinaryReader): CustomerAccount;
}

export namespace CustomerAccount {
  export type AsObject = {
    accountType?: number,
    accountStatus?: number,
    mamCode?: string,
    mamName?: string,
    mamStatus?: number,
    walletsList: Array<Wallet.AsObject>,
    token?: TokenMatrix.AsObject,
    positionMode?: number,
    closePl?: string,
    accountLevel?: number,
    monthlyClosePl?: string,
    dailyFee?: string,
    monthlyFee?: string,
    withdrawFlg?: number,
  }
}

export class Wallet extends jspb.Message {
  hasCcy(): boolean;
  clearCcy(): void;
  getCcy(): string | undefined;
  setCcy(value: string): void;

  hasBalance(): boolean;
  clearBalance(): void;
  getBalance(): string | undefined;
  setBalance(value: string): void;

  hasCryptoAddress(): boolean;
  clearCryptoAddress(): void;
  getCryptoAddress(): string | undefined;
  setCryptoAddress(value: string): void;

  hasReserve(): boolean;
  clearReserve(): void;
  getReserve(): string | undefined;
  setReserve(value: string): void;

  hasReward(): boolean;
  clearReward(): void;
  getReward(): string | undefined;
  setReward(value: string): void;

  hasPoint(): boolean;
  clearPoint(): void;
  getPoint(): string | undefined;
  setPoint(value: string): void;

  hasChip(): boolean;
  clearChip(): void;
  getChip(): string | undefined;
  setChip(value: string): void;

  hasChip2(): boolean;
  clearChip2(): void;
  getChip2(): string | undefined;
  setChip2(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wallet.AsObject;
  static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wallet;
  static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
  export type AsObject = {
    ccy?: string,
    balance?: string,
    cryptoAddress?: string,
    reserve?: string,
    reward?: string,
    point?: string,
    chip?: string,
    chip2?: string,
  }
}

export class TokenMatrix extends jspb.Message {
  hasLevelName(): boolean;
  clearLevelName(): void;
  getLevelName(): string | undefined;
  setLevelName(value: string): void;

  hasCompanyProfitFlg(): boolean;
  clearCompanyProfitFlg(): void;
  getCompanyProfitFlg(): number | undefined;
  setCompanyProfitFlg(value: number): void;

  hasMiningProfitFlg(): boolean;
  clearMiningProfitFlg(): void;
  getMiningProfitFlg(): number | undefined;
  setMiningProfitFlg(value: number): void;

  hasRestApiFlg(): boolean;
  clearRestApiFlg(): void;
  getRestApiFlg(): number | undefined;
  setRestApiFlg(value: number): void;

  hasDirectDealFlg(): boolean;
  clearDirectDealFlg(): void;
  getDirectDealFlg(): number | undefined;
  setDirectDealFlg(value: number): void;

  hasHideFlg(): boolean;
  clearHideFlg(): void;
  getHideFlg(): number | undefined;
  setHideFlg(value: number): void;

  hasAnonymousFlg(): boolean;
  clearAnonymousFlg(): void;
  getAnonymousFlg(): number | undefined;
  setAnonymousFlg(value: number): void;

  hasIbTier(): boolean;
  clearIbTier(): void;
  getIbTier(): number | undefined;
  setIbTier(value: number): void;

  hasIbReward(): boolean;
  clearIbReward(): void;
  getIbReward(): string | undefined;
  setIbReward(value: string): void;

  hasTradingFeeDiscount(): boolean;
  clearTradingFeeDiscount(): void;
  getTradingFeeDiscount(): string | undefined;
  setTradingFeeDiscount(value: string): void;

  hasLeverageUp(): boolean;
  clearLeverageUp(): void;
  getLeverageUp(): string | undefined;
  setLeverageUp(value: string): void;

  hasOpenPositionUp(): boolean;
  clearOpenPositionUp(): void;
  getOpenPositionUp(): string | undefined;
  setOpenPositionUp(value: string): void;

  hasExchangePriority(): boolean;
  clearExchangePriority(): void;
  getExchangePriority(): number | undefined;
  setExchangePriority(value: number): void;

  clearBenefitList(): void;
  getBenefitList(): Array<TokenBenefit>;
  setBenefitList(value: Array<TokenBenefit>): void;
  addBenefit(value?: TokenBenefit, index?: number): TokenBenefit;

  hasWsApiFlg(): boolean;
  clearWsApiFlg(): void;
  getWsApiFlg(): number | undefined;
  setWsApiFlg(value: number): void;

  hasAdvertiserFlg(): boolean;
  clearAdvertiserFlg(): void;
  getAdvertiserFlg(): number | undefined;
  setAdvertiserFlg(value: number): void;

  hasTradingPointFlg(): boolean;
  clearTradingPointFlg(): void;
  getTradingPointFlg(): number | undefined;
  setTradingPointFlg(value: number): void;

  hasMasterIbFlg(): boolean;
  clearMasterIbFlg(): void;
  getMasterIbFlg(): number | undefined;
  setMasterIbFlg(value: number): void;

  hasIbMarkupFlg(): boolean;
  clearIbMarkupFlg(): void;
  getIbMarkupFlg(): number | undefined;
  setIbMarkupFlg(value: number): void;

  hasChipUpPercent(): boolean;
  clearChipUpPercent(): void;
  getChipUpPercent(): string | undefined;
  setChipUpPercent(value: string): void;

  hasLoginPointFlg(): boolean;
  clearLoginPointFlg(): void;
  getLoginPointFlg(): number | undefined;
  setLoginPointFlg(value: number): void;

  hasInterestUpPercent(): boolean;
  clearInterestUpPercent(): void;
  getInterestUpPercent(): string | undefined;
  setInterestUpPercent(value: string): void;

  hasJackpotFlg(): boolean;
  clearJackpotFlg(): void;
  getJackpotFlg(): number | undefined;
  setJackpotFlg(value: number): void;

  hasAssistantFlg(): boolean;
  clearAssistantFlg(): void;
  getAssistantFlg(): number | undefined;
  setAssistantFlg(value: number): void;

  hasMarginInterest(): boolean;
  clearMarginInterest(): void;
  getMarginInterest(): string | undefined;
  setMarginInterest(value: string): void;

  hasZeroCutFlg(): boolean;
  clearZeroCutFlg(): void;
  getZeroCutFlg(): number | undefined;
  setZeroCutFlg(value: number): void;

  hasStopoutAidPercent(): boolean;
  clearStopoutAidPercent(): void;
  getStopoutAidPercent(): string | undefined;
  setStopoutAidPercent(value: string): void;

  hasPayoutUpPercent(): boolean;
  clearPayoutUpPercent(): void;
  getPayoutUpPercent(): string | undefined;
  setPayoutUpPercent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenMatrix.AsObject;
  static toObject(includeInstance: boolean, msg: TokenMatrix): TokenMatrix.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenMatrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenMatrix;
  static deserializeBinaryFromReader(message: TokenMatrix, reader: jspb.BinaryReader): TokenMatrix;
}

export namespace TokenMatrix {
  export type AsObject = {
    levelName?: string,
    companyProfitFlg?: number,
    miningProfitFlg?: number,
    restApiFlg?: number,
    directDealFlg?: number,
    hideFlg?: number,
    anonymousFlg?: number,
    ibTier?: number,
    ibReward?: string,
    tradingFeeDiscount?: string,
    leverageUp?: string,
    openPositionUp?: string,
    exchangePriority?: number,
    benefitList: Array<TokenBenefit.AsObject>,
    wsApiFlg?: number,
    advertiserFlg?: number,
    tradingPointFlg?: number,
    masterIbFlg?: number,
    ibMarkupFlg?: number,
    chipUpPercent?: string,
    loginPointFlg?: number,
    interestUpPercent?: string,
    jackpotFlg?: number,
    assistantFlg?: number,
    marginInterest?: string,
    zeroCutFlg?: number,
    stopoutAidPercent?: string,
    payoutUpPercent?: string,
  }
}

export class TokenBenefit extends jspb.Message {
  hasBenefitType(): boolean;
  clearBenefitType(): void;
  getBenefitType(): BenefitTypeMap[keyof BenefitTypeMap] | undefined;
  setBenefitType(value: BenefitTypeMap[keyof BenefitTypeMap]): void;

  hasInstrumentType(): boolean;
  clearInstrumentType(): void;
  getInstrumentType(): InstrumentTypeMap[keyof InstrumentTypeMap] | undefined;
  setInstrumentType(value: InstrumentTypeMap[keyof InstrumentTypeMap]): void;

  hasFromAmount(): boolean;
  clearFromAmount(): void;
  getFromAmount(): string | undefined;
  setFromAmount(value: string): void;

  hasToAmount(): boolean;
  clearToAmount(): void;
  getToAmount(): string | undefined;
  setToAmount(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenBenefit.AsObject;
  static toObject(includeInstance: boolean, msg: TokenBenefit): TokenBenefit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TokenBenefit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenBenefit;
  static deserializeBinaryFromReader(message: TokenBenefit, reader: jspb.BinaryReader): TokenBenefit;
}

export namespace TokenBenefit {
  export type AsObject = {
    benefitType?: BenefitTypeMap[keyof BenefitTypeMap],
    instrumentType?: InstrumentTypeMap[keyof InstrumentTypeMap],
    fromAmount?: string,
    toAmount?: string,
  }
}

export class Relation extends jspb.Message {
  hasLoginId(): boolean;
  clearLoginId(): void;
  getLoginId(): string | undefined;
  setLoginId(value: string): void;

  hasMamCode(): boolean;
  clearMamCode(): void;
  getMamCode(): string | undefined;
  setMamCode(value: string): void;

  hasRelationType(): boolean;
  clearRelationType(): void;
  getRelationType(): number | undefined;
  setRelationType(value: number): void;

  hasRelationStatus(): boolean;
  clearRelationStatus(): void;
  getRelationStatus(): number | undefined;
  setRelationStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Relation.AsObject;
  static toObject(includeInstance: boolean, msg: Relation): Relation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Relation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Relation;
  static deserializeBinaryFromReader(message: Relation, reader: jspb.BinaryReader): Relation;
}

export namespace Relation {
  export type AsObject = {
    loginId?: string,
    mamCode?: string,
    relationType?: number,
    relationStatus?: number,
  }
}

export interface BenefitTypeMap {
  LEVERAGE: 1;
  POSITION: 2;
}

export const BenefitType: BenefitTypeMap;

export interface InstrumentTypeMap {
  A: 1;
  B: 2;
  C: 3;
}

export const InstrumentType: InstrumentTypeMap;

