import axios from "axios";
import React, { useEffect, useState } from "react";
import AddProduct from "./components/AddProduct";
import Pagination from "./components/Pagination";

import Products from "./components/Products";

const App = () => {

 
  const [data,setData]=useState([])
  //fetching data from json server
  useEffect(()=>{
    axios.get("http://localhost:8080/products").then((response)=>{
   
      setData(response.data)
    })
  },[])
  return <div>
    <AddProduct/>
  
    <Products data={data}/>
    <Pagination />
  </div>;
};

export default App;