import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export function Logout() {
  useEffect(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
  }, []);

  return <Redirect to="/" />;
}
