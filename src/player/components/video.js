import React,{Component} from "react";
import "./video.css";

class Video extends Component {

    togglePlay() {
        if(this.props.pause){
            this.video.play()
        }else{
            this.video.pause()
        }
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePlay();
        }   
    }

    setRef = element =>{
        this.video = element;
        
    }

    render(){
        const {
            handleSeeked,
            handleSeeking,
            timeUpdated,
            handleLoaded
        }=this.props

        return(
            <div className="Video">
                <video 
                    onLoadedMetadata={handleLoaded}
                    onTimeUpdate={timeUpdated}
                    onSeeking={handleSeeking}
                    onSeeked={handleSeeked}
                    autoPlay={this.props.autoPlay}
                    src={this.props.src}
                    ref={this.setRef}
                />
            </div> 
        )
    }
}

export default Video;