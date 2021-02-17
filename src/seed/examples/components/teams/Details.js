import React from "react";
import { useDetail } from "seed/gql";
import Loading from "seed/components/helpers/Loading";
import Render from "seed/examples/renders/teams/Details.js";

function TeamDetails(props) {
  const { team_id } = props.match.params;

  const qTeam = useDetail(`
  {
    team {
      name
      description
      marketValue
      logo { }
      rival { }
      identityDocs { }
      players { }
    }
  }
  `, team_id);
  if (qTeam.loading) return <Loading />;
  if (qTeam.error) return "Error";
  const { team = {} } = qTeam.data;

  return <Render
    team={team}
  />;
}

export default TeamDetails;