import React from "react";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/player_positions/Form.module.css";

const PlayerPositionForm = ({ playerPosition= {}, error, onSubmit }) =>
  <div class={css.module}>
    <div class={css.header}>Player position</div>
    <div class={css.form}>
      <Formik
          initialValues={playerPosition}
          onSubmit={onSubmit}>
     {({ values, setFieldValue}) =>
      <Form>
        <label class={css.lbl}>Name</label><br/>
        <Field type="text" name="name"
          class={css.txt} />
        <br/>
        {error ? <div class={css.error}>{error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </Form> }
      </Formik>
    </div>
  </div>;

export default PlayerPositionForm;