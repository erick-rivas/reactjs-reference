/*
__Seed builder__v0.1.8
  (Read_only) Builder helper
*/

import $ from "jquery";
import { API_URL } from "settings/Config";

class Files
{
  uploadFile(formWrapper, callback)
  {
    return (disp) =>
    {
      let url = `${API_URL}/files/`;
      $.ajax({
        url: url,
        type: "POST",
        data: new FormData(formWrapper),
        cache: false,
        contentType: false,
        processData: false,
        xhr: function ()
        {
          var myXhr = $.ajaxSettings.xhr();
          return myXhr;
        },
        success: (json) =>
        {
          callback({
            body: json,
            ok: true
          });
        },
        error: (error) =>
        {
          callback({
            body: error,
            ok: false
          });
        }
      });
    };
  }
}

export default Files;