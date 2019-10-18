import React from 'react'

export class StateComp extends React.Component {
    label = "Stateful Component";
    constructor(props){
        super(props);
        this.state = {
            msg : "maintaining state"
        }
    }

    hclick = () => {
        this.label = "Changed...";  //It won't reflect
        //React will react to changes only when it is state
        //when state changes render is called again
        this.setState({
            msg : "msg changed"
        })
    }

    render() {
        return (
            <div>
                <h3>{this.label}</h3>
                <h4>{this.state.msg}</h4>
                <h4>{this.props.match.params.state}</h4>
                <button onClick={this.hclick}>Click</button>
            </div>
        );
    }
}