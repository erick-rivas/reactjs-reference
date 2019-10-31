import React from 'react';
import Svg from 'react-svg';

import cx from 'classnames';
import styles from 'resources/css/examples/general/nav/Topnav.module.css';

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

