/*
__Seed builder__v1.0
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';
import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import styles from 'resources/css/stats/scores/List.module.css';

class ScoreList extends React.Component
{
  render()
  {
    const { scores } = this.props;
    if (scores == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const scoreList = 
      this.renderScoreList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onClickItem}>
          <Item 
            key={item.id} 
            id={item.id}
            score={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { scoreList }
    </div>
    );
  }

  renderScoreList(map)
  {
    const { scores = [] } = this.props;
    const dataset = DataUtil
      .filter(scores, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        player_id: this.getPlayerId(),
        match_id: this.getMatchId(), 
      }
    };
    this.onClickItem = this.onClickItem.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }

  /* Events */

  onClickItem(){}

  /* Actions */
  
  loadData = () =>
  {
    const { getScoreList } = this.props;
    getScoreList(this.state.filters);
  }

  /* Filters */

  getUserId()
  {
    const { user_id } = this.props.match.params;
    const { userId } = this.props;
    return user_id == 0 ? sessionStorage.getItem('id') : 
           user_id ? user_id : 
           userId;
  }
  getPlayerId()
  {
    const { player_id } = this.props.match.params;
    const { playerId } = this.props;
    return player_id ? player_id : playerId;
  }
  getMatchId()
  {
    const { match_id } = this.props.match.params;
    const { matchId } = this.props;
    return match_id ? match_id : matchId;
  }  
}

export default redux(ScoreList);
