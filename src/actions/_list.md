# Actions list

## Table of content
-  [matches](#matches)
-  [players](#players)
-  [scores](#scores)
-  [teams](#teams)
-  [users](#users)

##  matches

- Model structure:
```json
{
  "date": null
  "type": null
  ""local_id": null,
  ""visitor_id": null,
}
```
-  Dataset: this.props.matches
-  Methods:
  -  getMatchList(filters, callback?)
  -  getMatchDetails(matchId, callback?)
  -  saveMatch(match, callback?)
  -  setMatch(matchId, match, callback?)
  -  deleteMatch(matchId, callback?)
-  Reference: [matches](../seed/actions/matches.js) \

##  players

- Model structure:
```json
{
  "name": null
  "photo_id": null
  "is_active": null
  ""team_id": null,
}
```
-  Dataset: this.props.players
-  Methods:
  -  getPlayerList(filters, callback?)
  -  getPlayerDetails(playerId, callback?)
  -  savePlayer(player, callback?)
  -  setPlayer(playerId, player, callback?)
  -  deletePlayer(playerId, callback?)
-  Reference: [players](../seed/actions/players.js) \

##  scores

- Model structure:
```json
{
  "min": null
  ""player_id": null,
  ""match_id": null,
}
```
-  Dataset: this.props.scores
-  Methods:
  -  getScoreList(filters, callback?)
  -  getScoreDetails(scoreId, callback?)
  -  saveScore(score, callback?)
  -  setScore(scoreId, score, callback?)
  -  deleteScore(scoreId, callback?)
-  Reference: [scores](../seed/actions/scores.js) \

##  teams

- Model structure:
```json
{
  "name": null
  "logo_id": null
  "description": null
  "market_value": null
  ""rival_id": null,
}
```
-  Dataset: this.props.teams
-  Methods:
  -  getTeamList(filters, callback?)
  -  getTeamDetails(teamId, callback?)
  -  saveTeam(team, callback?)
  -  setTeam(teamId, team, callback?)
  -  deleteTeam(teamId, callback?)
-  Reference: [teams](../seed/actions/teams.js) \

##  users

- Model structure:
```json
{
  "team_ids": null,
}
```
-  Dataset: this.props.users
-  Methods:
  -  getUserList(filters, callback?)
  -  getUserDetails(userId, callback?)
  -  saveUser(user, callback?)
  -  setUser(userId, user, callback?)
  -  deleteUser(userId, callback?)
-  Reference: [users](../seed/actions/users.js) \

