import React,{ Component } from 'react'
import { Link } from 'react-router-dom'

export default class Yi extends Component {
    render() {
        return (
            <Link to={{pathname:'/er'}}>我是一营，我很懒，我需要懒加载！</Link>
        )
    }
}


