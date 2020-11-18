import asyncComponent from "utils/asyncComponent"

const Home = asyncComponent(() => import("./home"))
const About = asyncComponent(() => import("./about"))
const Notfound = asyncComponent(() => import("./notfound"))

export { Home, About, Notfound};if (module.hot) {module.hot.accept()};