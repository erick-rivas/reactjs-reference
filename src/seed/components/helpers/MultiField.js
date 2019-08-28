import * as React from 'react';

import c from 'resources/css/helpers/MultiField.module.css'


class MultiField extends React.Component
{
  render()
  {
    const { values = [] } = this.props;
    const { value = [] } = this.props;

    let selected = {}
    for (let d of value)
      selected[d] = true;

    let items = values.map(v =>
    {
      let isSelected = Boolean(selected[v.value]);
      return (
        <div className={c.item}>
          <input type="checkbox" title={v.value} checked={isSelected} onChange={this.onItemSelected}></input>
          {v.label}
        </div>);
    });

    return (
      <div className={c.module}>
        {items}
      </div>
    );
  }

  constructor(props)
  {
    super(props);
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(e)
  {
    const { setFieldValue, name } = this.props;
    const { value = [] } = this.props;

    const singleChoice = this.props.singleChoice;
    const title = e.currentTarget.title;
    const tVal = !isNaN(title) ? parseInt(title) : title;

    let res = value;
    let pos = res.indexOf(tVal);
    if (pos == -1)
      res.unshift(tVal)
    else res.splice(pos, 1);

    if (!singleChoice)
      setFieldValue(name, res);
    else setFieldValue(name, res[0]);
  }

}

export default MultiField;