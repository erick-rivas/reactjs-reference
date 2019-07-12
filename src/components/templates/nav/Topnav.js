/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';
import redux from 'seed/helpers/redux';

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

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default redux(Topnav);
