import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as styles from 'styles/css/login.module.css';


class Login extends React.Component
{
  render() 
  {
    if (!this.state) this.state = {};
    const { error } = this.state;
    const { onLogin } = this.state;

    const errorMessage =
      error ?
        <div className={styles.error + ' animated fadeIn'}>
          <div> {error}</div>
        </div> : null;

    return (
      <div className={styles.module}>
        <div className={styles.container + ' animated zoomIn'}>
          <div className={styles.form}>
            <form onSubmit={onLogin}>

              <h1 className={styles.title}>Login</h1>

              <TextField
                name='email'
                label='Email'
                type='email'
                margin='dense'
                autoFocus
                required
                fullWidth /><br />

              <TextField
                name='password'
                label='Password'
                type='password'
                margin='dense'
                required
                fullWidth /><br />

              <Button
                className={styles.send}
                color='primary'
                variant='raised'
                type='submit'
                fullWidth>
                Send
          </Button>
              <br />
              {errorMessage}
            </form>

            <div>
              <div className={styles.orLine} />
              <div className={styles.orText}> o </div>
            </div>

            <Button
              className={styles.outlook}
              variant='raised'
              fullWidth>
              Login with Outlook
        </Button>
            <br />
            <Button
              className={styles.gmail}
              variant='raised'
              fullWidth>
              Login with Gmail
        </Button>

          </div>

          <div className={styles.signup}>
            Don't have an account
          <Button
              className={styles.invite}
              variant='outlined'>
              Register
        </Button>
          </div>

        </div>
      </div>
    );
  }
}

export default Login;