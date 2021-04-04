import React from "react";
import { Link } from "react-router-dom";

const Topnav = () =>
  <header id="header" class="navbar navbar-expand-lg navbar-fixed navbar-height navbar-flush navbar-container navbar-bordered">
    <div class="navbar-nav-wrap">
      <div class="navbar-brand-wrapper">
        {/* Logo */}
        <a class="navbar-brand" href="./index.html" aria-label="Front">
          <img class="navbar-brand-logo" src="/theme/svg/logos/logo.svg" alt="Logo" />
          <img class="navbar-brand-logo-mini" src="/theme/svg/logos/logo-short.svg" alt="Logo" />
        </a>
      </div>

      <div class="navbar-nav-wrap-content-left">
        {/* Navbar Vertical Toggle */}
        <button type="button" class="js-navbar-vertical-aside-toggle-invoker close mr-3">
          <i class="tio-first-page navbar-vertical-aside-toggle-short-align" data-toggle="tooltip" data-placement="right" title="Collapse"></i>
          <i class="tio-last-page navbar-vertical-aside-toggle-full-align" data-template='<div class="tooltip d-none d-sm-block" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>' data-toggle="tooltip" data-placement="right" title="Expand"></i>
        </button>
      </div>

      {/* Secondary Content */}
      <div class="navbar-nav-wrap-content-right">
        <ul class="navbar-nav align-items-center flex-row">

          <li class="nav-item">
            {/* Account */}
            <div class="hs-unfold">
              <a class="js-hs-unfold-invoker navbar-dropdown-account-wrapper"
                data-hs-unfold-options={`{
                  "target": "#accountNavbarDropdown",
                  "type": "css-animation"
                }`}>
                <div class="avatar avatar-sm avatar-circle">
                  <img class="avatar-img" src="/theme/img/160x160/img1.jpg" alt="Profile" />
                  <span class="avatar-status avatar-sm-status avatar-status-success"></span>
                </div>
              </a>

              <div id="accountNavbarDropdown" class="hs-unfold-content dropdown-unfold dropdown-menu dropdown-menu-right navbar-dropdown-menu navbar-dropdown-account" style={ {width: "16rem"} }>
                <div class="dropdown-item-text">
                  <div class="media align-items-center">
                    <div class="avatar avatar-sm avatar-circle mr-2">
                      <img class="avatar-img" src="/theme/img/160x160/img1.jpg" alt="Profile" />
                    </div>
                    <div class="media-body">
                      <span class="card-title h5">Mark Williams</span>
                      <span class="card-text">mark@example.com</span>
                    </div>
                  </div>
                </div>

                <div class="dropdown-divider"></div>

                 {/* Options */}
                <Link to="/logout" className="dropdown-item">
                  <span class="text-truncate pr-2" title="Sign out">Sign out</span>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </header>;

Topnav.propTypes = {};

export default Topnav;