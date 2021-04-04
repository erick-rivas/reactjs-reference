import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import ScriptTag from "seed/helpers/ScriptTag";

const Login = ({ onSubmit, error }) =>
    <main id="content" role="main" class="main">
    <div class="position-fixed top-0 right-0 left-0 bg-img-hero" style={ {height: "32rem", backgroundImage: "url(/theme/svg/components/abstract-bg-4.svg)"} }>
      <figure class="position-absolute right-0 bottom-0 left-0">
        <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1921 273">
          <polygon fill="#fff" points="0,273 1921,273 1921,0 "/>
        </svg>
      </figure>
    </div>

    <div class="container py-5 py-sm-7">
      <a class="d-flex justify-content-center mb-5" href="index.html">
        <img class="z-index-2" src="/theme/svg/logos/logo.svg" alt="Logo" style={ {width: "8rem"} } />
      </a>

      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="card card-lg mb-5">
            <div class="card-body">
              <Formik
                initialValues={ {} }
                 onSubmit={onSubmit}>
             {() =>
              <Form>
                <div class="text-center">
                  <div class="mb-5">
                    <h1 class="display-4">Sign in</h1>
                    <p>Don&apos;t have an account yet? <a href="authentication-signup-basic.html">Sign up here</a></p>
                  </div>
                </div>

                {/* Email */}
                <div class="form-group">
                  <label class="input-label" for="formEmail">Your email</label>
                  <Field type="email" name="email" id="formEmail" class="form-control form-control-lg" tabindex="1" placeholder="email@address.com" required autofocus="1" />
                </div>

                {/* Password */}
                <div class="form-group">
                  <label class="input-label" for="formPassword">
                    <span class="d-flex justify-content-between align-items-center">
                      Password
                      <a class="input-label-secondary" href="#">Forgot Password?</a>
                    </span>
                  </label>

                  <div class="input-group input-group-merge">
                    <Field type="password" name="password" id="formPassword" class="js-toggle-password form-control form-control-lg" tabindex="2" placeholder="password" required
                          data-hs-toggle-password-options={`{
                            "target": "#changePassTarget",
                            "defaultClass": "tio-hidden-outlined",
                            "showClass": "tio-visible-outlined",
                            "classChangeTarget": "#changePassIcon"
                          }`} />
                    <div id="changePassTarget" class="input-group-append">
                      <a class="input-group-text">
                        <i id="changePassIcon" class="tio-visible-outlined"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Remember me */}
                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <Field type="checkbox" name="rememberMe" id="formRememberMe" class="custom-control-input" />
                    <label class="custom-control-label text-muted" for="formRememberMe"> Remember me</label>
                  </div>
                </div>

                { error ?
                <div class="alert alert-soft-danger" role="alert">
                  {error}
                </div> : null }

                <button type="submit" class="btn btn-lg btn-block btn-primary">Sign in</button>
              </Form> }
              </Formik>
            </div>
          </div>

        </div>
      </div>
    </div>

    <ScriptTag content={`
      $('.js-toggle-password').each(function () {
        new HSTogglePassword(this).init()
      });
    `} />

  </main>;

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default Login;