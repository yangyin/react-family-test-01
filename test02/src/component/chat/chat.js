import React,{Component} from 'react'
import { List,InputItem,Button , NavBar, Icon} from 'antd-mobile'
import { connect } from 'react-redux'

import { getMsgList ,postMsg,recvMsg } from '../../redux/chat.redux'
import { Item } from 'antd-mobile/lib/tab-bar';

@connect(
    state=>state,
    {getMsgList , postMsg , recvMsg}
)
class Chat extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        this.state = {
            toid:this.props.match.params.user,
            text:'',
            msg:[]
        }
    }
    componentDidMount() {
        this.props.getMsgList()   
        this.props.recvMsg() 
    }
    handleChange(v) {
        this.setState({
            text:v
        })
    }
    handleSubmit() {
        // console.log(this.props.user)
        this.props.postMsg({
            content:this.state.text,
            from:this.props.user._id,
            to:this.state.toid
        })
        this.setState({
            text:''
        })
    }
    render() {
        const Item = List.Item
        const { chatmsg } = this.props.chat
        const emoji = '😄 😃 😀 😊 😉 😍 😘 😚 😗 😙 😜 😝 😛 😳 😁 😔 😌 😒 😞 😣 😢 😂 😭 😪 😥 😰 😅 😓 😩 😫 😨 😱 😠 😡 😤 😖 😆 😋 😷 😎 😴 😵 😲 😟 😦 😧 😈 👿 😮 😬 😐 😕 😯 😶 😇 😏 😑 👲 👳 👮 👷 💂 👶 👦 👧 👨 👩 👴 👵 👱 👼 👸 💛 💙 💜 💚 ❤ 💔 💗 💓 💕 💖 💞 💘 💌 💋 💍 💎 👤 👥 💬 👣 💭'
        return (
            <div id="chat">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >NavBar</NavBar>
                <div>
                    {
                        chatmsg.map(v => (
                            this.state.toid == v.from ? 
                                (<List key={v._id}>
                                    <Item>对方发来的：{v.content}</Item>
                                </List>)
                                 :
                                (
                                    <List key={v._id}>
                                        <Item extra={<span>我方：{v.content}</span>}> </Item>
                                    </List>
                                )
                        ))
                    }
                </div>
                <List className="fixed-footer">
                    <InputItem
                        placeholder='请输入'
                        value={this.state.text}
                        onChange={(v)=> this.handleChange(v)}
                        extra={<Button type="ghost" inline size="small" onClick={this.handleSubmit}>发送</Button>}
                    ></InputItem>
                </List>
            </div>
        )
    }
}

export default Chat