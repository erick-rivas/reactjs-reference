import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '@material-ui/core/ListItem';
import NavIcon from '@material-ui/icons/NavigateNext';

import { getDeadlineFormat } from 'components/util/Format';

import { withStyles } from '@material-ui/core/styles';
import { checkboxStyle } from 'components/util/Theme';

import styles from 'styles/css/toy-item.module.css';


class Item extends React.Component
{
  render() 
  {
    const { toy = {} } = this.props;

    return (
      <ListItem
        className={styles.module}
        key={toy.id}
        button >

        <div className={styles.content}>
          <div className={styles.title}>{toy.name}</div>
        </div>
        <div className={styles.options}>
          <div className={styles.date}>{getDeadlineFormat(toy.deadline)}</div>
          <NavIcon className={styles.next} />
        </div>
      </ListItem>
    );
  }
}

Item.propTypes = {
  toy: PropTypes.object.isRequired
}

export default withStyles(checkboxStyle)(Item);