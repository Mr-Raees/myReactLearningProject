//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Products from './Products';
import { useState } from 'react';


function App() {

 // let[name,setName]=useState();
  //let [age,setAge]=useState();

  /*function doSomthing(){
    alert("hello")
  }*/
 /* let countries=[
    {name:'India',capital:'New delhi'},
    {name:'South Africa', capital:'Cape town'},
    {name:'New Zealand' ,capital:'Wellington'}
  ]*/

  return (


    <div className="App">

      {/*
        countries.map((country,index)=>{
          return(
            <div className='data' key={index}>
                <h3>{country.name}</h3>
                <p>{country.capital}</p>

              </div>
          );
        })*/
      }




      
     {/*} <input type='text' placeholder='enter name' onChange={(event)=>{
        setName(event.target.value);
      }}/>
      <input type='number' placeholder='enter age' onChange={(event)=>{
        setAge(event.target.value);
      }}/>
      <button onClick={()=>{
        console.log(name,age)
      }}>submit</button>*/}


      <Header></Header>
      <Products/>
      {/* <button className='btn' onClick={doSomthing}>click</button>
      */}
  </div>
  );
}

export default App;
