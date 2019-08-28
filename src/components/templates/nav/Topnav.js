/*
__Seed builder__v1.0
*/

import * as React from 'react';
import redux from 'seed/redux';
import cx from 'classnames';
import Svg from 'react-svg';

import styles from 'resources/css/templates/nav/Topnav.module.css';

class Topnav extends React.Component
{
  render()
  {
    return (
    <div className={styles.module}>
       <Svg className={styles.menu} 
        src={require('resources/icons/ic_menu.svg')} />
    </div>
    );
  }
}

export default redux(Topnav);
