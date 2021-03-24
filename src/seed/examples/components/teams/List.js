import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/helpers/Loading";
import View from "seed/examples/views/teams/List";

function TeamList(props){
  const qTeams = useQuery(`
  {
    teams {
      name
      description
      marketValue
      logo { }
      rival { }
      identityDocs { }
      players { }
    }
  }`);

  if (qTeams.loading) return <Loading />;
  if (qTeams.error) return "Error";
  const { teams = [] } = qTeams.data;

  return <View
    teams={teams}
  />;
}

export default TeamList;