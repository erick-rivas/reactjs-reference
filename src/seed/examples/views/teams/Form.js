import React from "react";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/teams/Form.module.css";

const TeamForm = ({ team, teams, error, onSubmit }) =>
  <div class={css.module}>
    <div class={css.header}>Team</div>
    <div class={css.form}>
      <Formik
          initialValues={team}
          onSubmit={onSubmit}>
     {({ values, setFieldValue}) =>
      <Form>
        <label class={css.lbl}>Name</label><br/>
        <Field type="text" name="name"
          class={css.txt} />
        <br/>
        <label class={css.lbl}>Logo</label><br/>
        <FileField name="logo"
          accept="image/*" setFieldValue={setFieldValue}
          class={css.fil}  />
        { values.logo ?
          <img src={values.logo.url} class={css.img} alt="Preview" /> : null }
        <label class={css.lbl}>Description</label><br/>
        <Field type="text" name="description"
          component="textarea" rows="3"
          class={css.txa} />
        <br/>
        <label class={css.lbl}>Market value</label><br/>
        <Field type="number" name="marketValue"
          class={css.txt} />
        <br/>
        <div>
        <label class={css.lbl}>Rival</label>
        <Field component="select" name="rival.id"
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

export default TeamForm;