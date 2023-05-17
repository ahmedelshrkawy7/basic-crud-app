
import { createContext,useState } from "react";

export const productContext = createContext();

function ProductProvider(props){

    const[productes,setproductes]=useState([{id:1,title:'ahmed'},
    {id:2,title:'ahmed2'},
    {id:3,title:'ahmed3'}])

    return(<>

    <productContext.Provider value={productes}>
        {props.children}
    </productContext.Provider>



    </>)
}

export default ProductProvider;