import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import UserDetails from "seed/examples/components/users/Details";
import UserList from "seed/examples/components/users/List";
import UserFormSave from "seed/examples/components/users/FormSave";
import UserFormSet from "seed/examples/components/users/FormSet";
import { ModalRoute } from "seed/helpers";

const Users = () =>
  <BrowserRouter basename="/examples/users">
    <div class="content container-fluid">

    {/* Header */}
    <div class="page-header">
      <div class="row align-items-end">

        <div class="col-sm">
          <h1 class="page-header-title">Users</h1>
        </div>

        <div class="col-sm-auto">
          <div class="btn-group" role="group">
            <Link to="/create" className="btn btn-primary">
              <i class="tio-add mr-1"></i>Create
            </Link>
          </div>
        </div>

      </div>
    </div>

    {/* List */}
    <UserList />

    {/* Modals */}
    <ModalRoute
        path="/:userId(\d+)"
        component={UserDetails} />
    <ModalRoute
      path="/create"
      component={UserFormSave} />
    <ModalRoute
      path="/:userId(\d+)/edit"
      component={UserFormSet} />

    </div>
  </BrowserRouter>;

Users.propTypes = {};

export default Users;