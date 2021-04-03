import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const UserList = ({ users }) =>
  <ul class="list-group">
  {
    users.map((user) =>
      <li key={user.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          <div class="col-auto">
            <img class="avatar avatar-xs avatar-4by3" src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
          </div>

          <div class="col">
            <h5 class="mb-0">
              <Link to={`/${user.id}`}>USER {user.id}</Link>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">{ JSON.stringify(user).substring(0,70) + "…" }</li>
              <li class="list-inline-item">{ new Date(user.createdAt).getDate() + "." + (new Date(user.createdAt).getMonth() + 1) + "." + new Date(user.createdAt).getFullYear() }</li>

            </ul>
          </div>

          <div class="col-auto">
            {/* Options */}
            <Link to={`/${user.id}`} className="btn btn-sm btn-white">
              <span class="d-none d-sm-inline-block mr-1">Details</span>
            </Link>
          </div>
        </div>
      </li>
    )
  }
  </ul>

UserList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UserList;