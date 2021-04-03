import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const PlayerList = ({ players }) =>
  <ul class="list-group">
  {
    players.map((player) =>
      <li key={player.id} class="list-group-item">
        <div class="row align-items-center gx-2">
          <div class="col-auto">
            <img class="avatar avatar-xs avatar-4by3" src="/theme/svg/components/placeholder-img-format.svg" alt="Icon" />
          </div>

          <div class="col">
            <h5 class="mb-0">
              <Link to={`/${player.id}`}>PLAYER {player.id}</Link>
            </h5>
            <ul class="list-inline list-separator small">
              <li class="list-inline-item">{ JSON.stringify(player).substring(0,70) + "…" }</li>
              <li class="list-inline-item">{ new Date(player.createdAt).getDate() + "." + (new Date(player.createdAt).getMonth() + 1) + "." + new Date(player.createdAt).getFullYear() }</li>

            </ul>
          </div>

          <div class="col-auto">
            {/* Options */}
            <Link to={`/${player.id}`} className="btn btn-sm btn-white">
              <span class="d-none d-sm-inline-block mr-1">Details</span>
            </Link>
          </div>
        </div>
      </li>
    )
  }
  </ul>

PlayerList.propTypes = {
  players: PropTypes.array.isRequired,
}

export default PlayerList;