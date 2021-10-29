import React from 'react';
import './mainpage.css';
import { useHistory } from 'react-router';
export default function MainPage() {
    const history = useHistory();
    return (
        <div id="body">
            <div>
                <img src="ghost.png" alt="ghost" style={{position: "absolute"}} class="ghost" />
                <p class="text" style={{textAlign: "center", fontFamily: "'Are You Serious', cursive", fontSize: "50px"}}>Da<span
                        class="glow2">r</span>e to put
                    <span class="glow" style={{texthadow: "1px 3px 60px rgba(255, 54, 0, 0.9)"}}>ke</span>y
                </p>
                <div class="a">
                    <img src="gate-removebg-preview.png" alt="" style={{width: "100%", height: "100%", position: "fixed", top: "60px"}} />
                    <button class="btn"><img src="lock.jpg" onClick={()=>{history.push("/inside")}} alt="Lock" /></button>
                </div>
            </div>
        </div>
    )
}


