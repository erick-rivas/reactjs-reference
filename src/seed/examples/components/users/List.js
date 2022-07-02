/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/components/users/List.view";

function UserList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqUsers = usePagination(`
  {
    userPagination {
      totalPages
      users {
        username
        firstName
        lastName
        email
        isActive
        createdAt
        teams { }
        profileImage { }
      }
    }
  }`, pageNum, pageSize);

  if (reqUsers.loading) return <Loading />;
  if (reqUsers.error) return "Error";
  const { users = [], totalPages = 0 } = reqUsers.data.userPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    users={users}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

UserList.propTypes = {};

export default UserList;