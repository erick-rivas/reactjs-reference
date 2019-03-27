import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams'

import Teams from 'components/Teams'

class Container extends Teams
{
  componentDidMount()
  {
    const { fetchTeams } = this.props;
    fetchTeams();
  }
}

const teams = new TeamActions();

const stateToProps = state => ({
  teams: state.teams.dataSet,
});

const dispToProps = disp => ({
  fetchTeams: () =>
    disp(teams.fetchTeams()),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Container));