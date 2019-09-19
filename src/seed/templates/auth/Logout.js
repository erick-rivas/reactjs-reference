/*
__Seed builder__v1.0
*/

import React, { useEffect } from 'react';
import * as api from 'seed/api'
import cx from 'classnames';

import styles from 'resources/css/seed/templates/auth/Logout.module.css';

function Logout(props)
{
  const [logout, onLogout] = api.post("/auth/logout")

  if (onLogout.called && !onLogout.loading) {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('id');
    props.history.replace('/');
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <div className={styles.module}></div>
  );
}

export default Logout;
