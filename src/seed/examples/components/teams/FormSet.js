import React from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/Loading";
import View from "seed/examples/views/teams/Form.js";

function TeamFormSet(props) {
  const { url } = props.match;
  const { team_id } = props.match.params;

  const qTeam = useDetail(queries.TEAM, team_id);
  const qTeams = useQuery(`{ teams { } }`);
  const [callSet, qSet] = useSet(queries.SET_TEAM, {
    onCompleted: () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    }
  });

  if (qTeam.loading) return <Loading />;

  const { team = {} } = qTeam.data;
  const { teams = [] } = qTeams.data;
  const error = qSet.error ? "An error has occurred" : null

  const onSubmit = (values) => {
    values.id = team_id;
    callSet(values);
  };

  return <View
    team={team}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default TeamFormSet;