/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml

   Guidelines:
    - Template containers with all actions and default methods
    - Suggested usage: Copy content
*/

import PlayerActions from 'interactors/actions/players';
import TeamActions from 'interactors/actions/teams';
import UserActions from 'interactors/actions/users';
import MatchActions from 'interactors/actions/stat/matches';
import ScoreActions from 'interactors/actions/stat/scores';

class ContainerTemplate
{
  players = new PlayerActions();
  teams = new TeamActions();
  users = new UserActions();
  matches = new MatchActions();
  scores = new ScoreActions();

  allStates = (state, props) => ({
      players: state.players.dataset,
      teams: state.teams.dataset,
      users: state.users.dataset,
      matches: state.matches.dataset,
      scores: state.scores.dataset,
  });

  allDisps = disp => ({
    
    getPlayerDetails: (playerId, callback) =>
      disp(this.players.getPlayerDetails(playerId, callback)),
    getPlayerList: (filters, callback) =>
      disp(this.players.getPlayerList(filters, callback)),
    savePlayer: (player, callback) =>
      disp(this.players.savePlayer(player, callback)),
    setPlayer: (playerId, player, callback) =>
      disp(this.players.setPlayer(playerId, player, callback)),
    deletePlayer: (playerId, callback) =>
      disp(this.players.deletePlayer(playerId, callback)),
    
    getTeamDetails: (teamId, callback) =>
      disp(this.teams.getTeamDetails(teamId, callback)),
    getTeamList: (filters, callback) =>
      disp(this.teams.getTeamList(filters, callback)),
    saveTeam: (team, callback) =>
      disp(this.teams.saveTeam(team, callback)),
    setTeam: (teamId, team, callback) =>
      disp(this.teams.setTeam(teamId, team, callback)),
    deleteTeam: (teamId, callback) =>
      disp(this.teams.deleteTeam(teamId, callback)),
    
    getUserDetails: (userId, callback) =>
      disp(this.users.getUserDetails(userId, callback)),
    getUserList: (filters, callback) =>
      disp(this.users.getUserList(filters, callback)),
    saveUser: (user, callback) =>
      disp(this.users.saveUser(user, callback)),
    setUser: (userId, user, callback) =>
      disp(this.users.setUser(userId, user, callback)),
    deleteUser: (userId, callback) =>
      disp(this.users.deleteUser(userId, callback)),
    
    getMatchDetails: (matchId, callback) =>
      disp(this.matches.getMatchDetails(matchId, callback)),
    getMatchList: (filters, callback) =>
      disp(this.matches.getMatchList(filters, callback)),
    saveMatch: (match, callback) =>
      disp(this.matches.saveMatch(match, callback)),
    setMatch: (matchId, match, callback) =>
      disp(this.matches.setMatch(matchId, match, callback)),
    deleteMatch: (matchId, callback) =>
      disp(this.matches.deleteMatch(matchId, callback)),
    
    getScoreDetails: (scoreId, callback) =>
      disp(this.scores.getScoreDetails(scoreId, callback)),
    getScoreList: (filters, callback) =>
      disp(this.scores.getScoreList(filters, callback)),
    saveScore: (score, callback) =>
      disp(this.scores.saveScore(score, callback)),
    setScore: (scoreId, score, callback) =>
      disp(this.scores.setScore(scoreId, score, callback)),
    deleteScore: (scoreId, callback) =>
      disp(this.scores.deleteScore(scoreId, callback)),
  })
}

export default ContainerTemplate;

