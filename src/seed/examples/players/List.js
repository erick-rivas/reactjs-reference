import React from "react";
import cx from "classnames";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import styles from "resources/css/seed/examples/players/List.module.css";

const PLAYERS  = `
{
  players {
    name
    isActive
    photo { }
    team { }
    position { }
  }
}
`;

function PlayerList(props)
{
  const { url } = props.match;

  const qPlayers = useQuery(PLAYERS);

  if (qPlayers.loading) return <Loading />;
  if (qPlayers.error) return "Error";

  const { players } = qPlayers.data;

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
