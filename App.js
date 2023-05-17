// import logo from './logo.svg';
  import { Route, Routes } from 'react-router-dom';
import Navbar from './component/nav';
import './App.css';
// import WelcomeFc from './component/welcomeFc';
// import WelcomeC from './component/welcomeCl';
// import Navbar from './component/nav';
import Sidebar from './sidebar';
//import Slider from './component/slider';
// import Products from './component/productlist';
 import Home from './pages/home';
  import Productnew from "./pages/products";
  import Addproduct from './pages/addproduct';
  import ProductDetails from './pages/productdetails';
  import Products from "./pages/products"
// import Test from "./con2";
 import { createContext, useContext, useState } from "react";
import SideBar from './glint/sideBar/SideBar';
// import ProductProvider from "./pages/productscontext";
// import Navbar from "./newComponent/Navbar";

// import { Article,Cta,Nav ,Brand,Features} from "./newcomponent";
// import{Footer, Blog, Possibility, Header, WhatGpt3,Feature }from './container';

// import{Nav,Header,BodyA,BodyB,Footer } from './component1'
//import { Header, NavGlint ,SideBar} from './glint';

 

  
function App() {
   




  return (
    <div className="App">
        <Navbar/> 
   
      <div className='row'>
         <div className='col-2'>
          <Sidebar/>
         </div>
         <div className='col-10'>
           <Routes>
             <Route path='/' element={<Home/>}/>
             {/* <Route path='about' element={<About/>}/> */}
             <Route path='products' element={<Productnew/>}/>
             <Route path='products/add' element={<Addproduct/>}/>
             <Route path='products/:proId' element={<ProductDetails/>}/>
           </Routes>
         </div>
      </div>
      
{/*       
    <div className='glint__background'>
      <NavGlint/>
      <Header/>
    </div>
    */}
      

   
     
     
    </div>
  );
}

export default App;