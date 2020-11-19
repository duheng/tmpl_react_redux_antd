import React, { Component } from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'


import { Icon } from '@ant-design/compatible';
import { NavMenuTop } from "components"
import style from "./style"

const { Header, Sider, Content ,Footer} = Layout

export default class LayOutLine extends Component {
  state = {
   collapsed: false,
 };

 toggle = () => {
   this.setState({
     collapsed: !this.state.collapsed,
   });
 }

 render() {
    const { approutes } = this.props
   return (<Layout className="layout">
    <Header style={{background:'#FFFFFF'}}>
      <NavMenuTop />
    </Header>
    <Content style={{
           margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
         }}
         >
          {approutes}
         </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
   );
 }
}
