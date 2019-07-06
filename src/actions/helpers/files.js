/*
__Seed builder__v1.0
  (Read_only) Builder helper
*/

import $ from 'jquery';
import * as Urls from 'util/settings/Urls';

class Files
{
  uploadFile = (formWrapper, callback) =>
  {
    return disp =>
    {
      let url = `${Urls.API_URL}/files/`;
      $.ajax({
        url: url,
        type: 'POST',
        data: new FormData(formWrapper),
        cache: false,
        contentType: false,
        processData: false,
        xhr: function ()
        {
          var myXhr = $.ajaxSettings.xhr();
          return myXhr;
        },
        success: json =>
        {
          callback({
            body: json,
            ok: true
          });
        },
        error: error =>
        {
          callback({
            body: error,
            ok: false
          })
        }
      });

    }
  }
}

export default Files;