import React from 'react'
import axios from 'axios'
import {withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component {
    componentDidMount() {
        // console.log(this.props)
        const list = ['/login','register']
        const currentRouter = this.props.location.pathname
        if(list.indexOf(currentRouter) > -1) {
            return null;
        }
        axios.get('/user/info').then(res => {
            console.log('******',res)
            if(res.status === 200) {
                if(res.data.code === 0) {
                    //有登陆信息
                } else {
                    //没有登录信息
                    this.props.history.push('/login')
                }
            }
        })
    }
    render() {
        return null;
    }
}

export default AuthRoute