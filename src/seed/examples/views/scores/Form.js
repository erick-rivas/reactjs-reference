import React from "react";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/scores/Form.module.css";

const ScoreForm = ({ score, players, matches, error, onSubmit }) =>
  <div class={css.module}>
    <div class={css.header}>Score</div>
    <div class={css.form}>
      <Formik
          initialValues={score}
          onSubmit={onSubmit}>
     {({ values, setFieldValue}) =>
      <Form>
        <label class={css.lbl}>Min</label><br/>
        <Field type="number" name="min"
          class={css.txt} />
        <br/>
        <div>
        <label class={css.lbl}>Player</label>
        <Field component="select" name="player.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {players.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        <div>
        <label class={css.lbl}>Match</label>
        <Field component="select" name="match.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {matches.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        {error ? <div class={css.error}>{error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </Form> }
      </Formik>
    </div>
  </div>;

export default ScoreForm;