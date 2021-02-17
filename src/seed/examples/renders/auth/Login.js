import React from "react";
import cx from "classnames";
import css from "resources/css/seed/examples/auth/Login.module.css";

const Login = (props) =>
  <div class={css.module}>
    <div class={css.background}
      style={ { backgroundImage: `url(${require("resources/images/wave.svg")})` }}>
      <div class={cx(css.container, "animated zoomIn")}>

          <label class={css.title}>Login</label>
          <form onSubmit={props.onSubmit}>
            <label class={css.emailLbl}>Email</label><br/>
            <input class={css.email}
              name="email"
              type="email"
              required /><br/>
            <label class={css.passwordLbl}>Password</label><br/>
            <input class={css.password}
              name="password"
              type="password"
              required /><br/>
            <input class={css.remember}
              name="remember"
              type="checkbox" />
            <label class={css.rememberLbl}>Remember me</label><br/>
            {props.error ?
              <div class={css.error}>{props.error}</div> : null}
            <button type="submit" class={css.submit}>Login</button>
          </form>

      </div>
    </div>
  </div>;

export default Login;