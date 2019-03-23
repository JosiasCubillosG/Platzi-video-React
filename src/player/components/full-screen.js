import React from "react";
import IconScreen from "../../icons/components/full-screen";
import "./full-screen.css";

function FullScreen (props){
    return(
        <div className="FullScreen" onClick={props.full}>
            <IconScreen 
                size={25}
                color="white"
            />
        </div>
    )
}


export default FullScreen;