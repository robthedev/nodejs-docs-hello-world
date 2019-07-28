import React, { lazy } from 'react';

// Route components
const Home = lazy(() => import('views/Pages/Home'));
const Login = lazy(() => import('views/Pages/Login'));
const Signup = lazy(() => import('views/Pages/Signup'));

const PageRoutes = [
  { path: '/', exact: true, name: 'Home', component: Home, layout: '/default' },
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: Login,
    layout: '/default'
  },
  {
    path: '/signup',
    exact: true,
    name: 'Signup',
    component: Signup,
    layout: '/default'
  }
];

export default PageRoutes;
