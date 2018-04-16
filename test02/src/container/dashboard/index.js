import React from 'react'
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux'

import NavLink from './navlink/navlink'



function Boss() {
    return <div>BOss</div>
}

@connect(
    state=>state
)
class DashBoard extends React.Component {

    render() {

        const user = this.props.user
        const { pathname } = this.props.location
        const data = [
            {
                path:'/boss',
                text:'牛人',
                icon:'boss',
                title:'牛人列表',
                // component:Boss,
                hide:user.type =='boss'
            },
            {
                path:'/genius',
                text:'boss',
                icon:'job',
                title:'BOSS列表',
                // component:Genius,
                hide:user.type =='genius'
            },
            {
                path:'/msg',
                text:'msg',
                icon:'msg',
                title:'消息',
                // component:Boss
            },
            {
                path:'/me',
                text:'me',
                icon:'user',
                title:'个人中心',
                // component:Boss
            },
        ]
        return (
            <div>
                <NavBar className="fixed-header" mode="dark">{data.find(v=> v.path == pathname).title}</NavBar>
                <div>context</div>
                <NavLink data={data}></NavLink>
            </div>
        )
    }
}

export default DashBoard