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
-  reqGet(path, query, callback, toDisp)
   > Example: this.reqGet('/1/action', 'name=1', callback, this.onGetDetails) \
   > Example: this.reqGet('/action', '', callback, this.onGetList)
-  reqPost(path, body, callback, toDisp)
   > Example this.reqPost('/action', {arg: 1}, callback, this.onSaveData)
-  reqPut(path, body, callback, toDisp)
   > Example this.reqPut('/1/action', {arg: 1}, callback, this.onSetData)
-  reqDelete(path, callback,  toDisp)
   > Example this.reqDelete('/1/action', {arg: 1}, callback, this.onDeleteData)

## ToDisp methods

Those methods are used to ease redux updates (state tree)

The data that receive is defined base on REST API standards, 
  -  example: Return a resource json when execute a POST operation

-  onGetList: Receive a collection and add to tree
-  onGetDetails: Receive an object and add to tree
-  onSaveData: Receive an saved object and add to tree
-  onSetData: Receive an modified object and update tree
-  onDeleteData: Receive an id and delete the element from tree

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
    return this.reqGet(
      `/top_10`, //Path to send
      `category=${category}`, //Query
      callback, //callback when complete
      this.onGetDetails //disp function
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
    return this.reqPost(
      `/{userId}/create_profile`, //Path to send
      body, //Query
      callback, //callback when complete
      this.onSaveData //disp function
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
