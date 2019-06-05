import * as React from 'react';
import cx from 'classnames';

import styles from 'util/css/helpers/Item.module.css';

class Item extends React.Component
{
  render()
  {
    return (
    <div className={styles.module}>
      <div className={styles.title}>{this.props.title}</div>
      <div className={styles.subtitle}>{this.props.subtitle}</div>
    </div>
    );
  }
}

export default Item;