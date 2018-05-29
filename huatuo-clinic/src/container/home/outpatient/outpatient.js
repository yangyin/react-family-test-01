import React,{ Component,PureComponent } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'


class Outpatient extends  PureComponent {
    constructor(props) {
        super(props)
    }

    render() {
        const path = this.props.match.path
        return (
            <div>
                <Switch>
                    <Route path={`${path}`} exact component={RegisterForm} />
                    <Route path={`${path}/registerRecord`} component={RegisterRecord} />
                </Switch>
                {/* <InputOption mode="register aaaa " /> */}
            </div>
        )
    }
}

export default Outpatient