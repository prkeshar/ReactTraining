import React from 'react'
import ReactDom from 'react-dom'

//props are read only properties
let Product = (props) => {
    let name = "Laptop";
    return (
        <div>
            <div>{props.pname}</div>
            <div>{props.price}</div>
        </div>
    );
}

ReactDom.render(<Product pname='Mouse' price='500' />, document.getElementById('root'));