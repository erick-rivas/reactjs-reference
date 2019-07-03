/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MatchActions from 'interactors/actions/stats/matches';

import _MatchBase from '_seed/containers/stats/matches/Base';
import MatchDetailsOptions from 'components/stats/matches/details/Options';

class _MatchDetailsOptions extends _MatchBase
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
    )(MatchDetailsOptions));
}

export default _MatchDetailsOptions;

