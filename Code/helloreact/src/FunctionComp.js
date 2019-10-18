import React from 'react'

//no state can be maintained in function components
export function MyComponent() {
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