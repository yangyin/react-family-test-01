import React,{ Component } from 'react' 
import { connect } from 'react-redux'
import cookies from 'browser-cookies'
import { Redirect } from 'react-router-dom'

import { Result, WhiteSpace ,List,Button ,Modal} from 'antd-mobile';

import {logoutsubmit} from '../../../redux/user.redux'

@connect(
    state=>state.user,
    {logoutsubmit}
)
class User extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout() {
        const alert = Modal.alert;
        alert('Delete', 'Are you sure???', [
            { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
            { text: 'OK', onPress: () => {
                cookies.erase('userid')
                this.props.logoutsubmit()
            } },
        ]);
        
    }

    render() {
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return (
            props.user ? 
                <div>
                    
                    <Result
                        img={ <img src={ require(`../../../component/img/${props.avatar}.png`) } style={{width:50}} alt='' /> }
                        title={props.user}
                        message={ props.company ? props.company:null }
                    />
                    
                    <List renderHeader={() => '简介'}>
                        <Item>
                            {props.desc.split('\n').map((v,i) =>(
                                <Brief key={i}>
                                    {v}
                                </Brief>
                            ))}
                        </Item>
                    </List>
                    <WhiteSpace />
                    <WhiteSpace />
                    <WhiteSpace />
                    <Button type="warning" onClick={this.logout}>退出登录</Button>
                </div> : <Redirect to={props.redirectTo} />
        )
    }
}


export default User