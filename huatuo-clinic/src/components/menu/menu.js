import React,{ Component } from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'antd'



/** 参数说明
 *  mode: 菜单排列方向："horizontal" /“inline”
    navSelectKey： 返回外部调用方法
    style： 自定义样式
    data：菜单展示数据 包括2个字段 code=>返回外部字段,选中效果  name: 显示名称
    可选参数：
        theme:主题色  'dark' 'light':默认
*/

class Menus extends Component {
    static propTypes = {
       data:PropTypes.array.isRequired, 
       mode:PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
        this.state = {
            selectedKeys:this.props.data.length>0 ? [this.props.data[0].code] :null,
            theme:this.props.theme || 'light'
        }
        this.handleMenu = this.handleMenu.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.selectedKeys[0] != this.state.selectedKeys[0] ? true : false
    }

    componentWillReceiveProps(nextProps,nextState) {
        if(nextProps.data.length >0&&nextProps.data[0].code != this.state.selectedKeys) {
            this.setState({
                selectedKeys:[nextProps.data[0].code]
            })
        }
    }

    componentDidUpdate() {
        this.props.navSelectKey(this.state.selectedKeys)
    }

    handleMenu(e) {
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
                    style={this.props.style}
                    mode={this.props.mode}
                    defaultSelectedKeys={this.state.selectedKeys}
                    selectedKeys={this.state.selectedKeys}
                    theme={this.state.theme}
                    onClick={this.handleMenu}
                >
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