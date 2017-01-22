import classes from './text-input.scss';
import React from 'react';

export default class TextInput extends React.Component {
  render () {
    const {required, placeholder, type, name, id, value, error, onChange, border} = this.props;

    return (
      <div className={classes.input}>
        <input
          required={required || false}
          className={classes.in}
          placeholder={placeholder}
          type={type}
          name={name}
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{borderWidth: `${border}px`}}
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

TextInput.defaultProps = { error: null, name: 'in', id: '', type: 'text', placeholder: '', border: 1 };