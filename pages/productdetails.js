import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function ProductDetails(){
    
    let {proId}=useParams();
   
    const[prod,setprod]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8000/products/${proId}`)
        .then((res)=>res.json())
        .then((data)=>setprod(data))

    },[])

    const hamosa = ()=>{
        Swal.fire({
            title: `hamsa is great `,
            showCancelButton:true
            }).then(data=>{
                if(data.isConfirmed){
                    Swal.fire({
                        title:"you have confirmed"
                    })
                }
            })
    }

    return(
        <>
        <h1>details #{prod.id}</h1>
        <h1>{prod.title}</h1>
        <img src={prod.image} />
        <h2>{prod.description}</h2>
        <button className="btn btn-danger" onClick={()=>{ hamosa()}}>hamsa</button>
        </>
    )
}

export default ProductDetails ;