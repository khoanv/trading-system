import { SocketContext } from "./socket-provider";
import { useContext } from "react";

export const useWebSocket = () => {
    const socket = useContext(SocketContext);

    return socket;
};