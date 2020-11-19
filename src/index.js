
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import App from "./router"
import {Provider} from "react-redux"

import { createBrowserHistory } from "history" // URL模式的history

import configureStore from "app/store/configureStore"

import AppRouter from './router/AppRouter'

const store = configureStore(createBrowserHistory)

const routes = () => (
    <Router>
        <App path="*" component={AppRouter} />
    </Router>
)

const renderDom = () => {
  
    return <Provider store={store}>{routes()}</Provider>
  
}

ReactDom.render(
    renderDom(),
    document.getElementById("app")
)
;if (module.hot) {module.hot.accept()};