
import ReactDom from "react-dom"
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import App from "./router"
import {Provider} from "react-redux"

import { createBrowserHistory } from "history" // URL模式的history

import configureStore from "app/store/configureStore"

const store = configureStore(createBrowserHistory)
const routes = () => (
    <Router>
        <App/>
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