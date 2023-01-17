import React,  { Component } from "react";

class RobotForm extends Component{
    constructor() {
        super();
        this.state = {
            name: "",
            type: "",
            mass: ""
        }
        this.setName = (name) => {
            this.state.name = name;
        }
        this.setType = (type) => {
            this.state.type = type;
        }
        this.setMass = (mass) => {
            this.state.mass = mass;
        }
        this.onAdd = () => {
            this.props.store.addRobot({"name": this.state.name, "type": this.state.type,  "mass": this.state.mass})
        }
    }

    render() {
        return (
            <form>
                <input type="text" id="name" value={this.state.name} onChange={(e) => this.setName(e.target.value)}></input>
                <input type="text" id="type" value={this.state.type} onChange={(e) => this.setType(e.target.value)}></input>
                <input type="text" id="mass" value={this.state.mass} onChange={(e) => this.setMass(e.target.value)}></input>
                <input type="button" id="button" value="add" onClick={this.onAdd}></input>
            </form>
        )
    }

}

export default RobotForm
