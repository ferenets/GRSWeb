import classes from './graph-menu.scss';
import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import _ from 'lodash';

export default class GraphMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      value: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    const {
      dataGraphLabel,
      handleChangeGraphicDisplay
    } = this.props;
    this.setState({value});
    handleChangeGraphicDisplay(_.keys(dataGraphLabel)[index]);
  };

  componentWillReceiveProps(nextProps){
    if (nextProps.dataGraphLabel != this.props.dataGraphLabel) {
      this.setState({
        value: 0
      })
    }
  };

  render() {
    const {dataGraphLabel, title} = this.props;
    const styles = {
      customWidth: {
        width: 200
      },
    };

    return (
      <div className={classes.graphMenuWrap} >

        <SelectField
          floatingLabelText={title}
          value={this.state.value}
          onChange={this.handleChange}
          style={styles.customWidth}
        >
          {_.keys(dataGraphLabel).map((row, ind) =>
            <MenuItem
              value={ind}
              primaryText={dataGraphLabel[row]}
            />
          )}
        </SelectField>

      </div>
    );
  }
}

GraphMenu.PropTypes = {
  dataGraphLabel: React.PropTypes.string.isRequired,
  handleChangeGraphicDisplay: React.PropTypes.func.isRequired,
  title: React.PropTypes.string.isRequired,
};