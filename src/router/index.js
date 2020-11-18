import React, { Fragment } from 'react';
import { Route, Switch, Redirect} from "react-router-dom"
import routeConfig from './route.config'

const formatRouter = (config,routes = []) => {
   config.map(item=>{
      if(item.children && item.children.length > 0) {
        let __children = item.children
        __children.map(child=>{
          child.path = `${item.path}${child.path}`
        })
        formatRouter(__children,routes)
      }
      const { children, ...otherItem } = item
      routes.push(<Route key={item.path}  {...otherItem}  />)
    })
    return routes
}
export default  () => {
  console.log('aaaaa---', formatRouter(routeConfig))
    return (
      <Switch>
        {
          formatRouter(routeConfig)
        }
      </Switch>
    )
}