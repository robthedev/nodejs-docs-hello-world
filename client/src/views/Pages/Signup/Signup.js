import React, { Suspense, lazy } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Row } from 'reactstrap';

const FormikSignupFrom = lazy(() => import('components/form/SignupForm'));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Signup = () => {
  return (
    <Suspense fallback={loading()}>
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <FormikSignupFrom
                      title="Signup"
                      subtitle="Please create an account"
                      btnText="Create account"
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
};

export default Signup;
