
import { useEffect } from 'react';
import './App.css';
import AppRouter from './AppRouter/AppRouter';
import { Request } from './request/Request';

function App() {

  useEffect( () => {

    Request.get("/test")

  },[])
 
  return (
    <>
      <AppRouter/>
    </>

  );
}

export default App;
