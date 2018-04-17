import React from 'react'
import Logo from '../../component/logo/logo'
import { List,InputItem,Button,WhiteSpace } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { login } from '../../redux/user.redux'

@connect(
    state=>state.user,
    {login}
)
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.register = this.register.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            user:'',
            pwd:''
        }
    }

    register() {
        this.props.history.push('/register')
    }
    handleChange(name,value) {
        this.setState({
            [name]:value
        })
    }
    handleSubmit() {
        // console.log(this.props)
        this.props.login(this.state)  
    }
    render() {
        return (
            <div>
                {this.props.redirectTo ?<Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p> : null}
                <List>
                    <InputItem
                        onChange={v => this.handleChange('user',v)}
                    >用户名</InputItem>
                    <InputItem
                        onChange={v => this.handleChange('pwd',v)}
                    >密码</InputItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                <WhiteSpace />
                <Button type="warning" onClick={this.register}>注册</Button>
            </div>
        )
    }
}


export default Login