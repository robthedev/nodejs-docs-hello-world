import './muibootstrap';
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import store from 'reduxstore/store';
import DefaultTheme from './DefaultTheme';
import './App.scss';
import PrivateRoute from './components/helpers/PrivateRoute';
import { setCurrentUser } from './reduxstore/actions/authActions';
import authUser from './utils/authUser';

const DefaultLayout = lazy(() => import('layouts/Default'));
const DashboardLayout = lazy(() => import('layouts/Dashboard'));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

authUser(store, setCurrentUser, sessionStorage.libtrackrjwtToken);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={DefaultTheme}>
          <Router>
            <Suspense fallback={loading()}>
              <Switch>
                <PrivateRoute
                  path={'/library'}
                  render={props => <DashboardLayout {...props} />}
                />
                <Route
                  path={'/'}
                  render={props => <DefaultLayout {...props} />}
                />
              </Switch>
            </Suspense>
          </Router>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
