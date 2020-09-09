import React, {useState} from "react";
import cx from "classnames";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import { Formik, Field } from "formik";
import MultiField from "seed/components/helpers/MultiField";
import FileField from "seed/components/helpers/FileField";
import Loading from "seed/components/helpers/Loading";
import styles from "resources/css/seed/examples/users/Form.module.css";

const TEAMS  = `
{
  teams { }
}
`;

function UserForm(props)
{
  const [state, setState] = useState({});

  const { url } = props.match;
  const { user_id }  = props.match.params;
  const editMode = user_id != null;

  const saveOptions = {
    onCompleted: (data) =>
    {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: (error) => setState({ error: "An error has occurred, try again" })
  };

  const [callSave, qSave] = useSave(queries.SAVE_USER, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_USER, saveOptions);

  const qUser = useDetail(queries.USER, user_id);
  const qTeams = useQuery(TEAMS);

  if (editMode && qUser.loading) return <Loading />;
  if (editMode && qUser.error) return "Error";

  const onSubmit = (values) =>
  {
    values.id = user_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { user = {} } = qUser.data;
  const { teams = [] } = qTeams.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>User</div>
      <div className={styles.form}>
        <Formik
           initialValues={user}
           onSubmit={onSubmit}
           render={(f) => (

        <form onSubmit={f.handleSubmit}>
          
          <div>
          <label className={styles.lbl}>Teams</label>
          <div className={styles.mul}>
          <MultiField name="teams"
            values={ teams.map((e, idx) => { return {value: e, label: e.id}; }) }
            setFieldValue={f.setFieldValue} value={f.values.teams} />
          </div>
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

export default UserForm;
