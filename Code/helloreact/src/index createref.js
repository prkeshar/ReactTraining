import React, {createRef} from 'react'
import ReactDom from 'react-dom'


let fname = createRef();

let handleClick = (e) => {
    alert(fname.current.value);
}

let EComp = () =>
 {
     return (
        <div>
            <h2>Button demo</h2>
            <input type="text" name="fname" ref={fname} />
            <button onClick={handleClick}>Click me!</button>
        </div>
     );
 }
ReactDom.render(<EComp />, document.getElementById('root'));