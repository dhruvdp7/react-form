import React, { Component } from "react";
class Button extends Component {
    constructor(props){
        super(props);
    
}

render(){
    return(
        <div className="form-element buttons">
             <button
                type={this.props.type}
                value={this.props.value}
                onClick={this.props.handleChange}
             >
             {this.props.title}
        </button>
        </div>

    )
}

}


export default Button;
