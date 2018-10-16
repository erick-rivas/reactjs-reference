import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress';

import Appbar from 'components/_Appbar';
import Drawer from 'components/_Drawer';
import Toys from 'components/_Toys';

import styles from 'styles/css/home.module.css';


class Home extends React.Component
{
  render()
  {
    const { isAuth = true, isInit = true } = this.props;

    const loading =
      !isInit ?
        <div className={styles.loading}>
          <CircularProgress className={styles.progress} color='primary' size='100' />
        </div> : null;
        
    const login = <Redirect to='/login' />;

    const routes =
      <div className={"animated fadeIn"}>
        <div className={styles.nav}>
          <Drawer />
        </div>
        <div className={styles.container}>
          <div className={styles.toolbar}>
            <Appbar />
          </div>
          <div className={styles.content}>
            <Switch>
              <Route
                path='/toys/:pet?'
                component={Toys} />
              <Route
                path='/stores'
                component={Toys} />
              <Route
                path='/dashboards/:period'
                component={Toys} />
              <Redirect to='/toys/all' />
            </Switch>
          </div>
        </div>
      </div>


    return (
      <div className={styles.module}>
        {loading}
        {!isAuth ? login : null}
        {isInit ? routes : null}
      </div>
    );
  }
}

Home.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  isInit: PropTypes.bool.isRequired,
  startSession: PropTypes.func.isRequired
}

export default Home;