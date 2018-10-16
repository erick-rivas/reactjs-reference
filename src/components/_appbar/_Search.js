import React from 'react'

import SearchIcon from '@material-ui/icons/Search';

import styles from 'styles/css/appbar-search.module.css';


class Search extends React.Component
{
  render() 
  {
    return (
      <div className={styles.module}>
        <SearchIcon className={styles.icon} />
        <input
          type='text'
          placeholder='Search' />
      </div>
    );
  }
}

export default Search;