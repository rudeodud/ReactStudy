import { useState } from "react";

export default function Hellow(){
    //let name = "Mike"
    const[name, setName] = useState('Mike');
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={()=>{
                setName(name ==="Mike" ? "Jane" : "Mike")
            }}>changeName</button>
        </div>
    );}