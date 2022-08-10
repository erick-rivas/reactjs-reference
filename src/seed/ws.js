import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { WS_URL } from 'settings';

/**
 * 
 * @param {String} url
 * @param {Boolean} save message history
 * @param {Object} options (room, queryParams)
 * @returns WebSocket hook
 * @example
 * const [ lastMessage, status, sendJsonMessage, messageHistory ] = useWS("/ws", true, {room: "global"});
 * // sendObjectMessage({ msg: "Hello" });
 * // messageHistory.map((message, index) => <span>message.data.msg</span>)
 */

export const useWS = (url = "/ws", save = false, options = { room: "global", queryParams: {}}) => {

    const [messageHistory, setMessageHistory] = useState([]);
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(WS_URL + url + "/" + options.room + "/", {
        shouldReconnect: (e) => true,
        queryParams: options.queryParams,
    });

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
        "connecting": readyState === ReadyState.CONNECTING,
        "connected": readyState === ReadyState.OPEN,
        "closing": readyState === ReadyState.CLOSING,
        "closed": readyState === ReadyState.CLOSED,
        "uninstantiated": readyState === ReadyState.UNINSTANTIATED,
    };
    
    return [ lastMessage, status, sendJsonMessage, messageHistory ];

}