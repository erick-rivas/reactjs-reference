import React from "react";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/matches/Form.module.css";

const MatchForm = ({ match= {}, teams, error, onSubmit }) =>
  <div class={css.module}>
    <div class={css.header}>Match</div>
    <div class={css.form}>
      <Formik
          initialValues={match}
          onSubmit={onSubmit}>
     {({ values, setFieldValue}) =>
      <Form>
        <label class={css.lbl}>Date</label>
        <Field type="date" name="date"
          class={css.dte} />
        <br/>
        <label class={css.lbl}>Type</label>
        <Field component="select" name="type.id"
          class={css.ops} >
          <option value="">Select an option</option>
          <option value="FRIENDSHIP">Friendship</option>
          <option value="LEAGUE">League</option>
          <option value="CUP">Cup</option>
        </Field>
        <br/>
        <div>
        <label class={css.lbl}>Local</label>
        <Field component="select" name="local.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {teams.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        <div>
        <label class={css.lbl}>Visitor</label>
        <Field component="select" name="visitor.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {teams.map((e, idx) => <option key={idx} value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        {error ? <div class={css.error}>{error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </Form> }
      </Formik>
    </div>
  </div>;

export default MatchForm;