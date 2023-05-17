import { useState } from "react";

 
 function Addproduct(){
    const sub =(e)=>{
        e.preventDefault();
        console.log(price);
        console.log(title);
        fetch('http://localhost:8000/products',{method:'POST',
       headers:{'content-type':'application/json'},
        body:JSON.stringify({
            title,
            price
        })})
       
    }
    

    const[title,settitle]=useState('');
    const[price,setprice]=useState('');
   
   

    return(<>
        <h1>add product</h1>
        <form onSubmit={sub}>
            <h2>title</h2>
            <input type={'text'} placeholder='title' className="form-control"onChange={(e)=>{settitle(e.target.value)}}></input>
            <h2>price</h2>
            <input type={'number'} placeholder='price' className="form-control"onChange={(e)=>{setprice(e.target.value)}}></input>
            <input type={'submit'}  className="btn btn-primary mt-5"></input>
        </form>
    
    </>)
 }

 export default Addproduct;