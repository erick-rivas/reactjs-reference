import React from 'react'

import Nav from 'containers/_drawer/_Nav';

import styles from 'styles/css/drawer.module.css';


class Drawer extends React.Component
{
  render()
  {
    return (
      <nav className={styles.module}>

        <div className={styles.header}>
          <div className={styles.headerTitle}>
            Hana<span> Panel</span>
          </div>
        </div>

        <Nav />
      </nav>
    );
  }
}

export default Drawer;
