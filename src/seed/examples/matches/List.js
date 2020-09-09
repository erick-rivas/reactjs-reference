import React from "react";
import cx from "classnames";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import styles from "resources/css/seed/examples/matches/List.module.css";

const MATCHES  = `
{
  matches {
    date
    type
    local { }
    visitor { }
    scores { }
  }
}
`;

function MatchList(props)
{
  const { url } = props.match;

  const qMatches = useQuery(MATCHES);

  if (qMatches.loading) return <Loading />;
  if (qMatches.error) return "Error";

  const { matches } = qMatches.data;

  const matchList = matches.map(item =>
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
      { matchList }
    </div>
  );
}

export default MatchList;
