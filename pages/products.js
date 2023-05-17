import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Swal from 'sweetalert2'

function Productnew(){

   
   
    const[product2,setproduct]=useState([]);

    useEffect(()=>{
        getAllProducts()
    },[]);

    const getAllProducts =()=>{
        fetch('http://localhost:8000/products')
        .then(res=> res.json())
        .then(data=>setproduct(data));
    }

  

    const delete1 = (pro) => {

        Swal.fire({
            title: `r u sure to delete this product ${pro.title}`,
            showCancelButton:true
            }).then((data)=>{
                if(data.isConfirmed){
                                
                    fetch(`http://localhost:8000/products/${pro.id}`,{method:"DELETE"})
                    .then((res)=>res.json)
                    .then(()=>{ getAllProducts()})
                }
            })
     
    }

    return(
    <>
    <h1>clients page</h1>
    <Link to={'/products/add'} className="btn btn-success mt-3">add new server</Link>
    <table class="table table-striped mt-5">
        <thead>
            <th>id</th>
            <th>title</th>
            <th>Description</th>
            <th>price</th>
            <th>operations</th>
        </thead>
       <tbody>
            {product2.map((pro)=>{
                return(<>
         <tr key={pro.id}>
                <td>{pro.id}</td>
                <td>{pro.title}</td>
                <td>{pro.description}</td>
                <td>{pro.price}</td>
                <td>
                    <button className="btn btn-danger btn-sm" onClick={()=>{delete1(pro)}}>delete</button>
                    <Link to={`/products/${pro.id}`} className="btn btn-info btn-sm">view</Link>
                    <button className="btn btn-primary btn-sm ">edit</button>
                </td>
        </tr>
                </>)
            })}
      
       </tbody>
       
    </table>
    </>
    )
}

export default Productnew ;