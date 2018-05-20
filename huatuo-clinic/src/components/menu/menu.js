import React,{ Component,PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'antd'

class Menus extends Component {
    // static propTypes = {
    //    data:PropTypes.array.isRequired,
    //    mode:PropTypes.string.isRequired
    // }
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys:this.props.data.length>0 ? [this.props.data[0].code] :null
        }
        this.handleMenu = this.handleMenu.bind(this)
    }

    componentWillReceiveProps(nextProps,nextState) {
        // console.log('next props: ',nextProps)
        // console.log('next state: ',nextState)
        if(nextProps.data.length >0&&nextProps.data[0].code != this.state.selectedKeys) {
            this.setState({
                selectedKeys:[nextProps.data[0].code]
            })
        }
    }

    componentDidUpdate() {
        // console.log(this.state.selectedKeys)
        this.props.navSelectKey(this.state.selectedKeys)
    }

    handleMenu(e) {
        // console.log(e)
        // console.log('state: ' ,this.state.selectedKeys)
        if(e.key != this.state.selectedKeys) {
            this.setState({
                selectedKeys:[e.key]
            })
        }
    }

    render() {
        return (
            <div>

                <Menu
                    style={{ height: '100%',lineHeight: '64px' }}
                    mode={this.props.mode}
                    defaultSelectedKeys={this.state.selectedKeys}
                    selectedKeys={this.state.selectedKeys}
                    onClick={this.handleMenu}
                >
                    {
                        // console.log('code: ',this.props.data[0].code)
                    }
                    { this.props.mode == 'inline' ?<Menu.Item key="0" selectable={false}>菜单导航</Menu.Item>:null}
                    {
                       
                        this.props.data ? this.props.data.map(v => (
                            <Menu.Item key={v.code}>{v.name}</Menu.Item>
                        )) : null
                    }
                </Menu>
            </div>
        )
    }
}

export default Menus