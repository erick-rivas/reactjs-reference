import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/teams/List";

function TeamList() {
  const reqTeams = useQuery(`
  {
    teams {
      name
      description
      marketValue
      createdAt
      logo { }
      rival { }
      identityDocs { }
      players { }
    }
  }`);

  if (reqTeams.loading) return <Loading />;
  if (reqTeams.error) return "Error";
  const { teams = [] } = reqTeams.data;
  return <View
    teams={teams}
  />;
}

TeamList.propTypes = {}

export default TeamList;