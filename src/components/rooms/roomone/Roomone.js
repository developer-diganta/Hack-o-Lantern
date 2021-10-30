import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import "./roomone.css"
export default function Roomone() {
    const choices = [
        ["Dark","Drenched","Silence"],
        ["Door","Window","Trunk"],
        ["Park","Old mansion","Haunted Library"],
        []
    ];
    const characters = [
        {
            image:"i1.png",
            name:"Vampire",
        },
        {
            image:"i2.png",
            name:"Witch"
        },
        {
            image:"i3.png",
            name:"Werewolf"
        },
        {
            image:"i4.png",
            name:"Zombie"
        },
        {
            image:"i5.png",
            name:"The Demon"
        }
    ];
    const character = characters[Math.floor(Math.random()*5)];
    const [disp,updateDisp] = useState(false);
    const [count,updateCount] = useState(0);
    const [displayText,updateDisplayText] = useState("Welcome to the room of deceit... Let's see... Hmmm... Make your choices");
    useEffect(()=>{setTimeout(()=>{
        updateDisp(true);
        updateDisplayText("");
    }   
    ,15000)},[updateDisp]);
    const history = useHistory();
    return (
        <div style={{background:"black",width:"100vw",height:"100vh"}}>
        
            <div className="roomOneBody">
                <div className={`${count>=3?"vis":"none"}`} style={{fontSize:"40px",color:"red"}}>
                    <i className="fas fa-door-open" onClick={()=>{history.push("/inside")}}></i>
                </div>
                <div className="text3">
                    <span className="disp1">{displayText}</span> 
                 <div className={`${disp?"dis":"none"}`} style={{position:"relative"}}>
                    <div className="text1">
                        <div>
                            {choices[count].map((x)=>{
                                return <div>
                                    <div onClick={()=>{updateCount(count+1);count===2?updateDisp(false):updateDisp(true);}}><span className="dis2">{x}</span></div>
                                </div>
                            })}
                        </div>
                    </div>
                 </div>
                 <div className={`${count>=3?"dis":"none"}`} style={{position:"relative"}}>
                        <div className="chr">You are ....... </div>
                        <div className="chr">{character.name}</div>    
                        <div>
                            <img src={character.image} alt={character.name} height={350} width={250} />
                        </div>
                </div>
                </div>
            </div>
        </div>
    )
}
