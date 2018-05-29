import React,{ Component,PureComponent } from 'react'
import { Route, Redirect, Switch,withRouter } from 'react-router-dom'
import Loadable from 'react-loadable'

import Menus from '../../../../components/menu/menu'

import RegisterForm from './register-form/register-form'
import RegisterRecord from './register-record/register-record'



const RegisterRecordComponent = Loadable({
    loader: () => import('./register-record/register-record'),
    loading() {
        return <div>Loading...</div>
    }
})


class Register extends  PureComponent {
    constructor(props) {
        super(props)
        this.watchChildrenKey = this.watchChildrenKey.bind(this)
    }

    watchChildrenKey(key) {
       
        switch(key[0]) {
            case '1':
            break
            case '2':
            // console.log('register key  ',key[0])
                // this.props.history.push('registerRecord')
            break
            case '3':
            break
            case '4':
            break
            default:

        }
    }
    render() {
        const path = this.props.match.path
        console.log('register path: ',path)
        const data =[{code:'1',name:'挂号',path:'/home'},{code:'2',name:'挂号记录',path:'/home/register/registerRecord'},{code:'3',name:'预约挂号',path:'home/register'},{code:'4',name:'外院挂号记录',path:'home/register'}]
        const menusStyle = { height: '100%',lineHeight: '30px',border:'none',width:'40vw' }
        return (
            <div>
                <Menus 
                    mode="horizontal" 
                    navSelectKey={this.watchChildrenKey}
                    style={menusStyle}
                    theme="dark"
                    data={data}
                />
                <Switch>
                    <Route path={`${path}`} exact component={RegisterForm} />
                    <Route path={`${path}/register/registerRecord`} component={RegisterRecord} />
                    
                </Switch>
                {/* <InputOption mode="register aaaa " /> */}
            </div>
        )
    }
}

export default Register