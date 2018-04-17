import React,{Component} from 'react'
import { connect } from 'react-redux'

import { getuserlist } from '../../../redux/chatuser.redux'
import CardList from '../../../component/card-list/cardlist'

@connect(
    state=>state.chatuser,
    { getuserlist }
)
class Boss extends Component {

    componentDidMount() {
        this.props.getuserlist('boss')
    }
    render() {
        return (
            <CardList userList={this.props.userList} />
        )
    }
}

export default Boss