import React,{ Component } from 'react'

import { Menu } from 'antd'

class Menus extends Component {
    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    style={{ height: '100%' }}
                >
                    <Menu.Item key="0" disabled>菜单导航</Menu.Item>
                    <Menu.Item key="1">患者挂号</Menu.Item>
                    <Menu.Item key="2">患者就诊</Menu.Item>
                    <Menu.Item key="3">模板管理</Menu.Item>
                </Menu>
            </div>
        )
    }
}


export default Menus