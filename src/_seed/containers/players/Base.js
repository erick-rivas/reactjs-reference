/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml
*/

import PlayerActions from 'actions/players';
import TeamActions from 'actions/teams';

class _PlayerBase
{
  players = new PlayerActions();
  teams = new TeamActions();

  _baseStates = (state, props) => ({
      players: state.players.dataset,
      teams: state.teams.dataset,
  });

  _baseDisps = disp => ({
    getPlayerDetails: (playerId, callback) =>
      disp(this.players.getPlayerDetails(playerId, callback)),
    getPlayerList: (filters, callback) =>
      disp(this.players.getPlayerList(filters, callback)),
    getTeamList: (filters, callback) =>
      disp(this.teams.getTeamList(filters, callback)),
    savePlayer: (player, callback) =>
      disp(this.players.savePlayer(player, callback)),
    setPlayer: (playerId, player, callback) =>
      disp(this.players.setPlayer(playerId, player, callback)),
    deletePlayer: (playerId, callback) =>
      disp(this.players.deletePlayer(playerId, callback)),
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

export default _PlayerBase;

