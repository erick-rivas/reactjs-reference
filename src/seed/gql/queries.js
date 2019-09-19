/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const SET_MATCH = `
mutation Set(
  $id: Int!,
  $date: DateTime,
  $type: String,
  $local: Int,
  $visitor: Int,
)
{
  setMatch(
    id: $id,
    date: $date,
    type: $type,
    local: $local,
    visitor: $visitor,
  ) {
    match
    {
      id
      date
      type
      local {
        id
      }
      visitor {
        id
      }
    }
  }
}
`

export const SAVE_MATCH = `
mutation Save(
  $date: DateTime!,
  $type: String!,
  $local: Int!,
  $visitor: Int!,
)
{
  saveMatch(
    date: $date,
    type: $type,
    local: $local,
    visitor: $visitor,
  ) {
    match
    {
      id
    }
  }
}
`

export const DELETE_MATCH = `
mutation Delete($id: Int!)
{
  deleteMatch(id: $id)
  {
    id
  }
}
`

export const SET_PLAYER = `
mutation Set(
  $id: Int!,
  $name: String,
  $photo: Int,
  $isActive: Boolean,
  $team: Int,
  $type: Int,
)
{
  setPlayer(
    id: $id,
    name: $name,
    photo: $photo,
    isActive: $isActive,
    team: $team,
    type: $type,
  ) {
    player
    {
      id
      name
      isActive
      photo {
        id
      }
      team {
        id
      }
      type {
        id
      }
    }
  }
}
`

export const SAVE_PLAYER = `
mutation Save(
  $name: String!,
  $photo: Int!,
  $isActive: Boolean!,
  $team: Int!,
  $type: Int!,
)
{
  savePlayer(
    name: $name,
    photo: $photo,
    isActive: $isActive,
    team: $team,
    type: $type,
  ) {
    player
    {
      id
    }
  }
}
`

export const DELETE_PLAYER = `
mutation Delete($id: Int!)
{
  deletePlayer(id: $id)
  {
    id
  }
}
`

export const SET_PLAYER_TYPE = `
mutation Set(
  $id: Int!,
  $name: String,
)
{
  setPlayerType(
    id: $id,
    name: $name,
  ) {
    playerType
    {
      id
      name
    }
  }
}
`

export const SAVE_PLAYER_TYPE = `
mutation Save(
  $name: String!,
)
{
  savePlayerType(
    name: $name,
  ) {
    playerType
    {
      id
    }
  }
}
`

export const DELETE_PLAYER_TYPE = `
mutation Delete($id: Int!)
{
  deletePlayerType(id: $id)
  {
    id
  }
}
`

export const SET_SCORE = `
mutation Set(
  $id: Int!,
  $min: Int,
  $player: Int,
  $match: Int,
)
{
  setScore(
    id: $id,
    min: $min,
    player: $player,
    match: $match,
  ) {
    score
    {
      id
      min
      player {
        id
      }
      match {
        id
      }
    }
  }
}
`

export const SAVE_SCORE = `
mutation Save(
  $min: Int!,
  $player: Int!,
  $match: Int!,
)
{
  saveScore(
    min: $min,
    player: $player,
    match: $match,
  ) {
    score
    {
      id
    }
  }
}
`

export const DELETE_SCORE = `
mutation Delete($id: Int!)
{
  deleteScore(id: $id)
  {
    id
  }
}
`

export const SET_TEAM = `
mutation Set(
  $id: Int!,
  $name: String,
  $logo: Int,
  $description: String,
  $marketValue: Float,
  $rival: Int,
)
{
  setTeam(
    id: $id,
    name: $name,
    logo: $logo,
    description: $description,
    marketValue: $marketValue,
    rival: $rival,
  ) {
    team
    {
      id
      name
      description
      marketValue
      logo {
        id
      }
      rival {
        id
      }
    }
  }
}
`

export const SAVE_TEAM = `
mutation Save(
  $name: String!,
  $logo: Int!,
  $description: String!,
  $marketValue: Float!,
  $rival: Int,
)
{
  saveTeam(
    name: $name,
    logo: $logo,
    description: $description,
    marketValue: $marketValue,
    rival: $rival,
  ) {
    team
    {
      id
    }
  }
}
`

export const DELETE_TEAM = `
mutation Delete($id: Int!)
{
  deleteTeam(id: $id)
  {
    id
  }
}
`

export const SET_USER = `
mutation Set(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
  $teams: [Int],
)
{
  setUser(
    id: $id,
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    teams: $teams,
  ) {
    user
    {
      id
      username
      firstName
      lastName
      email
      isActive
      password
      teams {
        id
      }
    }
  }
}
`

export const SAVE_USER = `
mutation Save(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
  $teams: [Int],
)
{
  saveUser(
    username: $username,
    firstName: $firstName,
    lastName: $lastName,
    email: $email,
    isActive: $isActive,
    password: $password,
    teams: $teams,
  ) {
    user
    {
      id
    }
  }
}
`

export const DELETE_USER = `
mutation Delete($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`

