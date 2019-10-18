import React, {createRef} from 'react'


let topicRef = createRef();

export class Topics extends React.Component {

    constructor() {
        super();
        this.state = {
            topics : []
        }
    }

    addTopic = (e) => {
        this.setState(prevState => ({
            topics : [...prevState.topics, topicRef.current.value]
            //topics : this.state.topics.concat(topicRef.current.value)
        }));
    }

    render() {
        return (
            
            <div>
                <input type="text" name="topic" ref={topicRef} />
                <button onClick={this.addTopic}>Add topic</button>
                <ul>
                {this.state.topics.map(item => {
                    return <li>{item}</li>;
                })}
                </ul>
            </div>
        );
    }

}