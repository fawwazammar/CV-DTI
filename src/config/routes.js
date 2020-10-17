import { Home, Portofolio } from '../pages';

const routes = [
  {
    path: '/portofolio',
    component: Portofolio,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/',
    component: Home,
  },
];

export default routes;
