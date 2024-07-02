import React, { useContext, useMemo , createContext} from "react";
import {io} from 'socket.io-client'



const SocketContext = createContext(null); // default null my own created hook


// i'll call UseSocket and entire socket is available their
export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

// this provider will server socket for user
export const SocketProvider =(props)  => {
    // use memeo so that component do not refresh time to time

    const socket = useMemo( () => io('localhost:8000') , [])
    return (
        <SocketContext.Provider  value={socket}>
            {/* basically a socket connection making via checking my memeo*/}
            {props.children} 
        </SocketContext.Provider>
    )
}
