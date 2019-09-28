/*
__Seed builder__v1.0
*/

import React, { useEffect } from 'react';

function Auth(props)
{
   useEffect(() => {
    const userId = sessionStorage.getItem('id');
    if (userId == null)
      return props.history.replace(`/examples/login`);
  });

  return <div></div>;
}

export default Auth;
