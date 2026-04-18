/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Modify via builder
*/

export const MATCH = `
{
  match {
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
`;

export const SET_MATCH = `
mutation set_match(
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
    match {
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
`;

export const SAVE_MATCH = `
mutation save_match(
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
    match {
      id
    }
  }
}
`;

export const DELETE_MATCH = `
mutation delete_match($id: Int!)
{
  deleteMatch(id: $id)
  {
    id
  }
}
`;

export const PLAYER = `
{
  player {
    id
    name
    isActive
    salary
    photo {
      id
      url
    }
    team {
      id
    }
    position {
      id
    }
  }
}
`;

export const SET_PLAYER = `
mutation set_player(
  $id: Int!,
  $name: String,
  $photo: Int,
  $isActive: Boolean,
  $salary: Float,
  $team: Int,
  $position: Int,
)
{
  setPlayer(
    id: $id,
    name: $name,
    photo: $photo,
    isActive: $isActive,
    salary: $salary,
    team: $team,
    position: $position,
  ) {
    player {
      id
      name
      isActive
      salary
      photo {
        id
      }
      team {
        id
      }
      position {
        id
      }
    }
  }
}
`;

export const SAVE_PLAYER = `
mutation save_player(
  $name: String!,
  $photo: Int!,
  $isActive: Boolean!,
  $salary: Float!,
  $team: Int!,
  $position: Int!,
)
{
  savePlayer(
    name: $name,
    photo: $photo,
    isActive: $isActive,
    salary: $salary,
    team: $team,
    position: $position,
  ) {
    player {
      id
    }
  }
}
`;

export const DELETE_PLAYER = `
mutation delete_player($id: Int!)
{
  deletePlayer(id: $id)
  {
    id
  }
}
`;

export const PLAYER_POSITION = `
{
  playerPosition {
    id
    name
    code
    stats
    details
  }
}
`;

export const SET_PLAYER_POSITION = `
mutation set_playerPosition(
  $id: Int!,
  $name: String,
  $code: String,
  $stats: GenericScalar,
  $details: GenericScalar,
)
{
  setPlayerPosition(
    id: $id,
    name: $name,
    code: $code,
    stats: $stats,
    details: $details,
  ) {
    playerPosition {
      id
      name
      code
      stats
      details
    }
  }
}
`;

export const SAVE_PLAYER_POSITION = `
mutation save_playerPosition(
  $name: String!,
  $code: String!,
  $stats: GenericScalar!,
  $details: GenericScalar!,
)
{
  savePlayerPosition(
    name: $name,
    code: $code,
    stats: $stats,
    details: $details,
  ) {
    playerPosition {
      id
    }
  }
}
`;

export const DELETE_PLAYER_POSITION = `
mutation delete_playerPosition($id: Int!)
{
  deletePlayerPosition(id: $id)
  {
    id
  }
}
`;

export const SCORE = `
{
  score {
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
`;

export const SET_SCORE = `
mutation set_score(
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
    score {
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
`;

export const SAVE_SCORE = `
mutation save_score(
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
    score {
      id
    }
  }
}
`;

export const DELETE_SCORE = `
mutation delete_score($id: Int!)
{
  deleteScore(id: $id)
  {
    id
  }
}
`;

export const TEAM = `
{
  team {
    id
    name
    description
    marketValue
    logo {
      id
      url
    }
    rival {
      id
    }
  }
}
`;

export const SET_TEAM = `
mutation set_team(
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
    team {
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
`;

export const SAVE_TEAM = `
mutation save_team(
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
    team {
      id
    }
  }
}
`;

export const DELETE_TEAM = `
mutation delete_team($id: Int!)
{
  deleteTeam(id: $id)
  {
    id
  }
}
`;

export const USER = `
{
  user {
    id
    username
    firstName
    lastName
    email
    isActive
    teams {
      id
    }
    profileImage {
      id
      url
    }
  }
}
`;

export const SET_USER = `
mutation set_user(
  $id: Int!,
  $username: String,
  $firstName: String,
  $lastName: String,
  $email: String,
  $isActive: Boolean,
  $password: String,
  $profileImage: Int,
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
    profileImage: $profileImage,
  ) {
    user {
      id
      username
      firstName
      lastName
      email
      isActive
      teams {
        id
      }
      profileImage {
        id
      }
    }
  }
}
`;

export const SAVE_USER = `
mutation save_user(
  $username: String!,
  $firstName: String!,
  $lastName: String!,
  $email: String!,
  $isActive: Boolean!,
  $password: String!,
  $profileImage: Int!,
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
    profileImage: $profileImage,
  ) {
    user {
      id
    }
  }
}
`;

export const DELETE_USER = `
mutation delete_user($id: Int!)
{
  deleteUser(id: $id)
  {
    id
  }
}
`;