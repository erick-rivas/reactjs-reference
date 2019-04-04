import * as React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Appbar from 'components/Appbar';
import Drawer from 'components/Drawer';
import Teams from 'containers/Teams';


import Results from 'components/Results';
import * as styles from 'styles/css/home.module.css';


class Home extends React.Component
{
  render()
  {
    return (
      <div className={styles.module}>
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
                  path='/results'
                  component={Results} />
                <Route
                  path='/teams'
                  component={Teams} />
                <Route
                  path='/standings'
                  component={() => <div>Standings</div>} />
                <Route
                  path='/news'
                  component={() => <div>News</div>} />
                <Redirect to='/results' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
