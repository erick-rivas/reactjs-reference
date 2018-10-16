import React from 'react'

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CalendarIcon from '@material-ui/icons/DateRange';
import AssignedIcon from '@material-ui/icons/AssignmentInd';

import styles from 'styles/css/toy-add.module.css';


class Add extends React.Component
{

  state = {
    showAssigned: false,
    showDeadline: false
  };

  componentDidUpdate()
  {
    const { didSave, ackSave } = this.props;
    if (didSave) ackSave();
    if (didSave) this.handleClose();
  }


  handleDeadline = () =>
  {
    this.setState({ showDeadline: !this.state.showDeadline });
  }

  handleAssigned = () =>
  {
    this.setState({ showAssigned: !this.state.showAssigned });
  }

  handleClose = () =>
  {
    this.props.history.goBack();
  };

  handleAdd = e =>
  {
    const { params } = this.props.match;
    const { saveToy } = this.props;
    e.preventDefault();
    const target = e.target;
    saveToy(
      target.name ? e.target.name.value : null,
      params.pet);
  }


  render() 
  {
    const assigned = this.state.showAssigned ?
      <div className={styles.to} >
        <div className={styles.toLegend} >To</div>
        <div className={styles.toContainer} >
          <input
            className={styles.toText}
            name='assigned'
            type='email' />
        </div>
      </div> : null;

    const deadline = this.state.showDeadline ?
      <div className={styles.dueDate}>
        <div className={styles.dueDateLegend}>Birth date</div>
        <input
          className={styles.dueDateDate}
          name='deadline'
          type='date' />
      </div> : null;

    return (
      <div className={styles.module}>
        <form onSubmit={this.handleAdd}>
          <div className={styles.header}>
            Nueva tarea
            <IconButton
              className={styles.close}
              onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>
          </div>
          <div className={styles.name} >
            <div className={styles.nameContainer} >
              <input
                className={styles.nameText}
                placeholder='Toy name'
                name='name'
                autocomplete='off'
                autoFocus
                required />
            </div>
          </div>

          {deadline}
          {assigned}

          <textarea
            className={styles.toyContent}
            name='description'
            placeholder='Description' />


          <IconButton
            className={styles.option + ' ' + styles.calendar}
            onClick={this.handleDeadline}>
            <CalendarIcon />
          </IconButton>

          <IconButton
            className={styles.option + ' ' + styles.assigned}
            onClick={this.handleAssigned}>
            <AssignedIcon />
          </IconButton>

          <Button
            className={styles.saveToy}
            type='submit'>Save toy</Button>
        </form>
      </div>
    );
  }
}

export default Add;