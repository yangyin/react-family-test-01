import React,{ Component } from 'react' 
import { connect } from 'react-redux'

import { Result, Icon, WhiteSpace } from 'antd-mobile';

@connect(
    state=>state
)
class User extends Component {

    render() {
        const { user } = this.props
        return (
            <div>
                user
                {console.log(user)}
            </div>
        )
    }
}


export default User