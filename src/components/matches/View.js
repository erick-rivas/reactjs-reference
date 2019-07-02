/*
__Seed builder__v1.0

  Guidelines:
    - EXAMPLE component to handle navigation (single view)
    - Recomended usage: inner navigation
*/

import * as React from 'react';
import cx from 'classnames';
import { Switch, Route } from 'react-router-dom';

import MatchDetails from 'containers/matches/Details';
import MatchList from 'containers/matches/List';
import MatchItem from 'components/matches/Item';

import styles from 'util/css/matches/View.module.css';

class MatchView extends React.Component
{
  render()
  {
    const { path, url } = this.props.match;
   
    const list = props =>
      <div className={styles.list}>
        <MatchList 
        Item={MatchItem}/>
      </div>

    const details = props =>
      <div className={styles.details}>
        <MatchDetails />
      </div>
   
    return (
    <div className={styles.module}>
      
      <div className={styles.container}>
        <Switch>
         <Route
          path={`${path}/:match_id(\\d+)`}
          component={details} />
          <Route
            path={`${path}`}
            component={list} />
        </Switch>
      </div>
      
    </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.state = {};
  }
}

export default MatchView;
