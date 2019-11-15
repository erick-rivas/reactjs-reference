import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import { Formik, Field } from "formik";

import MultiField from "seed/components/helpers/MultiField";
import FileField from "seed/components/helpers/FileField";
import Loading from "seed/components/helpers/Loading";

import cx from "classnames";
import styles from "resources/css/examples/scores/Form.module.css";

const PLAYERS  = `
{
  players { }
}
`;

const MATCHES  = `
{
  matches { }
}
`;

function ScoreForm(props)
{
  const [state, setState] = useState({});

  const { url } = props.match;
  const { score_id }  = props.match.params;
  const editMode = score_id != null;

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: "An error has occurred, try again" })
  };

  const [callSave, qSave] = useSave(queries.SAVE_SCORE, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_SCORE, saveOptions);

  const qScore = useDetail(queries.SCORE, score_id);
  const qPlayers = useQuery(PLAYERS);
  const qMatches = useQuery(MATCHES);

  if (editMode && qScore.loading) return <Loading />;
  if (editMode && qScore.error) return "Error";

  const onSubmit = values =>
  {
    values.id = score_id;
    if (editMode) callSet(values);
    else callSave(values);
  }

  const { score = {} } = qScore.data;
  const { players = [] } = qPlayers.data;
  const { matches = [] } = qMatches.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>Score</div>
      <div className={styles.form}>
        <Formik
           initialValues={score}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          <label className={styles.lbl}>Min</label><br/>
          <Field type="number" name="min"
            className={styles.txt} />
          <br/>
          
          <div>
          <label className={styles.lbl}>Player</label>
          <Field component="select" name="player.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { players.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          
          <div>
          <label className={styles.lbl}>Match</label>
          <Field component="select" name="match.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { matches.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          
          {state.error ?
            <div className={styles.error}>{state.error}</div> : null}
          <button type="submit" className={styles.submit}>Send</button>
        </form>
        )}
        />
      </div>
    </div>
  );
}

export default ScoreForm;
