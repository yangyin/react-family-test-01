
import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Icon, Input, Button } from 'antd'

import { loginAction } from '../../redux/actions/user.action'

// import imgs from '../../img/login.png'

import './login.css'

@Form.create()
@connect(
    state=>state,
    {loginAction}
)
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values)
              this.props.loginAction(values)
            }
        })
    }

    render() {
        const FormItem = Form.Item
        const { getFieldDecorator } = this.props.form
        // console.log('login page',this.props)
        return (
            <div className="login">
                {this.props.user.baseUserInfo ?<Redirect to="/home" /> : null}
                {/* <img src={imgs}/> */}
                
                <Form className="login-form" onSubmit={this.handleSubmit}>
                    <h1>个体云登录</h1>
                    <FormItem>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input 
                                placeholder="用户名"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('pwd', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input 
                                placeholder="密码"
                                prefix={<Icon type="pwd" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            />
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
                    </FormItem>
                </Form>
                <p className="login-footer"> Copyright © 2016 huatuowy.com Inc. All rights reserved. 华佗在线 版权所有 </p>
            </div>
        )
    }
}

export default Login