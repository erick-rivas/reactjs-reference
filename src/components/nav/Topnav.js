import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Component from 'components/nav/Topnav.link.js'

import styles from 'resources/css/nav/Topnav.module.css';

class Topnav extends Component
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

export default Topnav;

