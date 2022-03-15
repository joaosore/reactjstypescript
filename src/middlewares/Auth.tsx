import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

interface IProps {}

export default (ComposedComponent: any) => {
  class RequireAuth extends Component {
    state = {
      isAuthenticated: false,
      token: '',
    };

    constructor(props: IProps) {
      super(props);
      const token = localStorage.getItem('token');
      if (token !== null) {
        this.state.isAuthenticated = true;
        this.state.token = token;
      }
    }

    render() {
      const { isAuthenticated } = this.state;

      if (isAuthenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return <Redirect to="/login" />;
    }
  }

  return RequireAuth;
};
