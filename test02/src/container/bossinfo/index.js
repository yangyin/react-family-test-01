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
    saveClick() {
        console.log('****boss avatar',this.state)
    }
    render() {
        return (
            <div>
                <NavBar  mode="dark">BOSS信息完善</NavBar>
                <List>
                    <AvatarSelector avatar={v=>this.avatarClick(v)}></AvatarSelector>
                    <InputItem>招聘职位</InputItem>
                    <InputItem>公司名称</InputItem>
                    <InputItem>职位薪资</InputItem>
                    <TextareaItem
                        title="职位简介"
                        autoHeight
                        rows={3}
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