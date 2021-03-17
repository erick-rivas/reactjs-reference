import React from "react";
import { useDetail, useDelete } from "seed/gql";
import { DELETE_TEAM } from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/teams/Details";

function TeamDetails(props) {
  const { url } = props.match;
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
  }`, team_id);
  
  const [cDelete] = useDelete(DELETE_TEAM, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qTeam.loading) return <Loading />;
  if (qTeam.error) return "Error";
  const { team = {} } = qTeam.data;

  const onClickDelete = () =>
    cDelete({ id: team_id });

  const onClickBack = () => {
    const backUrl = url.substring(0, url.lastIndexOf("/"));
    props.history.push(backUrl);
  };

  return <View
    team={team}
    onClickDelete={onClickDelete}
    onClickBack={onClickBack}
   />;
}

export default TeamDetails;