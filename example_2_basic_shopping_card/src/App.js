import './App.css';
import React, { useState }  from 'react';
import Card from "./component/card/card";
import PageTitle from './component/pageTitle/pageTitle';

import banner1 from "./component/cardImage/img/banner1.png";
import banner2 from "./component/cardImage/img/banner2.png"
import banner3 from "./component/cardImage/img/banner3.png"
import banner4 from "./component/cardImage/img/banner4.png"
import banner5 from "./component/cardImage/img/banner5.png"



function App() {

  const [products, setProducts] = useState( [
    {
      id:1,
      price:200,
      name:"AR2500 Erkek Kol Saati",
      image: banner1,
      title:"Armani"
    },
    {
      id:2,
      price:200,
      name:"DZ1399 Erkek Kol Saati",
      image:banner2,
      title:"Diesel"
    },
    {
      id:3,
      price:200,
      name:"DZ4282 Erkek Kol Saati",
      image:banner3,
      title:"Diesel"
    },
    { 
      id:4,
      price:200,
      name:"DZ1830 Erkek Kol Saati",
      image:banner4,
      title:"Diesel"
    },
    {
      id:5,
      price:200,  
      name:"FFS4835 Erkek Kol Saati",  
      image: banner5,   
      title:"Fossil"
    },

  ])

  const [boxProducts, setBoxProducts] = useState( [] )


  return (
    
    <div className="App">
        <PageTitle title=" Saat & Saat "/>
      <div className='card-box'>
        {products.map( (products,index)=> {
        return (
          <Card key={index} title={products.title} image={products.image} info={products.name} onClick={() => {
            
            const arr = [...boxProducts];
            arr.push(products)
            setBoxProducts(arr)
          
          }} />
        ) 
        })}
      </div>

      <PageTitle title=" Sepetim "/>
        
        <div className='card-box'>
            {boxProducts.map( (boxProducts,index) => {
            return(
              <Card key={index} title={boxProducts.title} image={boxProducts.image} info={boxProducts.name} />
            )
            })}
        </div>

    </div>
  );
}

export default App;
