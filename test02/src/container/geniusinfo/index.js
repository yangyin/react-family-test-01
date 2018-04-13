import React,{Component} from 'react'
import { NavBar ,List,InputItem,TextareaItem,Button,WhiteSpace  } from 'antd-mobile';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import AvatarSelector from '../../component/avatar-selector'
import { update } from '../../redux/user.redux'

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar:'',
            title:'',
            desc:''
        }

        this.saveClick = this.saveClick.bind(this)
    }
    avatarClick(v) {
        this.setState({
            avatar:v.text
        })
        
    }
    handleChange(key,v) {
        this.setState({
            [key]:v
        })
    }
    saveClick() {
        console.log('****boss avatar',this.state)
        this.props.update(this.state)
    }
    render() {
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <div>
                {redirectTo &&  redirectTo !== path?<Redirect to={this.props.redirectTo} /> : null}
                <NavBar  mode="dark">BOSS信息完善</NavBar>
                {this.props.msg?<p className="error-msg">{this.props.msg}</p> : null}
                <List>
                    <AvatarSelector avatar={v=>this.avatarClick(v)}></AvatarSelector>
                    <InputItem
                        onChange={v =>this.handleChange('title',v)}
                    >求职岗位</InputItem>
                    <TextareaItem
                        title="个人简介"
                        autoHeight
                        rows={3}
                        onChange={v =>this.handleChange('desc',v)}
                    ></TextareaItem>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type="primary" onClick={this.saveClick}>保存</Button>
                </List>
            </div>
        )
    }
}

export default GeniusInfo