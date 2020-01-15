import React, {useState} from "react";
import cx from "classnames";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import { Formik, Field } from "formik";
import MultiField from "seed/components/helpers/MultiField";
import FileField from "seed/components/helpers/FileField";
import Loading from "seed/components/helpers/Loading";
import styles from "resources/css/examples/matches/Form.module.css";

const TEAMS  = `
{
  teams { }
}
`;

function MatchForm(props)
{
  const [state, setState] = useState({});

  const { url } = props.match;
  const { match_id }  = props.match.params;
  const editMode = match_id != null;

  const saveOptions = {
    onCompleted: (data) =>
    {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setState({ error: "An error has occurred, try again" })
  };

  const [callSave, qSave] = useSave(queries.SAVE_MATCH, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_MATCH, saveOptions);

  const qMatch = useDetail(queries.MATCH, match_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qMatch.loading) return <Loading />;
  if (editMode && qMatch.error) return "Error";

  const onSubmit = (values) =>
  {
    values.id = match_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { match = {} } = qMatch.data;
  const { teams = [] } = qTeams.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>Match</div>
      <div className={styles.form}>
        <Formik
           initialValues={match}
           onSubmit={onSubmit}
           render={(f) => (

        <form onSubmit={f.handleSubmit}>
          
          <label className={styles.lbl}>Date</label>
          <Field type="date" name="date"
            className={styles.dte} />
          <br/>
          
          <label className={styles.lbl}>Type</label>
          <Field component="select" name="type.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            <option value="FRIENDSHIP">Friendship</option>
            <option value="LEAGUE">League</option>
            <option value="CUP">Cup</option>
          </Field>
          <br/>
          
          <div>
          <label className={styles.lbl}>Local</label>
          <Field component="select" name="local.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
          </Field>
          <br/>
          </div>
          
          <div>
          <label className={styles.lbl}>Visitor</label>
          <Field component="select" name="visitor.id"
            className={styles.ops} >
            <option value="">Select an option</option>
            { teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
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

export default MatchForm;
