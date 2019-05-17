import * as React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Item from 'components/players/Item';

import * as styles from 'util/css/Players.module.css';


class Players extends React.Component
{
  render() 
  {
    const { players = [] } = this.props;
    const { teams = [] } = this.props;
    const { url } = this.props.match;

    const playerList = players.map(p =>
    {
      const team = teams.filter(t => t.id == p.team_id)[0];
      return (
        <Link to={`${url}/${p.id}`}>
          <Item
            player={p}
            team={team} />
        </Link>
      );
    });

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {playerList}
        </div>
      </div>
    );
  }
}

export default Players;