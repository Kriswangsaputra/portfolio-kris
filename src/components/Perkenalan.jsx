import React from "react";
import { createRoot } from "react-dom/client";

function Perkenalan(props){
    return(
        <div>
            <h1 className="text-red-500 font-heading">{props.nama}</h1>
            <p>{props.jabatan}</p>
        </div>
    )
}

export default Perkenalan;
