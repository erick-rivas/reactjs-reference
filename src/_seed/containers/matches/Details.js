/*
__Seed builder__v1.0
  (Read_only) Modify via models.json
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MatchActions from 'actions/matches';

import _MatchBase from '_seed/containers/matches/Base';
import MatchDetails from 'components/matches/Details';

class _MatchDetails extends _MatchBase
{
  matches = new MatchActions();
 
  _states = (state, props) => ({
  });
  
  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(MatchDetails));
}

export default _MatchDetails;

