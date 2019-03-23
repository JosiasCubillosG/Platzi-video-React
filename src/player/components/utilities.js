import React from "react";

function leftPad(number) {
    const pad = '00';
    return pad.substring(0, pad.length - number.length) + number;
}

function formatedTime(secs){
    const min = parseInt(secs/60,10);
    const sec = parseInt(secs%60,10);
    return `${leftPad(min.toString())}` + ":" + `${leftPad(sec.toString())}`
}

export default formatedTime;
