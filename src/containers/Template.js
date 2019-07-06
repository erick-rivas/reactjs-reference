/*
__Seed builder__v1.0
  (Read_only) Modify via SeedManifest.yaml

   Guidelines:
    - Template containers with all actions and default methods
    - Suggested usage: Copy content
*/

import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PlayerActions from 'actions/players';
import TeamActions from 'actions/teams';
import UserActions from 'actions/users';
import MatchActions from 'actions/stats/matches';
import ScoreActions from 'actions/stats/scores';

const players = new PlayerActions();
const teams = new TeamActions();
const users = new UserActions();
const matches = new MatchActions();
const scores = new ScoreActions();

const stateToProps = (state, props) => ({
  players: state.players.dataset,
  teams: state.teams.dataset,
  users: state.users.dataset,
  matches: state.matches.dataset,
  scores: state.scores.dataset,
});

const dispToProps = disp => ({
  
  getPlayerDetails: (playerId, callback) =>
    disp(players.getPlayerDetails(playerId, callback)),
  getPlayerList: (params, callback) =>
    disp(players.getPlayerList(params, callback)),
  savePlayer: (player, callback) =>
    disp(players.savePlayer(player, callback)),
  setPlayer: (playerId, player, callback) =>
    disp(players.setPlayer(playerId, player, callback)),
  deletePlayer: (playerId, callback) =>
    disp(players.deletePlayer(playerId, callback)),
  
  getTeamDetails: (teamId, callback) =>
    disp(teams.getTeamDetails(teamId, callback)),
  getTeamList: (params, callback) =>
    disp(teams.getTeamList(params, callback)),
  saveTeam: (team, callback) =>
    disp(teams.saveTeam(team, callback)),
  setTeam: (teamId, team, callback) =>
    disp(teams.setTeam(teamId, team, callback)),
  deleteTeam: (teamId, callback) =>
    disp(teams.deleteTeam(teamId, callback)),
  
  getUserDetails: (userId, callback) =>
    disp(users.getUserDetails(userId, callback)),
  getUserList: (params, callback) =>
    disp(users.getUserList(params, callback)),
  saveUser: (user, callback) =>
    disp(users.saveUser(user, callback)),
  setUser: (userId, user, callback) =>
    disp(users.setUser(userId, user, callback)),
  deleteUser: (userId, callback) =>
    disp(users.deleteUser(userId, callback)),
  
  getMatchDetails: (matchId, callback) =>
    disp(matches.getMatchDetails(matchId, callback)),
  getMatchList: (params, callback) =>
    disp(matches.getMatchList(params, callback)),
  saveMatch: (match, callback) =>
    disp(matches.saveMatch(match, callback)),
  setMatch: (matchId, match, callback) =>
    disp(matches.setMatch(matchId, match, callback)),
  deleteMatch: (matchId, callback) =>
    disp(matches.deleteMatch(matchId, callback)),
  
  getScoreDetails: (scoreId, callback) =>
    disp(scores.getScoreDetails(scoreId, callback)),
  getScoreList: (params, callback) =>
    disp(scores.getScoreList(params, callback)),
  saveScore: (score, callback) =>
    disp(scores.saveScore(score, callback)),
  setScore: (scoreId, score, callback) =>
    disp(scores.setScore(scoreId, score, callback)),
  deleteScore: (scoreId, callback) =>
    disp(scores.deleteScore(scoreId, callback)),
})
