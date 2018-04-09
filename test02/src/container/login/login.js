import React from 'react'
import Logo from '../../component/logo/logo'
import { List,InputItem,Button,WhiteSpace ,WingBlank } from 'antd-mobile'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
    }

    register() {
        this.props.history.push('/register')
    }

    render() {
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">登录</Button>
                <WhiteSpace />
                <Button type="warning" onClick={this.register}>注册</Button>
            </div>
        )
    }
}


export default Login