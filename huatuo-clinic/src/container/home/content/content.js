import React,{ Component } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'

import Register from './register/register'

@withRouter
class Contents extends Component {
    render() {
        const path = this.props.match.path
        return (
            <div>
                <Switch>
                    <Route path={`${path}`} component = {Register}/>
                </Switch>
            </div>
        )
    }
}

export default Contents