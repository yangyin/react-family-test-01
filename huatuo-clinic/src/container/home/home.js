import React,{ Component } from 'react'
// import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { Route, Redirect, Switch,withRouter,Link } from 'react-router-dom'

// import styles from './home.css'
import { Layout, Menu } from 'antd'
import { systemMenuAction,systemMenuSuccess } from '../../redux/actions/home.action'

import imgs from './banner-1.png'

import Menus from '../../components/menu/menu'
import Contents from './content/content'

// import Register from './content/register/register'
import Charge from './content/dispensingfees/charge'


// const { SubMenu } = Menu
const { Header, Content, Sider,Footer  } = Layout





// const test = ({match}) => {
//     console.log(match)
//     return (
//         <div>test page</div>
//     )
// }

// const home = ({match}) => {
//     console.log(match)
//     return (
//         <div>home page</div>
//     )
// }


@connect(
    state=>state.home,
    { systemMenuAction,systemMenuSuccess }
)
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys:'ROLE_CS_MZ_MENU'
        }
        this.handleSusMenu = this.handleSusMenu.bind(this)
        this.watchChildrenKey = this.watchChildrenKey.bind(this)
    }
    componentDidMount() {
        // console.log('sys menu mout:  ',this.props)
        const sys_menu = localStorage.getItem('ht_sys_menu')
        sys_menu ? this.props.systemMenuSuccess(JSON.parse(sys_menu)) : this.props.systemMenuAction() 
    }
    handleSusMenu(e) {
        // console.log(e)
        this.setState({
            selectedKeys:e.key
        })
    }

    watchChildrenKey(key) {
        console.log('home key  ',key)
        // console.log(this)
    }

    render() {
        const topBar = {backgroundColor:'#2081c7',height:'32px',color:'#fff',lineHeight:'32px',padding:'0 100px'}
        const path = this.props.match.path
        const menusStyle = { height: '100%',lineHeight: '64px' }
        return (
            <div>
                <div style={topBar}>header</div>
                <Layout>
                    <Header className="header" style={{backgroundColor:"#fff"}}>
                    
                        {this.props.sysMenu.length>0 ? (
                            <Menu
                                style={{ height: '100%',lineHeight: '64px' }}
                                mode="horizontal"
                                defaultSelectedKeys={["ROLE_CS_MZ_MENU"]}
                                selectedKeys={[this.state.selectedKeys]}
                                onClick={this.handleSusMenu}
                            >
                                <Menu.Item><img src={imgs} style={{height:'50px'}} alt="logo"/><label style={{fontSize:'20px',color:'#2081c7',fontWeight:'700'}}>云诊所</label></Menu.Item>
                                {
                                    this.props.sysMenu.filter(v=>v.resId != '01-ytsz').map(v => {
                                        // console.log(v.code)
                                        let link = null
                                        switch(v.code) {
                                            case 'ROLE_CS_MZ_MENU':
                                                link = <Link to="/home/register">{v.name}</Link>
                                            break
                                            case 'ROLE_SS_SFFY_MENU':
                                                link = <Link to="/home/dispensingfees/charge">{v.name}</Link>
                                            break
                                            case 'ROLE_SS_YPGL_MENU':
                                                link = <Link to="">{v.name}</Link>
                                            break
                                            case 'ROLE_SS_SJTJ_MENU':
                                                link = <Link to="">{v.name}</Link>
                                            break
                                        }
                                        return (<Menu.Item key={v.code}>
                                                    {link}
                                                </Menu.Item>)
                                    })
                                }
                            </Menu>
                        )  : null}
                    </Header>
                    <Content style={{ padding: '0 50px' ,marginTop:'10px'}}>
                        <Layout style={{ background: '#fff' }}>
                            <Sider width={200} style={{ background: '#fff' }}>
                                {
                                    this.props.sysMenu.length>0 ? 
                                        <Menus 
                                            mode="inline" 
                                            navSelectKey={this.watchChildrenKey}
                                            style={menusStyle}
                                            data={this.props.sysMenu.find(v=>v.code == this.state.selectedKeys).children}
                                        />: null
                                }
                                
                            </Sider>
                            <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                {/* <Switch>
                                    <Route path={`${path}/register`} component={Register}/>
                                    <Route path={`${path}/dispensingfees/charge`} component={Charge} />
                                    <Redirect to={`${path}/register`} />
                                </Switch> */}
                                <Contents  />
                            </Content>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
                {/* <Switch>
                    <Route path={`${path}`} exact component={home}></Route>
                    <Route path={`${path}/test`} component={test}></Route>
                </Switch> */}
            </div>
        )
    }
}

export default Home