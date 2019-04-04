import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams'

import Teams from 'components/Teams'

class Container extends Teams
{
  componentDidMount()
  {
    const { getTeams } = this.props;
    getTeams();
  }
}

const teams = new TeamActions();

const stateToProps = state => ({
  teams: state.teams.dataset,
});

const dispToProps = disp => ({
  getTeams: () =>
    disp(teams.getTeams())
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Container));