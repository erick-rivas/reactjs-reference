import React from "react";
import { Formik, Field } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/player_positions/Form.module.css";

const PlayerPositionForm = (props) =>
  <div class={css.module}>
    <div class={css.header}>Player position</div>
    <div class={css.form}>
      <Formik
          initialValues={props.playerPosition}
          onSubmit={props.onSubmit}
          render={(f) => (

      <form onSubmit={f.handleSubmit}>
        
        <label class={css.lbl}>Name</label><br/>
        <Field type="text" name="name"
          class={css.txt} />
        <br/>
        
        {props.error ?
          <div class={css.error}>{props.error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </form>
      )}
      />
    </div>
  </div>;

export default PlayerPositionForm;