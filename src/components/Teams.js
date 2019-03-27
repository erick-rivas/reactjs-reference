import * as React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Item from 'components/teams/Item';

import * as styles from 'styles/css/teams.module.css';


class Teams extends React.Component
{
  render() 
  {
    const { teams = [] } = this.props;
    const { url } = this.props.match;

    const teamList = teams.map(t =>
    {
      return (
        <Link to={`${url}/${t.id}`}>
          <Item
            team={t} />
        </Link>
      );
    });

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {teamList}
        </div>
      </div>
    );
  }
}

export default Teams;