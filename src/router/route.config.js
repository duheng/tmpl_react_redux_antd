import { Home, About,Notfound } from '../pages';

const otherRoutes = [
  {
    path: '/login',
    component: Home,
    name: 'Home'
  },
  {
    path: '/error',
    component: About,
    name: 'error',
    children: [
      {
          path: '/error/404',
          exact:true,
          component: Notfound,
          meta: {
              title: 'robot-statis'
          }
      },
      {
          path: '/error/405',
          component: Home,
    
          meta: {
              title: 'robot-mark'
          }
      }
    ]
  },
  

]

export const appRoutes = [
  {
    path: '/',
    component: Home,
    exact: true,
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    exact: true,
    name: 'About',
    children: [
      {
          path: '/about/mozi1',
          component: About,
          exact: true,
          meta: {
              title: 'robot-statis'
          }
      },
      {
          path: '/about/mozi2',
          component: Home,
          meta: {
              title: 'robot-mark'
          }
      }
    ]
  }

]


export default {
  otherRoutes,
  appRoutes
}
