import React from 'react'
import "./inside.css"
import { useHistory } from 'react-router';
export default function Inside() {
    const history = useHistory();
    return (
        <div className="body">
            <div className="background">
                <div className="text2">
                    You See 4 Doors..... Enter into one....A choice you must make...
                    <div className="choice">
                        <div className="door" onClick={()=>{
                            history.push("/roomone")

                        }}>
                            Door 1
                        </div>
                        <div className="door" onClick={()=>{
                            history.push("/")

                        }}>
                            Door 2
                        </div>
                        <div className="door" onClick={()=>{
                            history.push("/")

                        }}>
                            Door 3
                        </div>
                        <div className="door" onClick={()=>{
                            history.push("/")

                        }}>
                            Door 4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
