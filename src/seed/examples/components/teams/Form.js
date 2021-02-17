import React, { useState } from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import Loading from "seed/components/helpers/Loading";
import View from "seed/examples/views/teams/Form.js";

function TeamForm(props) {
  const { url } = props.match;
  const { team_id } = props.match.params;
  const isEdit = team_id != null;

  const qTeam = useDetail(queries.TEAM, team_id);
  const qTeams = useQuery(`{ teams { } }`);
  const [error, setError] = useState(null);
  const [callSave, qSave] = useSave(queries.SAVE_TEAM, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });
  const [callSet, qSet] = useSet(queries.SET_TEAM, {
    onCompleted: (data) => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setError("An error has occurred, try again")
  });

  if (isEdit && qTeam.loading) return <Loading />;
  if (isEdit && qTeam.error) return "Error";
  const { team = {} } = qTeam.data;
  const { teams = [] } = qTeams.data;

  const onSubmit = (values) => {
    values.id = team_id;
    if (isEdit) callSet(values);
    else callSave(values);
  };

  return <View
    team={team}
    teams={teams}
    error={error}
    onSubmit={onSubmit}
  />;
}

export default TeamForm;