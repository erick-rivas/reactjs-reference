// eslint-disable-line max-len
const GQL_MATCH_ = {
    date: "2020-01-01T12:00:00+00:00",
    type: "FRIENDSHIP",
    local:  { id: 1},
    visitor:  { id: 1},
    scores: [ { id: 1} ],
}
export const GQL_MATCH = {
    match: GQL_MATCH_
}
export const GQL_MATCHES = {
    matches: [ GQL_MATCH_ ]
}
export const GQL_MATCH_PAGINATION = {
    matchPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        matches: [ GQL_MATCH_ ]
    }
}

// eslint-disable-line max-len
export const API_MATCH = {
    date: "2020-01-01T12:00:00+00:00",
    type: "FRIENDSHIP",
    local_id:  1,
    visitor_id:  1,
    score_ids: [1],
}
export const API_MATCHES = [API_MATCH]

// eslint-disable-line max-len
const GQL_PLAYER_ = {
    name: "",
    photo: { url: "" },
    isActive: false,
    team:  { id: 1},
    position:  { id: 1},
}
export const GQL_PLAYER = {
    player: GQL_PLAYER_
}
export const GQL_PLAYERS = {
    players: [ GQL_PLAYER_ ]
}
export const GQL_PLAYER_PAGINATION = {
    playerPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        players: [ GQL_PLAYER_ ]
    }
}

// eslint-disable-line max-len
export const API_PLAYER = {
    name: "",
    photo_id: 1,
    is_active: false,
    team_id:  1,
    position_id:  1,
}
export const API_PLAYERS = [API_PLAYER]

// eslint-disable-line max-len
const GQL_PLAYER_POSITION_ = {
    name: "",
    code: "",
    stats: `{"expected_goals": 9651.0}`,
    details: "{}",
}
export const GQL_PLAYER_POSITION = {
    playerPosition: GQL_PLAYER_POSITION_
}
export const GQL_PLAYER_POSITIONS = {
    playerPositions: [ GQL_PLAYER_POSITION_ ]
}
export const GQL_PLAYER_POSITION_PAGINATION = {
    playerPositionPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        playerPositions: [ GQL_PLAYER_POSITION_ ]
    }
}

// eslint-disable-line max-len
export const API_PLAYER_POSITION = {
    name: "",
    code: "",
    stats: `{"expected_goals": 4135.0}`,
    details: "{}",
}
export const API_PLAYER_POSITIONS = [API_PLAYER_POSITION]

// eslint-disable-line max-len
const GQL_SCORE_ = {
    min: 128,
    player:  { id: 1},
    match:  { id: 1},
}
export const GQL_SCORE = {
    score: GQL_SCORE_
}
export const GQL_SCORES = {
    scores: [ GQL_SCORE_ ]
}
export const GQL_SCORE_PAGINATION = {
    scorePagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        scores: [ GQL_SCORE_ ]
    }
}

// eslint-disable-line max-len
export const API_SCORE = {
    min: 128,
    player_id:  1,
    match_id:  1,
}
export const API_SCORES = [API_SCORE]

// eslint-disable-line max-len
const GQL_TEAM_ = {
    name: "",
    logo: { url: "" },
    description: "",
    marketValue: 128.0,
    rival:  { id: 1},
    identityDocs: [{ url: "" }],
    players: [ { id: 1} ],
}
export const GQL_TEAM = {
    team: GQL_TEAM_
}
export const GQL_TEAMS = {
    teams: [ GQL_TEAM_ ]
}
export const GQL_TEAM_PAGINATION = {
    teamPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        teams: [ GQL_TEAM_ ]
    }
}

// eslint-disable-line max-len
export const API_TEAM = {
    name: "",
    logo_id: 1,
    description: "",
    market_value: 128.0,
    rival_id:  1,
    identity_doc_ids: [1],
    player_ids: [1],
}
export const API_TEAMS = [API_TEAM]

// eslint-disable-line max-len
const GQL_USER_ = {
    username: "email@test.com",
    firstName: "FirstName",
    lastName: "LastName",
    email: "email@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    isActive: true,
    teams: [ { id: 1} ],
    profileImage: { url: "" },
}
export const GQL_USER = {
    user: GQL_USER_
}
export const GQL_USERS = {
    users: [ GQL_USER_ ]
}
export const GQL_USER_PAGINATION = {
    userPagination: {
        pageNum: 1,
        pageSize: 1,
        totalPages: 1,
        totalCount: 1,
        users: [ GQL_USER_ ]
    }
}

// eslint-disable-line max-len
export const API_USER = {
    username: "email_1@test.com",
    first_name: "FirstName",
    last_name: "LastName",
    email: "email_1@test.com",
    password: "pbkdf2_sha256$150000$jMOqkdOUpor5$kU/QofjBsopM+CdCnU2+pROhtnxd5CZc7NhUiXNTMc0=",
    is_active: false,
    team_ids: [1],
    profile_image_id: 1,
}
export const API_USERS = [API_USER]