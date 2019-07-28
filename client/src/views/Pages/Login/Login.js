import React, { Component, Suspense, lazy } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';

const FormikLoginFrom = lazy(() => import('components/form/LoginForm'));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/library');
    }
  }

  render() {
    return (
      <Suspense fallback={loading()}>
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <FormikLoginFrom
                        title="Login"
                        subtitle="Please login to your account"
                        btnText="Login"
                      />
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
          </Container>
        </div>
      </Suspense>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(withRouter(Login));
