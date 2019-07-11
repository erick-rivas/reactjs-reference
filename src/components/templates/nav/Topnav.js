/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import cx from 'classnames';
import Svg from 'react-svg';

import Component from 'components/templates/nav/Topnav.link'

import styles from 'resources/css/templates/nav/Topnav.module.css';

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
