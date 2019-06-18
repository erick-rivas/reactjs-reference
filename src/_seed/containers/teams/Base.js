/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import TeamActions from 'actions/teams';
import PlayerActions from 'actions/players';

class _TeamBase
{
  teams = new TeamActions();
  players = new PlayerActions();

  _baseStates = (state, props) => ({
      teams: state.teams.dataset,
      players: state.players.dataset,
  });

  _baseDisps = disp => ({
    getTeamDetails: (teamId, callback) =>
      disp(this.teams.getTeamDetails(teamId, callback)),
    getTeamList: (filters, callback) =>
      disp(this.teams.getTeamList(filters, callback)),
    getPlayerList: (filters, callback) =>
      disp(this.players.getPlayerList(filters, callback)),
    saveTeam: (team, callback) =>
      disp(this.teams.saveTeam(team, callback)),
    setTeam: (teamId, team, callback) =>
      disp(this.teams.setTeam(teamId, team, callback)),
    deleteTeam: (teamId, callback) =>
      disp(this.teams.deleteTeam(teamId, callback)),
  })

  _states = state => ({});
  states = state => ({});

  _disps = disp => ({});
  disps = disp => ({});

  dispToProps = (disp, props) => ({
    ...this._baseDisps(disp,props), ...this._disps(disp, props), ...this.disps(disp, props)
  });

  stateToProps = (state, props) => ({
    ...this._baseStates(state,props), ...this._states(state, props), ...this.states(state, props)
  });
}

export default _TeamBase;

