import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import styles from 'util/css/nav/Topnav.module.css';

class Topnav extends React.Component
{
  render()
  {
    return (
    <div className={styles.module}>
       <Svg className={styles.menu} 
        src={require('util/assets/icons/ic_menu.svg')} />
    </div>
    );
  }
}

export default Topnav;
