import React from "react";
import { Formik, Field } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/users/Form.module.css";

const UserForm = (props) =>
  <div class={css.module}>
    <div class={css.header}>User</div>
    <div class={css.form}>
      <Formik
          initialValues={props.user}
          onSubmit={props.onSubmit}
          render={(f) => (

      <form onSubmit={f.handleSubmit}>
        
        <div>
        <label class={css.lbl}>Teams</label>
        <div class={css.mul}>
        <MultiField name="teams"
          values={props.teams.map((e, idx) => { return {value: e, label: e.id}; }) }
          setFieldValue={f.setFieldValue} value={f.values.teams} />
        </div>
        <br/>
        </div>
        
        {props.error ?
          <div class={css.error}>{props.error}</div> : null}
        <button type="submit" class={css.submit}>Send</button>
      </form>
      )}
      />
    </div>
  </div>;

export default UserForm;