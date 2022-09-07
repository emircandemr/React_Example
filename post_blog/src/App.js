import React from 'react';
import { useEffect } from 'react';
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import { socket } from './socket/socket';
import { setSocketID } from './store/socketSlice/SocketSlice';
import store from "./store/store"

function App() {

  useEffect( () => {
    socket.open("connect",() => {
       console.log(socket.id);
       store.dispatch(setSocketID(socket.id))
    })
  },[])
 
  return (
    <>
      <AppRouter/>
    </>

  );
}

export default App;
