/*
__Seed builder__v0.1.8
  (Read_only) Builder helper
*/

import React from "react";
import redux from "seed/redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "resources/css/seed/helpers/FileField.module.css";


class FileField extends React.Component
{
  render()
  {
    const { className, accept, multiple = false } = this.props;
    return (
      <form encType="multipart/form-data">
        <input name="file" type="file" className={className} accept={accept} onChange={this.onFileChange} multiple={multiple}></input>
      </form>
    );
  }

  constructor(props)
  {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e)
  {
    const { setFieldValue, name, multiple } = this.props;
    const { uploadFile } = this.props;
    const callback = (res) =>
    {
      if (multiple) {
        if (Array.isArray(res.body)) {
          setFieldValue(name, res.body);
          setFieldValue(name + "_ids", res.body.map((r) => r.id));
        } else {
          setFieldValue(name, [res.body]);
          setFieldValue(name + "_ids", [res.body.id]);
        }
      } else {
        setFieldValue(name, res.body);
        setFieldValue(name + "_id", res.body.id);
      }
    };
    uploadFile(e.target.form, callback);
  }
}

export default redux(FileField);
