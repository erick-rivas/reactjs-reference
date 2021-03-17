import React from "react";
import { Formik, Field, Form } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/users/Form.module.css";

const UserForm = ({ user= {}, teams, error, onSubmit }) =>
  <div class={css.module}>
    <div class={css.header}>User</div>
    <div class={css.form}>
      <Formik
          initialValues={user}
          onSubmit={onSubmit}>
     {({ values, setFieldValue}) =>
      <Form>
        <div>
        <label class={css.lbl}>Teams</label>
        <div class={css.mul}>
        <MultiField name="teams"
          values={teams.map((e, idx) => { return {value: e, label: e.id}; }) }
          setFieldValue={setFieldValue} value={values.teams ? values.teams : []} />
        </div>
        <br/>
        </div>
        {error ? <div class={css.error}>{error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </Form> }
      </Formik>
    </div>
  </div>;

export default UserForm;