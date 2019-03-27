import * as React from 'react'

import ListItem from '@material-ui/core/ListItem';
import NavIcon from '@material-ui/icons/NavigateNext';

import * as styles from 'styles/css/playerItem.module.css';


class Item extends React.Component
{
  render() 
  {
    const { player = {} } = this.props;
    const { team = {} } = this.props;

    return (
      <ListItem
        className={styles.module}
        key={player.id}
        button>
        <div
          className={styles.image}
          style={{ backgroundImage: `url("${player.photo_url}")` }} />
        <div className={styles.content}>
          <div className={styles.title}>{player.name}</div>
          <div className={styles.description}>{team.name}</div>
        </div>
        <div className={styles.options}>
          <NavIcon className={styles.next} />
        </div>
      </ListItem>

    );
  }
}

export default Item;