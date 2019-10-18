// import React, {useState} from 'react'
import React from 'react'
import {connect} from 'react-redux'

let mapStateToProps = (state) => {
    return {counter: state.counter};
}

let mapDispatchToProps = (dispatch) => {
    return {
        inc: () => {
            let action = {type : 'INC', paylowd : 1}
            dispatch(action);
        },
        dec: () => {
            let action = {type : 'DEC', payload :  1}
            dispatch(action);
        }
    }
}
export function Counter(props) {
    //const [counter, setcounter] = useState(0);
    let increment = () => {
        //setcounter(counter+1)
        alert('increment');
        props.inc();
    }
    
    let decrement = () => {
        //setcounter(counter-1);
        alert('decrement');
        props.dec();
    }

    return (
        <div>
            {/* <h3>Counter ({counter})</h3> */}
            <h3>Counter {props.counter}</h3>
            <button onClick={increment}>+++++++++</button>
            <button onClick={decrement}>---------</button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);