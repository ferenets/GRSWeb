import classes from './user-editor.scss';
import React from 'react';

import IconEdit from 'material-ui/svg-icons/content/create';
import IconClose from 'material-ui/svg-icons/content/clear';
import IconButton from 'material-ui/IconButton';
// import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';

import TextInput from '../../../../../inputs/text-input';
import ShadowBox from '../../../../../gui/shadow-box';

export default class UserEditor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onCloseEditor,
      onChangeLogin,
      onChangeField,
      onToggleUpdatePassword,
      onChangePassword,
      onChangeConfirmPassword,
      onSubmitUser,
      users: {
        editMode,
        login, loginError,
        fname, fnameError,
        sname, snameError,
        updatePassword,
        pwd, pwdError,
        cpwd, cpwdError,
        submitEnabled,
        loading
      },
    } = this.props;

    return (
      <div className={classes.editor}>
        <ShadowBox>
          <div className={classes.wrapper}>
            <form
              ref="form"
              action="./"
              method="POST"
              encType="multipart/form-data"
              // className={classes.form}
              onSubmit={onSubmitUser}
            >
              <section className={classes.editorHead}>
                <div className={classes.editorHeadCaption}>
                  {`${editMode ? 'Редагувати' : 'Створити'} користувача   "`}
                  <span className={classes.username}>{login}</span>
                  {'"'}
                </div>

                <div className={classes.closeButton}>
                  <IconButton onTouchTap={onCloseEditor}>
                    <IconClose color="#37474F"/>
                  </IconButton>
                </div>
              </section>

              <hr/>

              {editMode
                ? null
                : <div className={classes.input}>
                    <TextInput
                      required
                      type="text"
                      value={login}
                      error={loginError}
                      onChange={(v) => onChangeLogin(v)}
                      placeholder="Ім'я користувача"
                    />
                  </div>
              }

              <div className={classes.input}>
                <TextInput
                  required
                  type="text"
                  value={fname}
                  error={fnameError}
                  onChange={(v) => onChangeField('fname', v)}
                  placeholder="Ім'я"
                />
              </div>

              <div className={classes.input}>
                <TextInput
                  required
                  type="text"
                  value={sname}
                  error={snameError}
                  onChange={(v) => onChangeField('sname', v)}
                  placeholder="Прізвище"
                />
              </div>

              {editMode
                ? <div className={classes.input}>
                    <div className={classes.chb}>
                      <Checkbox
                        label="Змінити пароль"
                        checked={updatePassword}
                        onCheck={onToggleUpdatePassword}
                        labelStyle={{fontWeight: 700, fontSize: '14px'}}
                      />
                    </div>
                  </div>
                : null
              }

              {updatePassword
                ? <div>
                    <div className={classes.input}>
                      <TextInput
                        required
                        type="password"
                        name="pwd"
                        value={pwd}
                        error={pwdError}
                        onChange={(v) => onChangePassword(v)}
                        placeholder="Пароль"
                      />
                    </div>

                    <div className={classes.input}>
                      <TextInput
                        required
                        type="password"
                        name="cpwd"
                        value={cpwd}
                        error={cpwdError}
                        onChange={(v) => onChangeConfirmPassword(v)}
                        placeholder="Підтвердіть пароль"
                      />
                    </div>
                  </div>
                : null
              }

              <div className={classes.submit}>
                <RaisedButton
                  label={loading ? `${editMode ? 'Збереження...' : 'Створення...'}` : `${editMode ? 'Зберегти зміни' : 'Створити користувача'}`}
                  type="submit"
                  backgroundColor="#13a7e7"
                  labelColor="#ffffff"
                  disabled={!submitEnabled || loading}
                  icon={<IconEdit />}
                />
              </div>

            </form>
          </div>
        </ShadowBox>
      </div>
    );
  }
}

UserEditor.propTypes = {
  onCloseEditor: React.PropTypes.func.isRequired,
  onChangeLogin: React.PropTypes.func.isRequired,
  onChangeField: React.PropTypes.func.isRequired,
  onToggleUpdatePassword: React.PropTypes.func.isRequired,
  onChangePassword: React.PropTypes.func.isRequired,
  onChangeConfirmPassword: React.PropTypes.func.isRequired,
  onSubmitUser: React.PropTypes.func.isRequired,
  users: React.PropTypes.object.isRequired,
};
