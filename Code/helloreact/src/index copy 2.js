import React from 'react'
import ReactDom from 'react-dom'

//let ele = React.createElement('h1','','New element');

//JSX
let ele = (
    <div>Hello</div>
);

//this is a component - view + functionality
//Has to start with capital letter
function MyComp() {
    let msg = "This is my component";
    return (
        <div>
            <div>{msg}</div>
            <Head />
        </div>
    );
}

function Head() {
    return (
        <div>
            Header component
        </div>

    );
}
//ReactDom.render(ele, document.getElementById('root'));
ReactDom.render(<MyComp />, document.getElementById('root'));
/*
ReactDom.render(<div>
    <MyComp />
    <MyComp />
</div>, document.getElementById('root'));
ReactDom.render(<h1>New index</h1>, document.getElementById('root'));
*/