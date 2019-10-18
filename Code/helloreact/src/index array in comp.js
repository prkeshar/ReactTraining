import React from 'react'
import ReactDom from 'react-dom'

//props are read only properties
let Topics = () => {
    let tps = ['Angular', 'React', 'VUE'];
    let lis = tps.map(item => {
        return <li>{item}</li>;
    });
    return (
        <div>
            <div>Topics</div>
                <ul>
                    {lis}
                </ul>
        </div>
    );
}

ReactDom.render(<Topics />, document.getElementById('root'));