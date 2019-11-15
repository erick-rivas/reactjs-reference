import React, {useState} from "react";
import { useSave, useSet, useQuery, useDetail } from "seed/gql";
import * as queries from "seed/gql/queries";
import { Formik, Field } from "formik";

import MultiField from "seed/components/helpers/MultiField";
import FileField from "seed/components/helpers/FileField";
import Loading from "seed/components/helpers/Loading";

import cx from "classnames";
import styles from "resources/css/examples/player_positions/Form.module.css";

function PlayerPositionForm(props)
{
  const [state, setState] = useState({});

  const { url } = props.match;
  const { player_position_id }  = props.match.params;
  const editMode = player_position_id != null;

  const saveOptions = {
    onCompleted: data =>
    {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    },
    onError: error => setState({ error: "An error has occurred, try again" })
  };

  const [callSave, qSave] = useSave(queries.SAVE_PLAYER_POSITION, saveOptions);
  const [callSet, qSet] = useSet(queries.SET_PLAYER_POSITION, saveOptions);

  const qPlayerPosition = useDetail(queries.PLAYER_POSITION, player_position_id);

  if (editMode && qPlayerPosition.loading) return <Loading />;
  if (editMode && qPlayerPosition.error) return "Error";

  const onSubmit = values =>
  {
    values.id = player_position_id;
    if (editMode) callSet(values);
    else callSave(values);
  };

  const { playerPosition = {} } = qPlayerPosition.data;

  return (
    <div className={styles.module}>
      <div className={styles.header}>Player position</div>
      <div className={styles.form}>
        <Formik
           initialValues={playerPosition}
           onSubmit={onSubmit}
           render={f => (

        <form onSubmit={f.handleSubmit}>
          
          <label className={styles.lbl}>Name</label><br/>
          <Field type="text" name="name"
            className={styles.txt} />
          <br/>
          
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

export default PlayerPositionForm;
