import React from 'react'
import { List,InputItem,Radio,Button,WhiteSpace ,WingBlank } from 'antd-mobile'

import Logo from '../../component/logo/logo'

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type:'genius'
        }
    }
    render() {
        const RadioItem = Radio.RadioItem;
        return (
            <div>
                <Logo></Logo>
                <List>
                    <InputItem>用户名</InputItem>
                    <InputItem>密码</InputItem>
                    <InputItem>确认密码</InputItem>
                </List>
                <WhiteSpace />
                <List>
                    <RadioItem checked={this.state.type == 'genius'}>牛人</RadioItem>
                    <RadioItem checked={this.state.type == 'boss'}>BOSS</RadioItem>
                </List>
                <WhiteSpace />
                <WhiteSpace />
                <WhiteSpace />
                <Button type="primary">注册</Button>
            </div>
        )
    }
}


export default Register