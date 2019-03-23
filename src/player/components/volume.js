import React from "react";
import IconVolume from "../../icons/components/volume";
import "./volume.css";

function Volume (props){
    return(
        <button className="Volume"  >
            <div onClick={props.volumeOn}>
                <IconVolume 
                    size={25}
                    color="white"
                />
            </div>
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    onChange={props.handleChange}
                    value={props.volume}   
                />
            </div>
        </button>
    )
}

export default Volume;