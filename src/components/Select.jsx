import React, { Component } from "react";
class Select extends Component {
    constructor(props){
        super(props);
    
}

render(){
    return(
        <div className="form-element">
             <label htmlFor={this.props.name}> {this.props.title} </label>
             <select
             value={this.props.value}
             onSelect={this.props.handleChange}>
            {this.props.options.map(option =>{
                return (
                    <option  key={option} value={option} label={option}>
                    </option>
                );
            })}
             </select>
        </div>

    )
}

}


export default Select;
