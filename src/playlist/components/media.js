import React,{PureComponent} from "react";
import propTypes from "prop-types";
import "./media.css";

class Media extends PureComponent{

    //Estados, los estados son mutables
    state= {
        author: "Josias Cubillos" 
    }

    //La funcion handleClick hereda el contexto this de su padre Media
    //por medio de la arrow function 
    handleClick = (ev) => {
        this.props.openModal(this.props)
    }

    render(){
        return(
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img className="Media-image" src={this.props.cover} alt="" width={260} height={160} />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: propTypes.string,
    title: propTypes.string.isRequired,
    author: propTypes.string,
    type: propTypes.oneOf(["video","audio"])
}

export default Media;