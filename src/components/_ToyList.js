import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Item from 'components/_toy/_Item';
import Details from 'containers/_toy/_Details';
import Modal from 'components/util/Modal';

import styles from 'styles/css/toy-list.module.css';


class ToyList extends React.Component
{
  componentDidMount()
  {
    const { fetchToys } = this.props;
    fetchToys();
  }

  render() 
  {
    const { toys = [] } = this.props;
    const { url } = this.props.match;

    const toyList = toys.map((t) =>
    {
      return (
        <Link to={`${url}/${t.id}`}>
          <Item toy={t} />
        </Link>
      );
    });

    const toyDetails =
      <Modal history={this.props.history}>
        <Details />
      </Modal>

    return (
      <div className={styles.module}>
        <div className={styles.container}>
          {toyList}
        </div>
        <Route
          path={`${url}/:id(\\d+)`}
          render={() => toyDetails} />
      </div>
    );
  }
}

ToyList.propTypes = {
  pets: PropTypes.array.isRequired,
  toys: PropTypes.array.isRequired,
  fetchToys: PropTypes.func.isRequired
}

export default ToyList;