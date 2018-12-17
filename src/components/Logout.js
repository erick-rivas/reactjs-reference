import React from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'


class Logout extends React.Component
{
  render() 
  {
    const { isLogged = false } = this.props;
    const redirect =
      !isLogged ? <Redirect to='/login' /> : null;
    return <div>{redirect}</div>;
  }
}

Logout.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

export default Logout;