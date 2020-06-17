import { lazy } from 'react';

// Pages
const Show = lazy(() => import('./pages/Show'))
const Home = lazy(() => import('./pages/Home'))

export const ROUTES = [
  {
    path: '/shows/:slug',
    exact: true,
    component: Show
  },
  {
    path: '/',
    exact: true,
    component: Home
  }
]