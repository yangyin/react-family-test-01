import React,{ Component } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'

import Menus from '../../../../components/menu/menu'

import RegisterForm from './register-form/register-form'
import RegisterRecord from './register-record/register-record'

class Register extends Component {
    constructor(props) {
        super(props)
        this.watchChildrenKey = this.watchChildrenKey.bind(this)
    }

    watchChildrenKey(key) {
        console.log('register key  ',key)
    }
    render() {
        const path = this.props.match.path
        const data =[{code:'1',name:'挂号'},{code:'2',name:'挂号记录'},{code:'3',name:'预约挂号'},{code:'4',name:'外院挂号记录'}]
        const menusStyle = { height: '100%',lineHeight: '30px',border:'none',width:'40vw' }
        return (
            <div>
                <Menus 
                    mode="horizontal" 
                    navSelectKey={this.watchChildrenKey}
                    style={menusStyle}
                    theme="dark"
                    data={data}
                />
                <Switch>
                    <Route path={`${path}`} exact component = {RegisterForm} />
                    <Route path={`${path}/registerRecord`} component={RegisterRecord} />
                </Switch>
                {/* <InputOption mode="register aaaa " /> */}
            </div>
        )
    }
}

export default Register