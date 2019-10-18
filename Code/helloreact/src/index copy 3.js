import React from 'react'
import ReactDom from 'react-dom'
import {Route, BrowserRouter} from 'react-router-dom'
import './index.css'
import {Signin} from './StateComponent/Signin'
import {LoggedSuccessful} from './StateComponent/LoggedSuccessful'

let Comp = () => {
    return (
        <div>
            <Route path="/success" component={LoggedSuccessful}></Route>
            <Signin />
        </div>
    );
}

ReactDom.render(
    <BrowserRouter>
        <Comp />
    </BrowserRouter>, document.getElementById('root'));