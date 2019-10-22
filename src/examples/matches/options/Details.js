/*
__Seed builder__v0.1.8
*/

import React from 'react';
import { useDelete } from 'seed/gql';
import * as queries from 'seed/gql/queries';
import { Link } from 'react-router-dom';

import cx from 'classnames';
import styles from 'resources/css/examples/matches/options/Details.module.css';

function MatchDetailsOptions(props)
{
    const { url } = props.match;
    const { match_id } = props.match.params;

    const [callDelete, qDelete] = useDelete(queries.DELETE_MATCH,
    {
      onCompleted: data =>
      {
        const backUrl = url.substring(0, url.lastIndexOf('/'));
        props.history.push(backUrl);
       }
    })

    const onClickDelete = () =>
      callDelete({ id: match_id })

    const onClickBack = () =>
    {
      const backUrl = url.substring(0, url.lastIndexOf('/'));
      props.history.push(backUrl);
    }

    return (
      <div className={styles.module}>
        <i className={cx(styles.back, "fas fa-arrow-left")}
          onClick={onClickBack} />
        <div className={styles.options}>
          <Link to={`${url}/edit`}
            className={cx(styles.btn, styles.edit)}>Edit</Link>
          <button className={cx(styles.btn, styles.delete)}
            onClick={onClickDelete}>Delete</button>
        </div>
      </div>
    );
}

export default MatchDetailsOptions;
