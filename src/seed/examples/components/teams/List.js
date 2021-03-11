import React from "react";
import { useQuery } from "seed/gql";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/teams/List.js";

function TeamList(props){
  const { url } = props;
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
    url={url}
    teams={teams}
  />;
}

export default TeamList;