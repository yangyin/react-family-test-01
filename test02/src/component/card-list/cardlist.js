import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Card,WingBlank ,WhiteSpace  } from 'antd-mobile'

@withRouter
class CardList extends Component {
    constructor(props) {
        super(props)
        // this.handleCard = this.handleCard.bind(this)
    }
    handleCard(v) {
        console.log(this.props)
        console.log(v)
        this.props.history.push(`/chat/${v._id}`)
    }
    render() {
        const Header = Card.Header
        const Body = Card.Body
        const Footer  = Card.Footer 
        const { pathname } = this.props.location
        const data = this.props.userList.filter(v => v.avatar)
        return (
            <WingBlank>
                <WhiteSpace />
                    {
                        data.map(v=>(
                            <div key={v._id}>
                                <Card onClick={_ =>this.handleCard(v)}>
                                    <Header 
                                        title={v.title}
                                        thumb={require(`../img/${v.avatar}.png`)}
                                        extra={v.company}
                                    />
                                    <Body>
                                        {v.desc.split('\n').map((d,i) => (
                                            <div key={i}>{d}</div>
                                        ))}
                                        
                                    </Body>
                                    {
                                        pathname !== '/boss' ? 
                                        <Footer content={`薪资：${v.money}`} extra={`发布者：${v.user}`} /> :
                                        <Footer extra={`求职者：${v.user}`}/>
                                    }
                                </Card>
                                <WhiteSpace />
                            </div>
                        ))
                    }
            </WingBlank>
        )
    }
}


export default CardList