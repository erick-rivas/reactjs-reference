/*
__Seed builder__v1.0
*/

import React from 'react';
import { useQuery } from 'seed/gql'
import { NavLink } from 'react-router-dom';

import Loading from 'seed/components/helpers/Loading';

import cx from 'classnames';
import styles from 'resources/css/examples/players/List.module.css';

const PLAYERS  = `
{
  players {
    id
    name
    isActive
    photo {
      id
    }
    team {
      id
    }
    position {
      id
    }
  }
}
`

function PlayerList(props)
{
  const { url } = props.match;

  const qPlayers = useQuery(PLAYERS);

  if (qPlayers.loading) return <Loading />
  if (qPlayers.error) return "Error"

  const { players } = qPlayers.data

  const playerList = players.map(item =>
    <NavLink
      key={item.id}
      to={`${url}/${item.id}`}
      className={styles.item}
      activeClassName={styles.active}>
        <div className={styles.title}>{item.id}</div>
        <div className={styles.subtitle}>{JSON.stringify(item)}</div>
    </NavLink>);

  return (
    <div className={styles.module}>
      { playerList }
    </div>
  );
}

export default PlayerList;
