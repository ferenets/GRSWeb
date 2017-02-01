import classes from './text-input.scss';
import React from 'react';

export default class TextInput extends React.Component {
  render () {
    const {required, placeholder, type, name, id, value, error, onChange} = this.props;

    return (
      <div className={classes.input}>
        <input
          autoComplete="off"
          required={required || false}
          className={classes.in}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <div className={classes.error}>
          <div className={classes.text}>
            {error !== '' ? error : null}
          </div>
        </div>
      </div>
    );
  }
}

TextInput.propTypes = {
  required: React.PropTypes.bool,
  placeholder: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};


TextInput.defaultProps = { 
  error: null,
  name: 'in',
  id: '',
  type: 'text',
  placeholder: ''
};
