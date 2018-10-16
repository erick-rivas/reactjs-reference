import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button';

import Header from 'components/_toy/_details/_Header'

import { getDateFormat } from 'components/util/Format';

import styles from 'styles/css/toy-details.module.css';


class Details extends React.Component
{
  componentDidMount()
  {
    const { fetchToy } = this.props;
    const { params } = this.props.match;
    fetchToy(params.id);
  }

  componentDidUpdate()
  {
    const { didSet, ackSet } = this.props;
    const { didDelete, ackDelete } = this.props;

    if (didSet) ackSet();
    if (didDelete) ackDelete();
    if (didDelete)
      this.handleClose();
  }

  deleteToy = (id) =>
  {
    const { deleteToy } = this.props;
    deleteToy(id);
  }

  render() 
  {
    const { toy = {} } = this.props;

    return (
      <div className={styles.module}>

        <div className={styles.header}>
          <Header
            toy={toy}
            setCompleted={this.setCompleted}
            deleteToy={this.deleteToy} />
        </div>

        <div className={styles.content}>
          <div className={styles.details}>
            <div className={styles.name}>{toy.name}</div>
            <div className={styles.description}>{toy.description}</div>
            <div className={styles.assigned}>
              <div className={styles.assignedTitle}>Asignado</div>
            </div>
            <div className={styles.dueDate}>
              <div>Fecha límite</div>
              <Button className={styles.date}> {getDateFormat(toy.deadline)}</Button>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

Details.propTypes = {
  toy: PropTypes.object.isRequired
}

export default Details;