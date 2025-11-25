/*
__Seed builder__
  (Read_only) Component helper
*/

import React from "react";
import PropTypes from 'prop-types';
import $ from "jquery";
import { API_URL } from "settings";

class FileField extends React.Component {

  render() {
    const { className = "", accept, multiple = false } = this.props;
    return (
      <form className="seed__file" encType="multipart/form-data">
        <input name="file" type="file" className={className}
          accept={accept} onChange={this.onFileChange} multiple={multiple}></input>
      </form>
    );
  }

  constructor(props) {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e) {
    const { name, setFieldValue, setLoading = () => null,
      onCompleted = () => null, onError = () => null, multiple } = this.props;

    const onCompletedWrapper = (res) => {
      if (multiple) {
        if (Array.isArray(res)) {
          setFieldValue(name, res);
          setFieldValue(name + "_ids", res.map((r) => r.id));
          onCompleted(res);
        } else {
          setFieldValue(name, [res]);
          setFieldValue(name + "_ids", [res.id]);
          onCompleted([res]);
        }
      } else {
        setFieldValue(name, res);
        setFieldValue(name + "_id", res.id);
        onCompleted(res);
      }
      setLoading(false);
    }

    const onErrorWrapper = (error) => {
      onError(error)
      setLoading(false);
    }

    setLoading(true)
    uploadFile(e.target.form, onCompletedWrapper, onErrorWrapper);
  }
}

const uploadFile = (formWrapper, onCompleted, onError) => {
  let url = `${API_URL}/files/`;
  $.ajax({
    url: url,
    type: "POST",
    headers: {
      "Authorization": `Token ${sessionStorage.getItem("token")}`
    },
    data: new FormData(formWrapper),
    cache: false,
    contentType: false,
    processData: false,
    xhr: function () {
      var myXhr = $.ajaxSettings.xhr();
      return myXhr;
    },
    success: onCompleted,
    error: onError
  });
};

FileField.propTypes = {
  className: PropTypes.string,
  accept: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  multiple: PropTypes.bool,
  setLoading: PropTypes.func,
  onCompleted: PropTypes.func,
  onError: PropTypes.func
};

export default FileField;