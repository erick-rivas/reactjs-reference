import * as React from 'react'

import ListItem from '@material-ui/core/ListItem';
import NavIcon from '@material-ui/icons/NavigateNext';

import * as styles from 'util/css/teams/Item.module.css';


class Item extends React.Component
{
  render() 
  {
    const { team = {} } = this.props;
    return (
      <ListItem
        className={styles.module}
        key={team.id}
        button>
        <div
          className={styles.image}
          style={{ backgroundImage: `url("${team.logo_url}")` }} />
        <div className={styles.content}>
          <div className={styles.title}>{team.name}</div>
          <div className={styles.description}>{`${team.players.length.toString()} players`}</div>
        </div>
        <div className={styles.options}>
          <NavIcon className={styles.next} />
        </div>
      </ListItem>

    );
  }
}

export default Item;