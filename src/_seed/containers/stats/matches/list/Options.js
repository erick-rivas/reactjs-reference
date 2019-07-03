/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MatchActions from 'interactors/actions/stats/matches';

import _MatchBase from '_seed/containers/stats/matches/Base';
import MatchListOptions from 'components/stats/matches/list/Options';

class _MatchListOptions extends _MatchBase
{
  matches = new MatchActions();

  _states = state => ({
  });

  _disps = disp => ({
  })

  getRouter = () =>
    withRouter(connect(
      this.stateToProps,
      this.dispToProps
    )(MatchListOptions));
}

export default _MatchListOptions;

