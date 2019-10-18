import React from 'react'
import ReactDom from 'react-dom'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import {Topics} from './StateComponent/Topics'
import {StateComp} from './StateComponent/index'
import './index.css'

let AppRouter = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                <li><Link to="/topicscomp">Topics</Link></li>
                <li><Link to="/statecomp/ap">State comp</Link></li>
                <li><Link to="/statecomp/mh">State comp mh</Link></li>
            </ul>
            <Route path="/topicscomp/" component={Topics}></Route>
            <Route path="/statecomp/:state" component={StateComp}></Route>
        </div>
    )
}
ReactDom.render(
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>, document.getElementById('root'));