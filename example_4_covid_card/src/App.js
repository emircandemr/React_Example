import { useState } from 'react';
import './App.css';
import Card from './components/card';
import CoronaForCountry from './components/coronaFormCountry';
import Header from './components/header';
import RecordedCorona from './components/RecordedCorona';
import CoronaForContinent from './components/coronaForContinent';
import CoronaNews from './components/coronaNews';

function App() {

  const[key,setKey] = useState(1)

  return (
    <>
      <Header onMenuChange={(_key) => {
        setKey(_key) }} />

      <div className='md:container md:mx-auto p-8 page-content'>
        {key ===1 && 
          <div>
            <CoronaForCountry/>
          </div> }
        {key ===2 && 
        <div className='md:container md:mx-auto flex justify-center items-center page-content'>
          <RecordedCorona/>
        </div> }
        {key ===3 && 
        <div>
          <CoronaForContinent/>
        </div> }
        {key ===4 && 
        <div>
          <CoronaNews/>
        </div> }
        

      </div>
      
  
    </>
  );
}

export default App;
