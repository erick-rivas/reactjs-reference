import $ from 'ajax';
import * as Const from 'actions/helpers/const';

class Files
{
  upload = (formWrapper, callback) =>
  {
    let url = `${Const.SRC_URL}/files`;
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
          body: json.url,
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