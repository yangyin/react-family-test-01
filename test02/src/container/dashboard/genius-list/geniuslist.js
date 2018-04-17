import React,{Component} from 'react'
import { connect } from 'react-redux'

import { getuserlist } from '../../../redux/chatuser.redux'
import CardList from '../../../component/card-list/cardlist'

@connect(
    state=>state.chatuser,
    { getuserlist }
)
class Genius extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getuserlist('genius')
    }
    render() {
        return <CardList userList={this.props.userList} />
    }
}

export default Genius