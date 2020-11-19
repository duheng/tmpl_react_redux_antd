import React, { Component } from "react"
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { Icon } from '@ant-design/compatible';
import { NavMenu } from "components"
import style from "./style"

const { Header, Sider, Content } = Layout

export default class LayOut extends Component {
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
   return (
     <Layout>
          <NavMenu collapsed={this.state.collapsed}/>
       <Layout>
         <Header style={{ background: '#fff', padding: 0 }}>
           <Icon
             className="trigger"
             type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
             onClick={this.toggle}
           />
         </Header>
         <Content style={{
           margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
         }}
         >
          {approutes}
         </Content>
       </Layout>
     </Layout>
   );
 }
}
