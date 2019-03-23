import React,{Component} from "react";
import VideoPlayerLayout from "../components/video-player-layout";
import Video from "../components/video";
import Title from "../components/title";
import PlayPause from "../components/play-pause";
import Timer from "../components/timer";
import Controls from "../components/controls";
import Utilities from "../components/utilities";
import ProgressBar from "../components/progress-bar";
import Spinner from "../components/spinner";
import Volume from "../components/volume";
import FullScreen from "../components/full-screen";

class VideoPlayer extends Component {
    state = {
        pause:true,
        duration: 0,
        currentTime:0,
        progressTime:0,
        transcur:0,
        loading:false,
        volume:0.5,
        volumeCont:0
    }

    togglePlay = (event) =>{
        this.setState({
            pause:!this.state.pause
        })
    }

    componentDidMount(){
        this.setState({
            pause: !this.props.autoPlay
        })
    }

    handleLoaded = event =>{
        this.video = event.target;
        this.setState({
            duration: Utilities(this.video.duration)
        })
    }

    timeUpdated = event =>{
        this.setState({
            currentTime: Utilities(this.video.currentTime),
            progressTime: this.video.duration,
            transcur: this.video.currentTime
        })
    }

    handleProgressChange = event =>{
        this.video.currentTime = event.target.value
        this.setState({
            transcur: this.video.currentTime
        })
        
    }

    handleSeeking = event =>{
        this.setState({
            loading:true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading:false
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value
        this.setState({
            volume:this.video.volume
        })
    }

    volumeOn = event =>{
        this.video.volume = this.state.volume
        if(this.video.volume>0){
            this.setState({
                volume:0,
                volumeCont: this.video.volume
            })
            this.video.volume=0
        }else{
            this.video.volume=this.state.volumeCont
            this.setState({
                volume: this.video.volume
            })
        }
    }

    fullScreen = event =>{
        if (!document.webkitIsFullScreen) {
            // mando a full screen
            this.player.webkitRequestFullscreen()
          } else {
            document.webkitExitFullscreen();
            // salgo del full screen
        }
    }

    setRef = element =>{
        this.player = element
    }

    render(){
        return(
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title} />
                <Controls>
                    <PlayPause 
                        handleClick={this.togglePlay}
                        pause={this.state.pause}
                    />
                    <Timer 
                        duration={this.state.duration} 
                        currentTime={this.state.currentTime}
                    />
                    <ProgressBar 
                        duration={this.state.progressTime}
                        value={this.state.transcur}
                        handleProgressChange={this.handleProgressChange}
                    />
                    <Volume 
                        volumeOn={this.volumeOn}
                        volume={this.state.volume}
                        handleChange={this.handleVolumeChange}
                    />
                    <FullScreen full={this.fullScreen}/>
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />

                <Video
                    handleLoaded={this.handleLoaded}
                    timeUpdated={this.timeUpdated}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    autoPlay={this.props.autoPlay}
                    pause={this.state.pause}
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;