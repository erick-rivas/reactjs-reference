/*
__Seed builder__
  (Read_only) Builder helper
*/

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

function convert(data) {
    let parsed = null;
    try {
        parsed = JSON.parse(data["data"]);
    } catch (error) {
        parsed = data;
    }
    return parsed;
}

export const useWS = (url = "/ws", save = false, options = { room: "global", queryParams: {}}, limit = null) => {

    const [messageHistory, setMessageHistory] = useState([]);
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(WS_URL + url + "/" + options.room + "/", {
        shouldReconnect: (e) => true,
        queryParams: options.queryParams,
        ...options
    });

    useEffect(() => {
        if(lastMessage !== null && save) {
            setMessageHistory((prev) => {
                if(limit != null && prev.length < limit)
                    return [...prev, convert(lastMessage)];
                else
                    return [...prev.slice(1), convert(lastMessage)];
            });
        }
    }, [lastMessage, setMessageHistory, save, limit]);

    const status = {
        "connecting": readyState === ReadyState.CONNECTING,
        "connected": readyState === ReadyState.OPEN,
        "closing": readyState === ReadyState.CLOSING,
        "closed": readyState === ReadyState.CLOSED,
        "uninstantiated": readyState === ReadyState.UNINSTANTIATED,
    };

    return [ convert(lastMessage), status, sendJsonMessage, messageHistory ];

}