import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageRoutes from '../routes/PageRoutes';

const Page404 = lazy(() => import('views/Pages/Page404'));

class DefaultLayout extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Suspense fallback={this.loading()}>
          <Switch>
            {PageRoutes.map((prop, idx) => {
              if (prop.layout === '/default') {
                return (
                  <Route
                    key={idx}
                    path={prop.path}
                    exact={prop.exact}
                    name={prop.name}
                    render={props => <prop.component {...props} />}
                  />
                );
              }
            })}
            <Route render={props => <Page404 {...props} />} />;
          </Switch>
        </Suspense>
      </div>
    );
  }
}

DefaultLayout.propTypes = {};

export default DefaultLayout;
