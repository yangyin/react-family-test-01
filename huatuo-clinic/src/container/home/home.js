import React,{ Component } from 'react'
// import { Route, Redirect, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { Route, Redirect, Switch,withRouter,Link } from 'react-router-dom'
import Loadable from 'react-loadable'

// import styles from './home.css'
import { Layout, Menu } from 'antd'
import { systemMenuAction,systemMenuSuccess } from '../../redux/actions/home.action'

import imgs from './banner-1.png'
import Menus from '../../components/menu/menu'
import Outpatient from './outpatient/outpatient'
// import Register from './outpatient/register/register'
// import Contents from './content/content'
// import Charge from './dispensingfees/charge'


// const { SubMenu } = Menu
const { Header, Content, Sider,Footer  } = Layout


const ChargeComponent = Loadable({
    loader: () => import('./dispensingfees/charge'),
    loading() {
        return <div>Loading...</div>
    }
})


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
        console.log('点击home 顶层栏目，触发')
        this.setState({
            selectedKeys:e.key
        })
    }

    watchChildrenKey(key) {
        switch(key[0]) {
            case 'ROLE_SS_XGRYXX_MENU':
                return this.props.history.push('/home')
            case 'ROLE_SS_XKJZ_MENU':
                return this.props.history.push('/home/visit')
            default:
            
        }
        console.log('home key  ',key)
        // console.log(this)
    }

    render() {
        const topBar = {backgroundColor:'#2081c7',height:'32px',color:'#fff',lineHeight:'32px',padding:'0 100px'}
        const path = this.props.match.path
        const menusStyle = { height: '100%',lineHeight: '64px' }
        console.log('home state:',this.state)
        return (
            // <div>
            //     home page
            //     <img src={imgs} style={{height:'50px'}} alt="logo"/>
            // </div>
            <div>
                <div style={topBar}>
                    header
                </div>
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
                                                link = <Link to="/home">{v.name}</Link>
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
                                        return (<Menu.Item key={v.code} data={v.code}>
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
                            <div style={{ padding: '0 24px', minHeight: 280 }}>
                                <Switch>
                                    
                                    <Route path='/home/dispensingfees/charge' component={ChargeComponent} />
                                    <Route path={`${path}`}  component={Outpatient}/>
                                    {/* <Redirect to={`${path}/register`} /> */}
                                </Switch>
                                {/* <Contents  /> */}
                            </div>
                        </Layout>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </div>
        )
    }
}

export default Home