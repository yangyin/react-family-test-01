import React,{Component} from 'react'
import { List,InputItem,Button } from 'antd-mobile'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            text:'',
            msg:[]
        }
    }
    componentDidMount() {
        socket.on('recvmsg',(data) => {
            // console.log('revcmsg::',data)
            this.setState({
                msg:[...this.state.msg,data.text]
            })
        })      
    }
    handleChange(v) {
        this.setState({
            text:v
        })
    }
    handleSubmit() {
        // console.log(socket)
        socket.emit('sendMsg',{text:this.state.text})
        this.setState({
            text:''
        })
    }
    render() {
        return (
            <div id="chat">
                <div>
                    {this.state.msg.map((v,i)=>(
                        <p key={i}>{v}</p>
                    ))}
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