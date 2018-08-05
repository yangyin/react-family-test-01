import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';


const SubMenu = Menu.SubMenu;

class NavList extends Component {

    constructor(props) {
        super(props);
    }


    renderItem(data) {
        console.log(data)
        if (!data) return;
        return data.map(item => {
            if (item.children && item.children.length > 0) {
                return <SubMenu key={item.key} title={<span><Icon type="appstore" /><span>{item.title}</span></span>}>
                    {this.renderItem(item.children)}
                </SubMenu>
            } else {
                return <Menu.Item key={item.key}>
                    <Icon type="desktop" />
                    <span>{item.title}</span>
                </Menu.Item>
            }
        })
    }



    render() {
        const { data, mode, theme } = this.props;
        return (
            <Menu
                mode={mode}
                inlineCollapsed={this.props.collapsed}
                theme={theme}>
                {this.renderItem(data)}
            </Menu>
        );
    }
}

export default NavList;
