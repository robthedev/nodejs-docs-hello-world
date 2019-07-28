import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik, Form } from 'formik';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';

import { signupUser } from 'reduxstore/actions/authActions';
import { signupFormValidation } from 'utils/form/FormValidationSchemas';

class SignupForm extends Component {
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
            placeholder="name"
            autoComplete="name"
            name="username"
            onChange={handleChange}
          />
          {touched.username && errors.username && <div>{errors.username}</div>}
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>@</InputGroupText>
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
        <InputGroup className="mb-3">
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
        <InputGroup className="mb-4">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>
              <i className="icon-lock" />
            </InputGroupText>
          </InputGroupAddon>
          <Input
            type="password"
            placeholder="Repeat password"
            autoComplete="new-password"
            name="passwordConfirmation"
            onChange={handleChange}
          />
          {touched.passwordConfirmation && errors.passwordConfirmation && (
            <div>{errors.passwordConfirmation}</div>
          )}
        </InputGroup>
        <Button color="success" block type="submit">
          {this.props.btnText}
        </Button>
      </Form>
    );
  }
}

const FormikSignupFrom = withFormik({
  mapPropsToValues({ username, email, password, passwordConfirmation }) {
    return {
      username: username || '',
      email: email || '',
      password: password || '',
      passwordConfirmation: passwordConfirmation || ''
    };
  },
  validationSchema: signupFormValidation,
  handleSubmit(values, { props }) {
    const newUser = {
      name: values.username,
      email: values.email,
      password: values.password
    };
    props.signupUser(newUser, props.history);
  }
})(SignupForm);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { signupUser }
)(withRouter(FormikSignupFrom));
