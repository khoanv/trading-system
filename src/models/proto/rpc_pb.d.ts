// package: 
// file: rpc.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class RpcMessage extends jspb.Message {
  hasId(): boolean;
  clearId(): void;
  getId(): number | undefined;
  setId(value: number): void;

  hasResult(): boolean;
  clearResult(): void;
  getResult(): RpcMessage.ResultMap[keyof RpcMessage.ResultMap] | undefined;
  setResult(value: RpcMessage.ResultMap[keyof RpcMessage.ResultMap]): void;

  hasVersion(): boolean;
  clearVersion(): void;
  getVersion(): string | undefined;
  setVersion(value: string): void;

  hasService(): boolean;
  clearService(): void;
  getService(): string | undefined;
  setService(value: string): void;

  hasSourceId(): boolean;
  clearSourceId(): void;
  getSourceId(): number | undefined;
  setSourceId(value: number): void;

  hasContextId(): boolean;
  clearContextId(): void;
  getContextId(): number | undefined;
  setContextId(value: number): void;

  hasPayloadData(): boolean;
  clearPayloadData(): void;
  getPayloadData(): Uint8Array | string;
  getPayloadData_asU8(): Uint8Array;
  getPayloadData_asB64(): string;
  setPayloadData(value: Uint8Array | string): void;

  hasPayloadClass(): boolean;
  clearPayloadClass(): void;
  getPayloadClass(): string | undefined;
  setPayloadClass(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RpcMessage.AsObject;
  static toObject(includeInstance: boolean, msg: RpcMessage): RpcMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RpcMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RpcMessage;
  static deserializeBinaryFromReader(message: RpcMessage, reader: jspb.BinaryReader): RpcMessage;
}

export namespace RpcMessage {
  export type AsObject = {
    id?: number,
    result?: RpcMessage.ResultMap[keyof RpcMessage.ResultMap],
    version?: string,
    service?: string,
    sourceId?: number,
    contextId?: number,
    payloadData: Uint8Array | string,
    payloadClass?: string,
  }

  export interface ResultMap {
    SUCCESS: 1;
    INVALID_VERSION: 2;
    INVALID_SERVICE: 3;
    INVALID_PAYLOAD: 4;
    NOT_AUTHENTICATED: 5;
    SERVICE_REJECTED: 6;
    SERVICE_UNAVAILABLE: 7;
    INTERNAL_ERROR: 99;
  }

  export const Result: ResultMap;
}

  export const version: jspb.ExtensionFieldInfo<string>;

  export const service: jspb.ExtensionFieldInfo<string>;

