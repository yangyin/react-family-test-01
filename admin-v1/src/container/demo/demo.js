import React, { Component } from 'react';
import { Row, Col, Button, Icon } from 'antd';

import NavList from 'src/components/nav-list';

import menuList from 'src/config/menuConfig';

class Demo extends Component {
    state = {
        collapsed: false,
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <div className="App">
                <Row>
                    <Col  xs={20} sm={16} md={12} lg={8} xl={4} style={{ minWidth: '256px',maxWidth:'256px' }}>
                        <NavList data={menuList}
                            mode="inline"
                            theme="dark"
                            collapsed={this.state.collapsed}
                        />
                    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Demo;
