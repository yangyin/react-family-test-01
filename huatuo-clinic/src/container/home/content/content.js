import React,{ Component,PureComponent } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import Register from './outpatient/register/register'
import Charge from './dispensingfees/charge'

const ChargeComponent = Loadable({
    loader: () => import('./dispensingfees/charge'),
    loading() {
        return <div>Loading...</div>
    }
})

// const RegisterComponent = Loadable({
//     loader: () => import('./register/register'),
//     loading() {
//         return <div>Loading...</div>
//     }
// })


@withRouter
class Contents extends PureComponent {

    componentDidUpdate(nextProps) {
        // console.log('next props:',nextProps)
        const keys = nextProps.keys
        switch(keys) {
            case 'ROLE_CS_MZ_MENU':
                console.log(11111)
                // this.props.history.push(nextProps.location.pathname)
            break
            default:

        }
    }
    // shouldComponentUpdate(nextProps) {
    //     console.log('should nex props: ',nextProps)
    //     return true
    //    return this.props.location.pathname == nextProps.location.pathname ? false: true
    // }

    render() {
        const path = this.props.match.path
        // console.log(path)
        
        return (
            <div>
                <Switch>
                    <Route path={`${path}/register`} component={Register}/>
                    <Route path={`${path}/dispensingfees/charge`} component={ChargeComponent} />
                    {/* <Redirect to={`${path}/register`} /> */}
                </Switch>
            </div>
        )
    }
}

export default Contents