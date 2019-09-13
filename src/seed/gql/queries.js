/*
__Seed builder__v1.0
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const UPDATE_MATCH = `
mutation Update(
  $id: Int!,
  $date: DateTime,
  $type: String,
  $local: Int,
  $visitor: Int,
)
{
  updateMatch(
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

export const CREATE_MATCH = `
mutation Create(
  $date: DateTime!,
  $type: String!,
  $local: Int!,
  $visitor: Int!,
)
{
  createMatch(
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

export const UPDATE_PLAYER = `
mutation Update(
  $id: Int!,
  $name: String,
  $photo: Int,
  $isActive: Boolean,
  $team: Int,
  $type: Int,
)
{
  updatePlayer(
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

export const CREATE_PLAYER = `
mutation Create(
  $name: String!,
  $photo: Int!,
  $isActive: Boolean!,
  $team: Int!,
  $type: Int!,
)
{
  createPlayer(
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

export const UPDATE_PLAYER_TYPE = `
mutation Update(
  $id: Int!,
  $name: String,
)
{
  updatePlayerType(
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

export const CREATE_PLAYER_TYPE = `
mutation Create(
  $name: String!,
)
{
  createPlayerType(
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

export const UPDATE_SCORE = `
mutation Update(
  $id: Int!,
  $min: Int,
  $player: Int,
  $match: Int,
)
{
  updateScore(
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

export const CREATE_SCORE = `
mutation Create(
  $min: Int!,
  $player: Int!,
  $match: Int!,
)
{
  createScore(
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

export const UPDATE_TEAM = `
mutation Update(
  $id: Int!,
  $name: String,
  $logo: Int,
  $description: String,
  $marketValue: Float,
  $rival: Int,
)
{
  updateTeam(
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

export const CREATE_TEAM = `
mutation Create(
  $name: String!,
  $logo: Int!,
  $description: String!,
  $marketValue: Float!,
  $rival: Int,
)
{
  createTeam(
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

export const UPDATE_USER = `
mutation Update(
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
  updateUser(
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

export const CREATE_USER = `
mutation Create(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
  $teams: [Int],
)
{
  createUser(
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

