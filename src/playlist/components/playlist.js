import React from "react";
import Media from "./media.js";
import "./playlist.css";
// import Play from "../../icons/components/play";
// import Pause from "../../icons/components/pause";
// import Volumen from "../../icons/components/volume";
// import FullScreen from "../../icons/components/full-screen";


function Playlist (props){
    // const playlist = props.data.categories[0].playlist
    return(
        <div className="Playlist">
            {
                props.playlist.map((item)=>{
                    return <Media openModal={props.handleOpenModal} {...item} key={item.id} />
                })
            }
        </div>
    )
}


// class Playlist extends Component{
//     render(){
//         const playlist = this.props.data.categories[0].playlist
//         return(
//             <div className="Playlist">
//                 {/* dentro de {} yo puedo meter lo que quiera que sea de JS */}
//                 {
//                     playlist.map((item)=>{
//                         //La propiedad Key se usa para que sea mas optimo, recomendacion de react
//                         // return <Media title={item.title} key={item.id} />

//                         //La destructuracion {...item} lo que hace es enviar todas las propiedades
//                         //del objeto item
//                         return <Media {...item} key={item.id} />
//                     })
//                 }
//             </div>
//         )
//     }
// }

export default Playlist;