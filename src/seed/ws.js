import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { WS_URL } from 'settings';

/**
 * 
 * @param {String} room name
 * @param {Boolean} save message history
 * @returns WebSocket hook
 * @example
 * const [ lastMessage, status, sendObjectMessage, messageHistory ] = useWS("/ws_global", true);
 * // sendObjectMessage({ msg: "Hello" });
 * // messageHistory.map((message, index) => <span>message.data.msg</span>)
 */

export const useWS = (room = "/ws_global", save = false) => {

    const [messageHistory, setMessageHistory] = useState([]);
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(WS_URL + room + "/");

    useEffect(() => {
        if(lastMessage !== null && save) {
            let data = null;
            try {
                data = JSON.parse(lastMessage["data"]);
            } catch (error) {
                data = lastMessage;
            }
            setMessageHistory((prev) => [...prev, data]);
        }
    }, [lastMessage, setMessageHistory, save]);

    const status = {
        "CONNECTING": readyState === ReadyState.CONNECTING,
        "CONNECTED": readyState === ReadyState.OPEN,
        "CLOSING": readyState === ReadyState.CLOSING,
        "CLOSED": readyState === ReadyState.CLOSED,
        "UNINSTANTIATED": readyState === ReadyState.UNINSTANTIATED,
    };
    
    return [ lastMessage, status, sendJsonMessage, messageHistory ];

}