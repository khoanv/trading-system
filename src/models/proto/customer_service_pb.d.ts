// package: 
// file: customer_service.proto

import * as jspb from "google-protobuf";
import * as rpc_pb from "./rpc_pb";
import * as customer_model_pb from "./customer_model_pb";

export class CustomerProfileRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerProfileRequest): CustomerProfileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerProfileRequest;
  static deserializeBinaryFromReader(message: CustomerProfileRequest, reader: jspb.BinaryReader): CustomerProfileRequest;
}

export namespace CustomerProfileRequest {
  export type AsObject = {
  }
}

export class CustomerProfileResponse extends jspb.Message {
  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): customer_model_pb.CustomerProfile | undefined;
  setProfile(value?: customer_model_pb.CustomerProfile): void;

  clearAccountList(): void;
  getAccountList(): Array<customer_model_pb.CustomerAccount>;
  setAccountList(value: Array<customer_model_pb.CustomerAccount>): void;
  addAccount(value?: customer_model_pb.CustomerAccount, index?: number): customer_model_pb.CustomerAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerProfileResponse): CustomerProfileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerProfileResponse;
  static deserializeBinaryFromReader(message: CustomerProfileResponse, reader: jspb.BinaryReader): CustomerProfileResponse;
}

export namespace CustomerProfileResponse {
  export type AsObject = {
    profile?: customer_model_pb.CustomerProfile.AsObject,
    accountList: Array<customer_model_pb.CustomerAccount.AsObject>,
  }
}

export class RegisterCustomerRequest extends jspb.Message {
  hasLoginId(): boolean;
  clearLoginId(): void;
  getLoginId(): string | undefined;
  setLoginId(value: string): void;

  hasFirstName(): boolean;
  clearFirstName(): void;
  getFirstName(): string | undefined;
  setFirstName(value: string): void;

  hasLastName(): boolean;
  clearLastName(): void;
  getLastName(): string | undefined;
  setLastName(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCustomerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCustomerRequest): RegisterCustomerRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCustomerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCustomerRequest;
  static deserializeBinaryFromReader(message: RegisterCustomerRequest, reader: jspb.BinaryReader): RegisterCustomerRequest;
}

export namespace RegisterCustomerRequest {
  export type AsObject = {
    loginId?: string,
    firstName?: string,
    lastName?: string,
    password?: string,
  }
}

export class RegisterCustomerResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): RegisterCustomerResponse.ResultMap[keyof RegisterCustomerResponse.ResultMap] | undefined;
  setResult(value: RegisterCustomerResponse.ResultMap[keyof RegisterCustomerResponse.ResultMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterCustomerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterCustomerResponse): RegisterCustomerResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RegisterCustomerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterCustomerResponse;
  static deserializeBinaryFromReader(message: RegisterCustomerResponse, reader: jspb.BinaryReader): RegisterCustomerResponse;
}

export namespace RegisterCustomerResponse {
  export type AsObject = {
    result?: RegisterCustomerResponse.ResultMap[keyof RegisterCustomerResponse.ResultMap],
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class AccountEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasAccount(): boolean;
  clearAccount(): void;
  getAccount(): customer_model_pb.CustomerAccount;
  setAccount(value?: customer_model_pb.CustomerAccount): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AccountEvent): AccountEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AccountEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountEvent;
  static deserializeBinaryFromReader(message: AccountEvent, reader: jspb.BinaryReader): AccountEvent;
}

export namespace AccountEvent {
  export type AsObject = {
    id?: number,
    account: customer_model_pb.CustomerAccount.AsObject,
  }
}

export class CustomerEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasProfile(): boolean;
  clearProfile(): void;
  getProfile(): customer_model_pb.CustomerProfile;
  setProfile(value?: customer_model_pb.CustomerProfile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomerEvent.AsObject;
  static toObject(includeInstance: boolean, msg: CustomerEvent): CustomerEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CustomerEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomerEvent;
  static deserializeBinaryFromReader(message: CustomerEvent, reader: jspb.BinaryReader): CustomerEvent;
}

export namespace CustomerEvent {
  export type AsObject = {
    id?: number,
    profile: customer_model_pb.CustomerProfile.AsObject,
  }
}

export class MamEvent extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  clearRelationList(): void;
  getRelationList(): Array<customer_model_pb.Relation>;
  setRelationList(value: Array<customer_model_pb.Relation>): void;
  addRelation(value?: customer_model_pb.Relation, index?: number): customer_model_pb.Relation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MamEvent.AsObject;
  static toObject(includeInstance: boolean, msg: MamEvent): MamEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MamEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MamEvent;
  static deserializeBinaryFromReader(message: MamEvent, reader: jspb.BinaryReader): MamEvent;
}

export namespace MamEvent {
  export type AsObject = {
    id?: number,
    relationList: Array<customer_model_pb.Relation.AsObject>,
  }
}

