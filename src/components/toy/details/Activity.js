import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem';
import NavIcon from '@material-ui/icons/NavigateNext'

import styles from 'styles/css/toy-details-activity.module.css';


class Activity extends React.Component
{
  render() 
  {
    const { log } = this.props;

    return (
      <ListItem
        className={styles.module}
        key={log.id}
        button >
        <div className={styles.image} />
        <div className={styles.content}>
          <div className={styles.title}>{log.type}</div>
          <div className={styles.description}>{log.email.subject}</div>
        </div>
        <div className={styles.options}>
          <NavIcon className={styles.next} />
        </div>
      </ListItem>
    );
  }
}

Activity.propTypes = {
  log: PropTypes.object.isRequired
}

export default Activity;