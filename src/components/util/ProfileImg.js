import React from 'react'
import PropTypes from 'prop-types'

import classes from 'styles/css/util-profile.module.css';

class ProfileImg extends React.Component
{
  render() 
  {
    const { user = {}} = this.props;
    
    let letter = "";
    if (!user.photo) {
      if (letter === "" && user.name && user.name.length > 0)
        letter = user.name.charAt(0).toUpperCase();
      if (letter === "" && user.email && user.email.length > 0)
        letter = user.email.charAt(0).toUpperCase();
    }

    return (
      <div className={classes.module}>
        <div className={classes.text}>
          <span style={{ color: user.color }}>{letter}</span>
        </div>
        <div
          className={classes.image}
          style={{ backgroundImage: `url("${user.photo}")` }} />
      </div>
    );
  }
}

ProfileImg.propTypes = {
  user: PropTypes.object.isRequired
}

export default ProfileImg;