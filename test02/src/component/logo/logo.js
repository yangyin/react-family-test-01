import React from 'react'
import './logo.css'
import logoImg from './logo.svg'

class Logo extends React.Component {
    render() {
        return (<div className="logo">
            <img src={logoImg} alt="logo" />
        </div>)
    }
}


export default Logo