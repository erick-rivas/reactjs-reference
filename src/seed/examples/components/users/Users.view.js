/*
__Seed builder__
  (Read_only) Example view
  Be careful copying content
*/

import React from "react";
import { BrowserRouter} from "react-router-dom";
import { Route } from "seed/helpers"
import { Link, NavLink } from "react-router-dom";

import UserDetails from "seed/examples/components/users/UserDetails";
import UserList from "seed/examples/components/users/UserList";
import UserFormCreate from "seed/examples/components/users/UserFormCreate";
import UserFormEdit from "seed/examples/components/users/UserFormEdit";
import { ModalRoute } from "seed/helpers";

const UsersView = () =>
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
      component={UserFormCreate} />
    <ModalRoute
      path="/:userId(\d+)/edit"
      component={UserFormEdit} />

    </div>
  </BrowserRouter>;

UsersView.propTypes = {};

export default UsersView;