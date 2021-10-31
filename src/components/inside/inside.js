import React from 'react'
import "./inside.css"
import { useHistory } from 'react-router';
import Sound from 'react-sound';
export default function Inside() {
    const history = useHistory();
    function playMusic(){
        var doorOpening = new Audio('scary_wooden.wav');
        doorOpening.play();
    }
    return (
        <div className="body">
            <div className="background">
            <Sound
                    url="scary_wind.wav"
                    playStatus={Sound.status.PLAYING}
                    // playFromPosition={200}
                    loop={true}
                />
                <div className="text2">
                    You See 3 Doors..... Enter into one....A choice you must make...
                    <div className="choice">
                        <div className="door" onClick={()=>{
                            history.push("/roomone")
                            playMusic()
                        }}>
                            Door 1
                        </div>
                        <div className="door" onClick={()=>{
                            history.push("/movie")
                            playMusic()
                        }}>
                            Door 2
                        </div>
                        <div className="door" onClick={()=>{
                            history.push("/planchet")
                            playMusic()

                        }}>
                            Door 3
                        </div>
                        {/* <div className="door" onClick={()=>{
                            history.push("/")
                            playMusic()

                        }}>
                            Door 4
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
