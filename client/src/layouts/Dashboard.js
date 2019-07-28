import React, { lazy } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { Component, Suspense } from 'react';
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav
} from '@coreui/react';
import navigation from '../_nav';
import DashboardRoutes from 'routes/DashboardRoutes';
import { Container } from 'reactstrap';

import PrivateRoute from 'components/helpers/PrivateRoute';

const DefaultAside = lazy(() =>
  import('containers/DefaultLayout/DefaultAside')
);
const DefaultFooter = lazy(() =>
  import('containers/DefaultLayout/DefaultFooter')
);
const DefaultHeader = lazy(() =>
  import('containers/DefaultLayout/DefaultHeader')
);

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push('/login');
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav navConfig={navigation} {...this.props} />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {DashboardRoutes.map((prop, idx) => {
                    if (prop.layout === '/dashboard') {
                      return (
                        <PrivateRoute
                          key={idx}
                          path={
                            prop.path === '/library'
                              ? '/library'
                              : `/library${prop.path}`
                          }
                          exact={prop.exact}
                          name={prop.name}
                          render={props => <prop.component {...props} />}
                        />
                      );
                    }
                    return null;
                  })}
                  <Redirect to={'/library'} />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
