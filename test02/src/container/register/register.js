import React from 'react'
import { connect } from 'react-redux'
import { Redirect} from 'react-router-dom'

import { List,InputItem,Radio,Button,WhiteSpace } from 'antd-mobile'

import Logo from '../../component/logo/logo'
import { register } from '../../redux/user.redux'


@connect(
    state=>state.user,
    {register}
)
class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user:'',
            pwd:'',
            repeatPwd:'',
            type:'genius'
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(name,value) {
        this.setState({
            [name]:value
        })
    }
    handleSubmit() {
        console.log(this.props)
        this.props.register(this.state)
        
    }

    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                {this.props.redirectTo ?<Redirect to={this.props.redirectTo} /> : null}
                <Logo></Logo>
                {this.props.msg?<p>{this.props.msg}</p> : null}
                <List>
                    <InputItem onChange={v => this.handleChange('user',v)}>用户名</InputItem>
                    <InputItem onChange={v => this.handleChange('pwd',v)}>密码</InputItem>
                    <InputItem onChange={v => this.handleChange('repeatPwd',v)}>确认密码</InputItem>
                </List>
                <WhiteSpace />
                <List>
                    <RadioItem 
                        checked={this.state.type === 'genius'}
                        onChange={v => this.handleChange('type','genius')}
                    >牛人</RadioItem>
                    <RadioItem 
                        checked={this.state.type === 'boss'}
                        onChange={v => this.handleChange('type','boss')}
                    >BOSS</RadioItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </div>
        )
    }
}


export default Register