import React from "react";
import cx from "classnames";
import { Formik, Field } from "formik";
import MultiField from "seed/components/helpers/MultiField";
import FileField from "seed/components/helpers/FileField";
import css from "resources/css/seed/examples/teams/Form.module.css";

const TeamForm = (props) =>
  <div class={css.module}>
    <div class={css.header}>Team</div>
    <div class={css.form}>
      <Formik
          initialValues={props.team}
          onSubmit={props.onSubmit}
          render={(f) => (

      <form onSubmit={f.handleSubmit}>
        
        <label class={css.lbl}>Name</label><br/>
        <Field type="text" name="name"
          class={css.txt} />
        <br/>
        
        <label class={css.lbl}>Logo</label><br/>
        <FileField name="logo"
          accept="image/*" setFieldValue={f.setFieldValue}
          class={css.fil}  />
        { f.values.logo ?
          <img src={f.values.logo.url} class={css.img} /> : null }
        
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
          {props.teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
        </Field>
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

export default TeamForm;