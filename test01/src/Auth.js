import React from 'react'
import { connect } from 'react-redux'
import { Route,Link,Redirect } from 'react-router-dom'

import { login ,getUsersData} from './Auth.redux'

@connect(
    state=>state.auth,
    {login,getUsersData}
)
class Auth extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        //发送AJAX的周期
        this.props.getUsersData()
    }
    render() {
        return (
            <div>
                <h2>我的名字是：{this.props.user}</h2>
                {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                <h2>没有权限，需要登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth