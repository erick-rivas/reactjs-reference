/*
__Seed builder__v0.2.0
  (Read_only) Builder helper
*/

import React from "react";
import css from "resources/css/seed/helpers/MultiField.module.css";

class MultiField extends React.Component {

  render() {
    const { values = [] } = this.props;
    const { value = [] } = this.props;
    const gv = (val) => val.id ? parseInt(val.id) : val;

    let selected = {};
    for (let d of value)
      selected[gv(d)] = true;

    let items = values.map((v) => {
      let isSelected = Boolean(selected[gv(v.value)]);
      return (
        <div className={css.item}>
          <input type="checkbox" checked={isSelected} onChange={() => this.onItemSelected(v.value)}></input>
          {v.label}
        </div>);
    });

    return (
      <div className={css.module}>
        {items}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.onItemSelected = this.onItemSelected.bind(this);
  }

  onItemSelected(selected) {
    const { setFieldValue, name } = this.props;
    const { value = [] } = this.props;
    const gv = (val) => val.id ? val.id : val;

    const singleChoice = this.props.singleChoice;

    let res = value;
    let pos = res.map((r) => gv(r)).indexOf(gv(selected));
    if (pos == -1)
      res.unshift(selected);
    else res.splice(pos, 1);

    if (!singleChoice)
      setFieldValue(name, res);
    else setFieldValue(name, res[0]);
  }
}

export default MultiField;