/*
__Seed builder__
  (Read_only) Builder helper
*/

import { useState, useEffect } from 'react';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { WS_URL } from 'settings';

/**
 * Returns a hook to execute a WEBSOCKET handler
 * @param {String} room Websocket room
 * @param {Object} options Websocket options (onMessageReceived, queryParams={}, saveHistory=true, historyLimit=20)
 * @returns WebSocket hook
 * @example
 * const [reqWS, messageHistory, sendJsonMessage] = useWS("global", {
 *   onMessageReceived: (message) => setMessage(message)
 * });
 * if (reqWS.connecting) return <div>Connected</div>
 * return <div>Last message: {reqWS.data} </div>
 */

export const useWS = (room, options) => {

    options = { queryParams: {}, saveHistory: true, historyLimit: 20, ...options };
    const [messageHistory, setMessageHistory] = useState([]);
    const { sendJsonMessage, lastMessage, readyState } = useWebSocket(WS_URL + "/" + room + "/", {
        shouldReconnect: () => true,
        onMessage: (message) => {

            if (options.onMessageReceived != null)
                options.onMessageReceived({ data: getMessage(message) });

                if (options.saveHistory) {
                setMessageHistory((prev) => {
                    if (prev.length < options.historyLimit)
                        return [...prev, getMessage(message)];
                    else
                        return [...prev.slice(1), getMessage(message)];
                });
            }
        },
        queryParams: options.queryParams
    });

    return [getMessageData(lastMessage, readyState), messageHistory, sendJsonMessage]
}

const getMessage = (data) => {
    try {
        return JSON.parse(data["data"]);
    } catch (error) {
        return data;
    }
}

const getMessageData = (data, readyState) => {
    return {
        data: getMessage(data),
        connected: readyState === ReadyState.OPEN,
        connecting: readyState === ReadyState.CONNECTING,
        disconnected: readyState !== ReadyState.OPEN && readyState !== ReadyState.CONNECTING,
    };
}