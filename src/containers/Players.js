import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams'
import PlayerActions from 'actions/players'

import Players from 'components/Players'

class Container extends Players
{
  componentDidMount()
  {
    const { fetchTeams, fetchPlayers } = this.props;
    fetchTeams();
    fetchPlayers();
  }
}

const teams = new TeamActions();
const players = new PlayerActions();

const stateToProps = state => ({
  teams: state.teams.dataSet,
  players: state.players.dataSet
});

const dispToProps = disp => ({
  fetchPlayers: () =>
    disp(players.fetchPlayers()),
  fetchTeams: () =>
    disp(teams.fetchTeams()),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Container));