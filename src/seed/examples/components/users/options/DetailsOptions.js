import React from "react";
import { useDelete } from "seed/gql";
import * as queries from "seed/gql/queries";
import Render from "seed/examples/renders/users/options/DetailsOptions.js";

function UserDetailsOptions(props) {
    const { url } = props.match;
    const { user_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_USER, {
      onCompleted: (data) => {
        const backUrl = url.substring(0, url.lastIndexOf("/"));
        props.history.push(backUrl);
      }
    });

    const onClickDelete = () =>
      callDelete({ id: user_id });

    const onClickBack = () => {
      const backUrl = url.substring(0, url.lastIndexOf("/"));
      props.history.push(backUrl);
    };

    return <Render
      url={url}
      onClickDelete={onClickDelete}
      onClickBack={onClickBack}    
    />;
}

export default UserDetailsOptions;