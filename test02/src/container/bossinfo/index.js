import React,{Component} from 'react'
import { NavBar ,List,InputItem,TextareaItem,Button,WhiteSpace  } from 'antd-mobile';

import AvatarSelector from '../../component/avatar-selector'

class Bossinfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar:''
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
    }
    render() {
        return (
            <div>
                <NavBar  mode="dark">BOSS信息完善</NavBar>
                <List>
                    <AvatarSelector avatar={v=>this.avatarClick(v)}></AvatarSelector>
                    <InputItem
                        onChange={v =>this.handleChange('title',v)}
                    >招聘职位</InputItem>
                    <InputItem
                        onChange={v =>this.handleChange('company',v)}
                    >公司名称</InputItem>
                    <InputItem
                        onChange={v =>this.handleChange('money',v)}
                    >职位薪资</InputItem>
                    <TextareaItem
                        title="职位简介"
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

export default Bossinfo