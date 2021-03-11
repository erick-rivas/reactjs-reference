import React from "react";
import { Formik, Field } from "formik";
import MultiField from "seed/components/MultiField";
import FileField from "seed/components/FileField";
import css from "resources/css/seed/examples/players/Form.module.css";

const PlayerForm = (props) =>
  <div class={css.module}>
    <div class={css.header}>Player</div>
    <div class={css.form}>
      <Formik
          initialValues={props.player}
          onSubmit={props.onSubmit}
          render={(f) => (

      <form onSubmit={f.handleSubmit}>
        
        <label class={css.lbl}>Name</label><br/>
        <Field type="text" name="name"
          class={css.txt} />
        <br/>
        
        <label class={css.lbl}>Photo</label><br/>
        <FileField name="photo"
          accept="image/*" setFieldValue={f.setFieldValue}
          class={css.fil}  />
        { f.values.photo ?
          <img src={f.values.photo.url} class={css.img} /> : null }
        
        <label class={css.lbl}>Is active</label>
        <Field type="checkbox" name="isActive"
          class={css.chk} />
        <br/>
        
        <div>
        <label class={css.lbl}>Team</label>
        <Field component="select" name="team.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {props.teams.map((e, idx) => <option value={e.id}>{e.id}</option>) }
        </Field>
        <br/>
        </div>
        
        <div>
        <label class={css.lbl}>Position</label>
        <Field component="select" name="position.id"
          class={css.ops} >
          <option value="">Select an option</option>
          {props.playerPositions.map((e, idx) => <option value={e.id}>{e.id}</option>) }
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

export default PlayerForm;