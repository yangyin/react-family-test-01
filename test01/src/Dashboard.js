import React from 'react'
import { Route,Link,Redirect } from 'react-router-dom'
import App from './App';

import { connect } from 'react-redux'

import { logout, login } from './Auth.redux'

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
// class Test extends React.Component {
//     constructor(props) {
//         super(props)
//     }
    
//     render() {
//         console.log(this.props)
//         return <h2>测试组建</h2>
//     }
// }


@connect(
    state=>state.auth,
    {logout}
)
class Dashboard extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const match = this.props.match
        console.log(match)
        const app = <div>
                        {this.props.isAuth? <button onClick={this.props.logout}>注销</button> :null}
                        <ul>
                            <li><Link to={`${match.url}/`}>一营</Link></li>
                            <li><Link to={`${match.url}/erying`}>二营</Link></li>
                            <li><Link to={`${match.url}/qibinglian`}>骑兵连</Link></li>
                        </ul>
                        <Route path={`${match.url}`} exact component={App}></Route>
                        <Route path={`${match.url}/erying`} component={Erying}></Route>
                        <Route path={`${match.url}/qibinglian`} component={Qibinglian}></Route>
                        {/* <Route path='/:location'  component={Test}></Route> */}
                    </div>
        const redirectToLogin = <Redirect to='/login'></Redirect>
        return (
            this.props.isAuth ? app : redirectToLogin
        )
    }
}

export default Dashboard