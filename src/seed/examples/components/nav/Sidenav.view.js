/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { Link, NavLink } from "react-router-dom";

const SidenavView = () =>
  <aside class={`js-navbar-vertical-aside navbar navbar-vertical-aside
    navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered navbar-dark`}>
    <div class="navbar-vertical-container">
      <div class="navbar-vertical-footer-offset">
        <div class="navbar-brand-wrapper justify-content-between">
          {/* Logo */}
          <a class="navbar-brand" href="./index.html" aria-label="Front">
            <img class="navbar-brand-logo" src="/theme/svg/logos/logo-white.svg" alt="Logo" />
            <img class="navbar-brand-logo-mini" src="/theme/svg/logos/logo-short.svg" alt="Logo" />
          </a>

          {/* Vertical Toggle */}
          <button type="button" class={`js-navbar-vertical-aside-toggle-invoker
            navbar-vertical-aside-toggle btn btn-icon btn-xs btn-ghost-dark`}>
            <i class="tio-clear tio-lg"></i>
          </button>
        </div>

        {/* Content */}
        <div class="navbar-vertical-content">
          <ul class="navbar-nav navbar-nav-lg nav-tabs">
          
            {/* Menu */}
            
            {/* Matches */}
            <li class="navbar-item">
              <NavLink
                to="/matches"
                className="nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Matches
                </span>
              </NavLink>
            </li>
            
            {/* Players */}
            <li class="navbar-item">
              <NavLink
                to="/players"
                className="nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Players
                </span>
              </NavLink>
            </li>
            
            {/* Player positions */}
            <li class="navbar-item">
              <NavLink
                to="/player_positions"
                className="nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Player positions
                </span>
              </NavLink>
            </li>
            
            {/* Scores */}
            <li class="navbar-item">
              <NavLink
                to="/scores"
                className="nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Scores
                </span>
              </NavLink>
            </li>
            
            {/* Teams */}
            <li class="navbar-item">
              <NavLink
                to="/teams"
                className="nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Teams
                </span>
              </NavLink>
            </li>
            
            {/* Users */}
            <li class="navbar-item">
              <NavLink
                to="/users"
                className="nav-link"
                activeClassName="active">
                <i class="tio-hashtag nav-icon"></i>
                <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                  Users
                </span>
              </NavLink>
            </li>
            
            <div class="dropdown-divider my-3" style={ {borderTopColor: "#ffffff20"} }></div>
            
            {/* Options */}
            <Link
              to="/logout"
              className="nav-link">
              <i class="tio-sign-out nav-icon"></i>
              <span class="navbar-vertical-aside-mini-mode-hidden-elements text-truncate">
                Logout
              </span>
            </Link>
          </ul>
        </div>
      </div>
    </div>

  </aside>;

SidenavView.propTypes = {};

export default SidenavView;