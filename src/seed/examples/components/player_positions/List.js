/*
__Seed builder__
  (Read_only) Example component
  Be careful copying content
*/

import React, { useState } from "react";
import { usePagination } from "seed/gql";
import { Loading } from "seed/helpers";
import View from "seed/examples/views/player_positions/List";

function PlayerPositionList() {

  const pageSize = 15;
  const [pageNum, setPageNum] = useState(1);
  const reqPlayerPositions = usePagination(`
  {
    playerPositionPagination {
      totalPages
      playerPositions {
        name
        details
        createdAt
      }
    }
  }`, pageNum, pageSize);

  if (reqPlayerPositions.loading) return <Loading />;
  if (reqPlayerPositions.error) return "Error";
  const { playerPositions = [], totalPages = 0 } = reqPlayerPositions.data.playerPositionPagination;

  const onClickPage = (pageNum) =>
    setPageNum(pageNum);

  return <View
    playerPositions={playerPositions}
    pageNum={pageNum}
    totalPages={totalPages}
    onClickPage={onClickPage}
  />;
}

PlayerPositionList.propTypes = {};

export default PlayerPositionList;