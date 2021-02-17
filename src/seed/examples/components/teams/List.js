import React from "react";
import { useQuery } from "seed/gql";
import { NavLink } from "react-router-dom";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/teams/List.js";

function TeamList(props){
  const { url } = props.match;

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
  }
  `);
  if (qTeams.loading) return <Loading />;
  if (qTeams.error) return "Error";
  const { teams } = qTeams.data;

  return <View
    teams={teams}
  />;
}

export default TeamList;