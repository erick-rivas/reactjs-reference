import React from "react";
import { useQuery } from "seed/gql"
import { NavLink } from "react-router-dom";

import Loading from "seed/components/helpers/Loading";

import cx from "classnames";
import styles from "resources/css/examples/player_positions/List.module.css";

const PLAYER_POSITIONS  = `
{
  playerPositions {
    name
  }
}
`

function PlayerPositionList(props)
{
  const { url } = props.match;

  const qPlayerPositions = useQuery(PLAYER_POSITIONS);

  if (qPlayerPositions.loading) return <Loading />
  if (qPlayerPositions.error) return "Error"

  const { playerPositions } = qPlayerPositions.data

  const playerPositionList = playerPositions.map(item =>
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
      { playerPositionList }
    </div>
  );
}

export default PlayerPositionList;
