import React from "react";
import {ContactoContext} from "./Context/ContactoProvider";



function DummyComponent2(){
    const {dummy,setDummy}=React.useContext(ContactoContext);
    const miFuncion=()=>{
        setDummy("Jack");
    }
    return(
        <React.Fragment>
        <h1>{dummy}</h1>
        <button onClick={miFuncion}>Picale Aqui</button>
        </React.Fragment>

    )
}
export default DummyComponent2;