import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TeamActions from 'actions/teams'
import PlayerActions from 'actions/players'

import Players from 'components/Players'

class Container extends Players
{
  componentDidMount()
  {
    const { getTeams, getPlayers } = this.props;
    getTeams();
    getPlayers();
  }
}

const teams = new TeamActions();
const players = new PlayerActions();

const stateToProps = state => ({
  teams: state.teams.dataset,
  players: state.players.dataset
});

const dispToProps = disp => ({
  getPlayers: () =>
    disp(players.getPlayers()),
  getTeams: () =>
    disp(teams.getTeams()),
});

export default withRouter(connect(
  stateToProps,
  dispToProps
)(Container));