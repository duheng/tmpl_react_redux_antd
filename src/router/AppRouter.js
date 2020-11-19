import React, { Fragment } from 'react';
import { Route, Switch, Redirect} from "react-router-dom"
import { otherRoutes, appRoutes } from './route.config'
import { Home, About,Notfound } from '../pages';
import {  LayOut, LayOutLine } from "components"

const formatRouter = (config,routes = []) => {
   config.map(item=>{
      if(item.children && item.children.length > 0) {
        formatRouter(item.children,routes)
      }
      const { children, ...otherItem } = item
      routes.push(<Route key={item.path}   {...otherItem}  />)
    })
    return routes
}

const mainRouter = ({match}) => {
  let __routers = <Switch>
                     {formatRouter(appRoutes)}
                     <Redirect to="/" />
                  </Switch>
    return <div className="primary-layout">
               <LayOutLine approutes={__routers} />
            </div>
}

export default  mainRouter