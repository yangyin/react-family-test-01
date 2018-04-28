import React,{Component} from 'react'
import { List,InputItem,Button , NavBar, Icon,Grid } from 'antd-mobile'
import { connect } from 'react-redux'

import { getMsgList ,postMsg,recvMsg } from '../../redux/chat.redux'
// import { Item } from 'antd-mobile/lib/tab-bar';
import {getChatId} from '../../util'

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
        if(!this.props.chat.chatmsg.length) {
            this.props.getMsgList()   
            this.props.recvMsg() 
        }
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'))
        }, 0);
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
        const { users } = this.props.chat
        const chatid = getChatId(this.props.user._id,this.state.toid)
        const chatmsg = this.props.chat.chatmsg.filter(v => v.chatid === chatid)
        
        const emoji = '😄 😃 😀 😊 😉 😍 😘 😚 😗 😙 😜 😝 😛 😳 😁 😔 😌 😒 😞 😣 😢 😂 😭 😪 😥 😰 😅 😓 😩 😫 😨 😱 😠 😡 😤 😖 😆 😋 😷 😎 😴 😵 😲 😟 😦 😧 😈 👿 😮 😬 😐 😕 😯 😶 😇 😏 😑 👲 👳 👮 👷 💂 👶 👦 👧 👨 👩 👴 👵 👱 👼 👸 💛 💙 💜 💚 ❤ 💔 💗 💓 💕 💖 💞 💘 💌 💋 💍 💎 👤 👥 💬 👣 💭'
                        .split(' ')
                        .map(v=>({text:v}))
        console.log(emoji)
        if(!users[this.state.toid]) {return null;}
        return (
            <div id="chat">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                >{users[this.state.toid].name}</NavBar>
                <div>
                    {
                        chatmsg.map(v => {
                            const avatar = require(`../img/${users[v.from].avatar}.png`)
                            return this.state.toid == v.from ? 
                                (<List key={v._id}>
                                    <Item
                                        thumb={avatar}
                                    >{v.content}</Item>
                                </List>)
                                 :
                                (
                                    <List key={v._id}>
                                        <Item className="chat-me" extra={<img src={avatar}/>}>{v.content}</Item>
                                    </List>
                                )
                        })
                    }
                </div>
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder='请输入'
                            value={this.state.text}
                            onChange={(v)=> this.handleChange(v)}
                            extra={
                                <div>
                                    <span>表情</span>
                                    <Button type="ghost" inline size="small" onClick={this.handleSubmit}>发送</Button>
                                </div>
                                
                            }
                        ></InputItem>
                    </List>
                    <Grid 
                        data={emoji}
                        columnNum={9}
                        carouselMaxRow={4}
                        isCarousel={true}
                    />
                </div>

            </div>
        )
    }
}

export default Chat