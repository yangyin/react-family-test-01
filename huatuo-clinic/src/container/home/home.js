import React,{ Component } from 'react'
import { BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import styles from './home.css'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
import { systemMenuAction,systemMenuSuccess } from '../../redux/actions/home.action'

import Menus from '../../components/menu/menu'


const { SubMenu } = Menu
const { Header, Content, Sider,Footer  } = Layout





const test = ({match}) => {
    console.log(match)
    return (
        <div>test page</div>
    )
}

const home = ({match}) => {
    console.log(match)
    return (
        <div>home page</div>
    )
}


@connect(
    state=>state.home,
    { systemMenuAction,systemMenuSuccess }
)
class Home extends Component {

    componentDidMount() {
        // console.log('sys menu mout:  ',this.props)
        const sys_menu = localStorage.getItem('ht_sys_menu')
        sys_menu ? this.props.systemMenuSuccess(JSON.parse(sys_menu)) : this.props.systemMenuAction() 
    }
    render() {
        // console.log(this.props)
        const topBar = {backgroundColor:'#2081c7',height:'32px',color:'#fff',lineHeight:'32px',padding:'0 100px'}
        const path = this.props.match.path
        return (
            <div>
                {/* <p>home page</p> */ console.log(this.props)}
                <div style={topBar}>header</div>
                <Layout>
                    <Header className="header" style={{backgroundColor:"#fff"}}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item><img src={require("../../img/banner-1.png")} style={{height:'50px'}} alt="logo"/><label style={{fontSize:'20px',color:'#2081c7',fontWeight:'700'}}>云诊所</label></Menu.Item>
                            {
                                this.props.sysMenu.map(v => (
                                    v.sortNo !== 1 ?<Menu.Item key={v.sortNo}>{v.name}</Menu.Item>:null
                                ))
                                
                            }
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Layout style={{ background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                <Menus />
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                Content
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
                <Switch>
                    {/* <Route path={`${path}`} exact component={home}></Route> */}
                    <Route path={`${path}/test`} component={test}></Route>
                </Switch>
            </div>
        )
    }
}

export default Home