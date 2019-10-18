import React from 'react'
import ReactDom from 'react-dom'


let handleClick = (e) => {
    //alert(e.type);
    //alert(e.target.textContent);
    alert(document.getElementsByName('fname')[0].value);
}

let EComp = () =>
 {
     return (
        <div>
            <h2>Button demo</h2>
            <input type="text" name="fname" />
            <button onClick={handleClick}>Click me!</button>
        </div>
     );
 }
ReactDom.render(<EComp />, document.getElementById('root'));