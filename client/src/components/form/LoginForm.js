import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik, Form } from 'formik';

import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';

import { loginUser } from 'reduxstore/actions/authActions';
import { loginFormValidation } from 'utils/form/FormValidationSchemas';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { errors, touched, handleChange } = this.props;
    return (
      <Form>
        <h1>{this.props.title}</h1>
        <p className="text-muted">{this.props.subtitle}</p>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-user" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            placeholder="Email"
            autoComplete="email"
            name="email"
            onChange={handleChange}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
        </InputGroup>
        <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="password"
            placeholder="Password"
            autoComplete="password"
            name="password"
            onChange={handleChange}
          />
          {touched.password && errors.password && <div>{errors.password}</div>}
        </InputGroup>
        <Row>
          <Col xs="6">
            <Button color="primary" className="px-4" type="submit">
              {this.props.btnText}
            </Button>
          </Col>
          <Col xs="6" className="text-right">
            <Button color="link" className="px-0">
              Forgot password?
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const FormikLoginFrom = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || '',
      password: password || ''
    };
  },
  validationSchema: loginFormValidation,
  handleSubmit(values, { props }) {
    const user = {
      email: values.email,
      password: values.password
    };
    props.loginUser(user, props.history);
  }
})(LoginForm);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(withRouter(FormikLoginFrom));
