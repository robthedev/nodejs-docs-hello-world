import React, { lazy } from 'react';

const Dashboard = lazy(() => import('views/Dashboard/Dashboard'));
const Books = lazy(() => import('views/Dashboard/Books/Books'));
const AddBookView = lazy(() => import('views/Dashboard/Books/add-book'));
const ViewBook = lazy(() => import('views/Dashboard/Books/view-book'));
const Movies = lazy(() => import('views/Dashboard/Movies'));
const Shows = lazy(() => import('views/Dashboard/Shows'));
const Settings = lazy(() => import('views/Dashboard/Settings'));
const Support = lazy(() => import('views/Dashboard/Support'));
const Recommendations = lazy(() => import('views/Dashboard/Recommendations'));

const DashboardRoutes = [
  {
    exact: true,
    path: '/library',
    name: 'Library',
    component: Dashboard,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Books',
    name: 'Books',
    component: Books,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Books/add-book',
    name: 'Add Book',
    component: AddBookView,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Books/view-book/',
    name: 'View Book',
    component: ViewBook,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Movies',
    name: 'Movies',
    component: Movies,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Shows',
    name: 'Shows',
    component: Shows,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Settings',
    name: 'Settings',
    component: Settings,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Support',
    name: 'Support',
    component: Support,
    layout: '/dashboard'
  },
  {
    exact: true,
    path: '/Recommendations',
    name: 'Recommendations',
    component: Recommendations,
    layout: '/dashboard'
  }
];

export default DashboardRoutes;
