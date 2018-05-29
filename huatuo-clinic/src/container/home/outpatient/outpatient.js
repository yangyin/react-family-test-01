import React,{ Component,PureComponent } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import Register from './register/register'
import Visit from './visit/visit'



class Outpatient extends  PureComponent {

    render() {
        const path = this.props.match.path
        console.log('outpatient path: ',path)
        return (
            <div>
                <Switch>
                    <Route path={`${path}/visit`} exact component={Visit} />
                    <Route path={`${path}`} component={Register} />
                </Switch>
                {/* <InputOption mode="register aaaa " /> */}
            </div>
        )
    }
}

export default Outpatient