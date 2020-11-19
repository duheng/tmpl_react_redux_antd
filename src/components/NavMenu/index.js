import React, { PureComponent } from "react"
import { Layout, Menu } from 'antd'
import { Icon } from '@ant-design/compatible';
const SubMenu = Menu.SubMenu;
const {  Sider } = Layout

export default class NavMenu extends PureComponent {
  state = {
   collapsed: false,
 };
  render() {
    return  (<Sider
       trigger={null}
       collapsible
       collapsed={this.props.collapsed}
     >
       <div className="logo" />
       <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
         <Menu.Item key="1">
           <Icon type="user" />
           <span>nav 1</span>
         </Menu.Item>
         <Menu.Item key="2">
           <Icon type="video-camera" />
           <span>nav 2</span>
         </Menu.Item>
         <Menu.Item key="3">
           <Icon type="upload" />
           <span>nav 3</span>
         </Menu.Item>
         <SubMenu
             key="sub1"
            title={<span><Icon type="user" /><span>User</span></span>}
          >
            <Menu.Item key="4">Tom</Menu.Item>
            <Menu.Item key="5">Bill</Menu.Item>
            <Menu.Item key="6">Alex</Menu.Item>
          </SubMenu>
       </Menu>
     </Sider>)
  }
}
