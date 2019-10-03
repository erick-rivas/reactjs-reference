/*
__Seed builder__v1.0
*/

import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import Sidenav from 'examples/general/nav/Sidenav';
import Topnav from 'examples/general/nav/Topnav';

import cx from 'classnames';
import styles from 'resources/css/examples/Home.module.css';

function Home(props)
{
  const { path } = props.match;

   useEffect(() => {
     const userId = sessionStorage.getItem('id');
     if (userId == null)
       return props.history.replace(`/examples/login`);
   });

  return (
    <div className={styles.module}>
      <div className={styles.drawer}>
        <div className={styles.sidenav}>
          <Route path={`${path}`}
            component={Sidenav} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.topnav}>
          <Route path={`${path}`}
            component={Topnav} />
        </div>
        <div className={styles.content}>
           <Switch>
           </Switch>
        </div>
      </div>
    </div>
   );
}

export default Home;
