// package: 
// file: system_service.proto

import * as jspb from "google-protobuf";
import * as rpc_pb from "./rpc_pb";
import * as system_model_pb from "./system_model_pb";

export class PingRequest extends jspb.Message {
  hasSendingTime(): boolean;
  clearSendingTime(): void;
  getSendingTime(): number | undefined;
  setSendingTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PingRequest): PingRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingRequest;
  static deserializeBinaryFromReader(message: PingRequest, reader: jspb.BinaryReader): PingRequest;
}

export namespace PingRequest {
  export type AsObject = {
    sendingTime?: number,
  }
}

export class PingResponse extends jspb.Message {
  hasSendingTime(): boolean;
  clearSendingTime(): void;
  getSendingTime(): number | undefined;
  setSendingTime(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    sendingTime?: number,
  }
}

export class LogoutRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutRequest): LogoutRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutRequest;
  static deserializeBinaryFromReader(message: LogoutRequest, reader: jspb.BinaryReader): LogoutRequest;
}

export namespace LogoutRequest {
  export type AsObject = {
  }
}

export class LogoutResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): LogoutResponse.ResultMap[keyof LogoutResponse.ResultMap] | undefined;
  setResult(value: LogoutResponse.ResultMap[keyof LogoutResponse.ResultMap]): void;

  hasDetail(): boolean;
  clearDetail(): void;
  getDetail(): string | undefined;
  setDetail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutResponse): LogoutResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutResponse;
  static deserializeBinaryFromReader(message: LogoutResponse, reader: jspb.BinaryReader): LogoutResponse;
}

export namespace LogoutResponse {
  export type AsObject = {
    result?: LogoutResponse.ResultMap[keyof LogoutResponse.ResultMap],
    detail?: string,
  }

  export interface ResultMap {
    SUCCESS: 1;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class LoginRequest extends jspb.Message {
  hasLoginId(): boolean;
  clearLoginId(): void;
  getLoginId(): string | undefined;
  setLoginId(value: string): void;

  hasPassword(): boolean;
  clearPassword(): void;
  getPassword(): string | undefined;
  setPassword(value: string): void;

  hasRoute(): boolean;
  clearRoute(): void;
  getRoute(): number | undefined;
  setRoute(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    loginId?: string,
    password?: string,
    route?: number,
  }
}

export class LoginResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): LoginResponse.ResultMap[keyof LoginResponse.ResultMap] | undefined;
  setResult(value: LoginResponse.ResultMap[keyof LoginResponse.ResultMap]): void;

  hasMsgCode(): boolean;
  clearMsgCode(): void;
  getMsgCode(): string | undefined;
  setMsgCode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginResponse;
  static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
  export type AsObject = {
    result?: LoginResponse.ResultMap[keyof LoginResponse.ResultMap],
    msgCode?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class Verify2FARequest extends jspb.Message {
  hasToken(): boolean;
  clearToken(): void;
  getToken(): string | undefined;
  setToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Verify2FARequest.AsObject;
  static toObject(includeInstance: boolean, msg: Verify2FARequest): Verify2FARequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Verify2FARequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Verify2FARequest;
  static deserializeBinaryFromReader(message: Verify2FARequest, reader: jspb.BinaryReader): Verify2FARequest;
}

export namespace Verify2FARequest {
  export type AsObject = {
    token?: string,
  }
}

export class Verify2FAResponse extends jspb.Message {
  hasResult(): boolean;
  clearResult(): void;
  getResult(): Verify2FAResponse.ResultMap[keyof Verify2FAResponse.ResultMap] | undefined;
  setResult(value: Verify2FAResponse.ResultMap[keyof Verify2FAResponse.ResultMap]): void;

  hasDetail(): boolean;
  clearDetail(): void;
  getDetail(): string | undefined;
  setDetail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Verify2FAResponse.AsObject;
  static toObject(includeInstance: boolean, msg: Verify2FAResponse): Verify2FAResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Verify2FAResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Verify2FAResponse;
  static deserializeBinaryFromReader(message: Verify2FAResponse, reader: jspb.BinaryReader): Verify2FAResponse;
}

export namespace Verify2FAResponse {
  export type AsObject = {
    result?: Verify2FAResponse.ResultMap[keyof Verify2FAResponse.ResultMap],
    detail?: string,
  }

  export interface ResultMap {
    FAILED: 0;
    SUCCESS: 1;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

export class SystemEvent extends jspb.Message {
  hasType(): boolean;
  clearType(): void;
  getType(): number | undefined;
  setType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemEvent.AsObject;
  static toObject(includeInstance: boolean, msg: SystemEvent): SystemEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemEvent;
  static deserializeBinaryFromReader(message: SystemEvent, reader: jspb.BinaryReader): SystemEvent;
}

export namespace SystemEvent {
  export type AsObject = {
    type?: number,
  }
}

