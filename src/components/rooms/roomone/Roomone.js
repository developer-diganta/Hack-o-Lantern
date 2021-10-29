import React, { useEffect, useState } from 'react'
import "./roomone.css"
export default function Roomone() {
    const choices = [
        ["Dark","Drenched","Silence"],
        ["Door","Window","Trunk"],
        ["Park","Old mansion","Haunted Library"],
        []
    ];
    const [disp,updateDisp] = useState(false);
    const [count,updateCount] = useState(0);
    useEffect(()=>{setTimeout(()=>{
        updateDisp(true);
    }   
    ,15000)},[updateDisp]);
    return (
        <div style={{background:"black",width:"100vw",height:"100vh"}}>
            <div className="roomOneBody">
                <div className="text2">
                    <span className="disp1">Welcome to the room of deceit... Let's see... Hmmm... Make your choices</span> 
                 <div className={`${disp?"dis":"none"}`}>
                    <div className="text1">
                        <div>
                            {choices[count].map((x)=>{
                                return <div>
                                    <div onClick={()=>{updateCount(count+1)}}><span className="dis2">{x}</span></div>
                                </div>
                            })}
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </div>
    )
}
