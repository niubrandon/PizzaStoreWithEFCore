import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pizza from './Pizza';

const Main = () => {
  //const data = pizzas.map(pizza => <Pizza pizza={pizza} />)

  //use mock server from json-server
   const [pizzas, setPizzas] = useState([]);
/*    useEffect(() => {
     fetchData();
   }, [])

   function fetchData() {
     //mock
     fetch("/pizzas")
       .then(response => response.json())
       .then(data => setPizzas(data)) 
   } */
  useEffect(() => {
    axios.get('/pizzas')
        .then(data => {
          console.log(data.data)
          setPizzas(...pizzas, data.data)
        })
        .catch(e => console.log(e))
  },[])
  
  useEffect(() => {
    console.log("pizzas state is", pizzas)
  },[pizzas])

  const data = pizzas.map((pizza, index) => <Pizza key={index} pizza={pizza} />)

  return (
  <React.Fragment>
    { pizzas.length === 0 ?
      <div>No pizzas</div> :
      <div>{data}</div>
    }
  </React.Fragment>)
  }

export default Main;