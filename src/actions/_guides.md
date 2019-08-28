# Actions

Represents the module that handle API connection

## Table of content

-  [Description](#description)
-  [Guidelines](#guidelines)
-  [Request methods](#request-methods)
-  [ToDisp methods](#todisp-methods)
-  [Examples](#example)
    -  [GET example](#get-example)
    -  [POST example](#post-example)
-  [References](#references)
-  [Seed actions](#seed-models)
    -  [players](#players)
    -  [teams](#teams)
    -  [users](#users)
    -  [matches](#matches)
    -  [scores](#scores)

## Description

The actions are responsible to define which methods (endpoint) will be used and how handle the responses.

Those methods are binded **automatically** binded in components using redux() wrapper.

## Guidelines

-  Just add new methods to *define endpoint actions*
    - Example: /api/players/top_players
-  Modify 'fetch' data to define which field include in the request
-  Only override existing methods if required

## Request methods

Those methods are helpers to ease the api requests
-  getList(action, filters, callback)
   > Example: this.getList('/action', {name: 1}, callback)
-  getDetails(action, id, callback)
   > Example: this.getDetails('/action', 1, callback)
-  postData(action, body, callback)
   > Example this.postData('/action', {arg: 1}, callback)
-  putData(action, id, body, callback)
   > Example this.putData('/action', 1, {arg: 1}, callback)
-  deleteData(action, id, callback)
   > Example this.deleteData('/action', 1, callback)

## Examples

### GET example

```javascript
class Players extends _Players
{
  constructor()
  {
    // Fetch all attributes of inner team attribute
    const fetch = [
      "team.*",
    ]
    super(fetch)
  }

  getTop10PlayerList(category, callback)
  {
    return this.getList(
      `/top_10`, //Action
      {category: category}, //Filters
      callback //callback when complete
    )
  }
}
```

### POST example

```javascript
class Users extends _Users
{
  createUserProfile(userId, callback)
  {
    let body = {}
    return this.postData(
      `create_profile`, //Action
      body, //Body
      callback //callback when complete
    )
  }
}
```

## References

## Seed models

###  players

Reference: [players](../seed/actions/players.js) \
Dataset: this.props.players
Methods:
-  getPlayerList(filters, callback)
-  getPlayerDetails(playerId, callback)
-  savePlayer(player, callback)
-  setPlayer(playerId, player, callback)
-  deletePlayer(playerId, callback)

###  teams

Reference: [teams](../seed/actions/teams.js) \
Dataset: this.props.teams
Methods:
-  getTeamList(filters, callback)
-  getTeamDetails(teamId, callback)
-  saveTeam(team, callback)
-  setTeam(teamId, team, callback)
-  deleteTeam(teamId, callback)

###  users

Reference: [users](../seed/actions/users.js) \
Dataset: this.props.users
Methods:
-  getUserList(filters, callback)
-  getUserDetails(userId, callback)
-  saveUser(user, callback)
-  setUser(userId, user, callback)
-  deleteUser(userId, callback)

###  matches

Reference: [matches](../seed/actions/matches.js) \
Dataset: this.props.matches
Methods:
-  getMatchList(filters, callback)
-  getMatchDetails(matchId, callback)
-  saveMatch(match, callback)
-  setMatch(matchId, match, callback)
-  deleteMatch(matchId, callback)

###  scores

Reference: [scores](../seed/actions/scores.js) \
Dataset: this.props.scores
Methods:
-  getScoreList(filters, callback)
-  getScoreDetails(scoreId, callback)
-  saveScore(score, callback)
-  setScore(scoreId, score, callback)
-  deleteScore(scoreId, callback)

> To export a action use command \
> $ seed export -m actions:model_name
