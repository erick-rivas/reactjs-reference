/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import * as React from 'react';
import * as DataUtil from 'seed/util/DataUtil';
import cx from 'classnames';
import redux from 'seed/helpers/redux';

import { NavLink } from 'react-router-dom';

import Loading from 'components/helpers/Loading';

import styles from 'resources/css/templates/stats/matches/List.module.css';

class MatchList extends React.Component
{
  render()
  {
    const { matches } = this.props;
    if (matches == null) return <Loading />;

    const { Item } = this.props;
    const { url } = this.props.match;

    const matchList = 
      this.renderMatchList(item =>
        <NavLink 
          to={`${url}/${item.id}`}
          className={styles.item}
          activeClassName={styles.active}
          onClick={this.onItemClick}>
          <Item 
            key={item.id} 
            id={item.id}
            match={item}/>
      </NavLink>
    );

    return (
    <div className={styles.module}>
      { matchList }
    </div>
    );
  }

  /*
  * Business logic
  */

  constructor(props)
  {
    super(props);
    this.state = {
      filters: {
        user_id: this.getUserId(),
        local_id: this.getLocalId(),
        visitor_id: this.getVisitorId(),
        scores_id: this.getScoresId(), 
      }
    };
    this.onItemClick = this.onItemClick.bind(this);
  }
  
  componentDidMount()
  {
    this.loadData();
  }

  /* Props */

  onItemClick()
  {
  }
  
  loadData = () =>
  {
    const { getMatchList } = this.props;
    getMatchList(this.state.filters);
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
  getLocalId()
  {
    const { local_id } = this.props.match.params;
    const { localId } = this.props;
    return local_id ? local_id : localId;
  }
  getVisitorId()
  {
    const { visitor_id } = this.props.match.params;
    const { visitorId } = this.props;
    return visitor_id ? visitor_id : visitorId;
  }
  getScoresId()
  {
    const { scores_id } = this.props.match.params;
    const { scoresId } = this.props;
    return scores_id ? scores_id : scoresId;
  }

   /* Components */

  renderMatchList(map)
  {
    const { matches = [] } = this.props;
    const dataset = DataUtil
      .filter(matches, this.state.filters)
      .sort((d1,d2) => d2.id - d1.id);
    return dataset.map(map);
  }
}

export default redux(MatchList);
