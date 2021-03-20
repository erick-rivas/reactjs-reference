/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React from "react";
import $ from "jquery";
import CircularProgress from "@material-ui/core/CircularProgress";
import css from "resources/css/seed/FileField.module.css";
import { API_URL } from "settings";

class FileField extends React.Component {

  render() {
    const { className, accept, multiple = false } = this.props;
    return (
      <form encType="multipart/form-data">
        <input name="file" type="file" className={className} accept={accept} onChange={this.onFileChange} multiple={multiple}></input>
      </form>
    );
  }

  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    const { setFieldValue, name, multiple } = this.props;
    const { uploadFile } = this.props;
    const callback = (res) => {
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



const uploadFile = (formWrapper, callback) => {
  let url = `${API_URL}/files/`;
  $.ajax({
    url: url,
    type: "POST",
    data: new FormData(formWrapper),
    cache: false,
    contentType: false,
    processData: false,
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      return myXhr;
    },
    success: (json) => {
      callback({
        body: json,
        ok: true
      });
    },
    error: (error) => {
      callback({
        body: error,
        ok: false
      });
    }
  });
};

export default FileField;