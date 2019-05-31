/*
__Seed builder__v1.0
Fields:
    - id
    - name
    - logo_url
    - description
    - market_value
    - players
*/

import * as React from 'react';

import _TeamDetails from '__seed__/components/teams/Details';
import * as Util from 'containers/helpers/Util'
import Loading from 'components/helpers/Loading';

import styles from 'util/css/teams/Details.module.css';

class TeamDetails extends _TeamDetails
{
  render()
  {
    const { teams = [] } = this.props;
    const teamId = this.getTeamId();
    const team = Util.getItem(teams, teamId);

    if (team.id == null) return <Loading />
    return (
      <div className={styles.module}>

        {/* Suggested divs */}
        <div className={styles.name}>{'name:' + team.name}</div>
        <div className={styles.logoUrl}>{'logo_url:' + team.logo_url}</div>
        <div className={styles.description}>{'description:' + team.description}</div>
        <div className={styles.marketValue}>{'market_value:' + team.market_value}</div>
        <div className={styles.players}>{'players:' + team.players.reduce((lv, v) => lv + v.id + ",", "")}</div>

      </div>
    );
  }

  getTeamId()
  {
    //Suggested id
    return this.props.teamId;
  }
}

export default TeamDetails;
