import React, { useEffect, useState } from 'react';
import './Planchet.css';
import Sound from 'react-sound';
import useSpeechToText from 'react-hook-speech-to-text';
import { useHistory } from 'react-router';

const rand_num = Math.floor(Math.random() * (5)+7);
export default function Planchet() {
    const [cnt,updateCnt] = useState(0)
    const [ans, updateAns] = useState(false);
    const history = useHistory();
    const [warning, updateWarning]=useState("DO NOT PROCEED IF YOU HAVE A WEAK HEART! JUMPSCARE ALERT!");
    const [msg, updatemsg]=useState("TAP THE MIC TO START SPEAKING AND TAP AGAIN WHEN FINISHED!!");
    console.log(rand_num);
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
        setResults
      } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
      });



    function playM(){
        
        updateCnt(cnt+1);
        if(cnt === 2){
            updateAns(true);
            const t = new Audio('t.wav');
            t.play();   
            setTimeout(() => {
                history.push('/inside');
            }, 5000)
        }
        else{
            console.log("CNT", cnt);
            const num = Math.round(Math.random());
            var g = num === 1 ? new Audio('yes.wav') : new Audio('no.wav');
            g.play();
            setResults([]);
        }
      }
    useEffect(() => {
        setInterval(() => {
            updateWarning("");
            updatemsg("");
        }, 3000)
    }, [updateWarning])
    return (
        <div className="body">
            
            <div className="planchet">
                <div className="face" style={{display: ans === true ? "flex" : "none"}}>
                    <img src="283782.jpg" alt="" />
                </div>
                <div style={{display: ans === true ? "none" : "block"}}>
                    <Sound
                            url="lightning.wav"
                            playStatus={Sound.status.PLAYING}
                            // playFromPosition={200}
                            loop={true}
                        />
                    <img src="https://thumbs.gfycat.com/NastyMedicalBoto-size_restricted.gif" alt="" />
                    <div style={{textAlign: "center", top: "-20px"}}>
                        <h4 style={{color: "white"}}>{warning}</h4>
                        
                        <h4 style={{color: "white"}}>{msg}</h4>
                        <button style={{border: "none", backgroundColor: "transparent", color: "red"}} onClick={isRecording ? stopSpeechToText : startSpeechToText} >
                            {isRecording ? <i class="fas fa-2x fa-microphone-slash"></i> : <i class="fas fa-2x fa-microphone"></i>}
                        </button>
                        {
                            results[0]?results[0].transcript? playM()
                            :console.log(""):console.log("")
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}