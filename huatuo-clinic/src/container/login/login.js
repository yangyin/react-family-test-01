
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button } from 'antd'

import { loginAction } from '../../redux/actions/user.action'

@connect(
    state=>state
)
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name:null,
            pwd:null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onChange(key,e) {
        // console.log(e.target.value)
        this.setState({
            [key]:e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        // console.log(this.props)
        this.props.dispatch(loginAction(this.state))
    }
    render() {
        const FormItem = Form.Item
        console.log(this.props)
        return (
            <div>
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <FormItem>
                        <Input 
                            placeholder="用户名"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            value={this.state.name} 
                            onChange={(e) => this.onChange('name',e)}
                        />
                    </FormItem>
                    <FormItem>
                    <Input 
                        placeholder="密码"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value={this.state.pwd}
                        onChange={(e) => this.onChange('pwd',e)}
                    />
                </FormItem>
                <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                >登录</Button>
                </FormItem>
                </Form>
            </div>
        )
    }
}

export default Login