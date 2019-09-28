/*
__Seed builder__v1.0
*/

import React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import styles from 'resources/css/seed/examples/nav/Topnav.module.css';

function Topnav(props)
{
  return (
  <div className={styles.module}>
     <Svg className={styles.menu}
      src={require('resources/icons/ic_menu.svg')} />
  </div>
  );
}

export default Topnav;
