/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import * as React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import redux from 'seed/helpers/redux';

import styles from 'resources/css/helpers/FileField.module.css';

class Loading extends React.Component
{
  render()
  {
    const {className, accept} = this.props;
    return (
      <form encType="multipart/form-data">
        <input name="file" type="file" className={className} accept={accept} onChange={this.onFileChange}></input>
       </form>
    );
  }

  /*
  * Component logic
  */

  constructor(props)
  {
    super(props);
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(e)
  {
    const { setFieldValue, name } = this.props;
    const { uploadFile } = this.props;
    const callback = res =>
      setFieldValue(name, res.body);
    uploadFile(e.target.form, callback);
  }
}

export default redux(Loading);
