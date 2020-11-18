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
          path: '/404',
          component: Notfound,
          exact:true,
          meta: {
              title: 'robot-statis'
          }
      },
      {
          path: '/405',
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
    name: 'Home'
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    children: [
      {
          path: '/mozi1',
          component: About,
    
          meta: {
              title: 'robot-statis'
          }
      },
      {
          path: 'mozi2',
          component: Home,
          meta: {
              title: 'robot-mark'
          }
      }
    ]
  }

]

const routes = [...otherRoutes, ...appRoutes]

export default routes
