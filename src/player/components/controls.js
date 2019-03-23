import React from "react";
import "./controls.css";

function VideoPlayerControl (props){
    return(
        <div className="VideoPlayerControls">
            {props.children}
        </div>
    )
}

export default VideoPlayerControl;