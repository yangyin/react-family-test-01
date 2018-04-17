import React from 'react'
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux'
import { Switch , Route} from 'react-router-dom'

import NavLink from './navlink/navlink'
import Boss from './boss-list/bosslist'
import Genius from './genius-list/geniuslist'
import User from './user/user'


function Msg() {
    return <div>Msg</div>
}


@connect(
    state=>state
)
class DashBoard extends React.Component {

    render() {

        const user = this.props.user
        // console.log(user)
        const { pathname } = this.props.location
        const data = [
            {
                path:'/boss',
                text:'求职',
                icon:'boss',
                title:'求职列表',
                component:Genius,
                hide:user.type ==='genius'
            },
            {
                path:'/genius',
                text:'公司',
                icon:'job',
                title:'公司列表',
                component:Boss,
                hide:user.type ==='boss'
            },
            {
                path:'/msg',
                text:'消息',
                icon:'msg',
                title:'消息列表',
                component:Msg
            },
            {
                path:'/me',
                text:'我',
                icon:'user',
                title:'个人中心',
                component:User
            },
        ]
        // console.log('&&&&&&',data)
        // console.log('pathname&&&&&&',pathname)
        return (
            <div>
                <NavBar className="fixed-header" mode="dark">{data.find(v=> v.path === pathname).title}</NavBar>
                <div style={{marginTop:45}}>
                    <Switch>
                        {data.map(v => (
                            <Route key={v.path} path={v.path} component={v.component}></Route>
                        ))}
                    </Switch>
                </div>
                <NavLink data={data}></NavLink>
            </div>
        )
    }
}

export default DashBoard