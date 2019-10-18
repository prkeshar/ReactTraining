import React from 'react'
import ReactDom from 'react-dom'
import {Link, Route, BrowserRouter} from 'react-router-dom'
import {Topics} from './StateComponent/Topics'
import {StateComp} from './StateComponent/index'
import {LoggedSuccessful} from './StateComponent/LoggedSuccessful'
import {Signin} from './StateComponent/Signin'
import {RestComp} from './RestComp/RestComp'
import './index.scss'
import { RestCompUsingFunction } from './RestComp/RestCompUsingFunction'
import { CarbonComp } from './CarbonComp/CarbonComp'

let AppRouter = () => {
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                <li><Link to="/topicscomp">Topics</Link></li>
                <li><Link to="/statecomp/UP">State UP</Link></li>
                <li><Link to="/statecomp/MP">State MP</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/rest">Rest</Link></li>
                <li><Link to="/restfunc">Rest using function</Link></li>
                <li><Link to="/carbon">Carbon comp</Link></li>
            </ul>
            <Route path="/topicscomp/" component={Topics}></Route>
            <Route path="/statecomp/:state" component={StateComp}></Route>
            <Route path="/loginsuccess/" component={LoggedSuccessful}></Route>
            <Route path="/login/" component={Signin}></Route>
            <Route path="/rest/" component={RestComp}></Route>
            <Route path="/restfunc/" component={RestCompUsingFunction}></Route>
            <Route path="/carbon/" component={CarbonComp}></Route>
        </div>
    )
}
ReactDom.render(
    <BrowserRouter basename="/sample">
        <AppRouter />
    </BrowserRouter>, document.getElementById('root'));