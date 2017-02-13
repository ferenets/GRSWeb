export const validateStr = (input, validator) => {
  const {required, regexp, regexpErr, min, max} = validator;

  if (required && input === '') return 'Необхідне поле';
  if (input.length < min) return `Не менше ${min} символів`;
  if (input.length > max) return `Не більше ${max} символів`;
  if (!regexp.test(input)) return regexpErr;

  return '';
};

// export const validateNum = (input, validator) => {
//   const {required, regexp, regexpErr, min, max} = validator;
//
//   if (input === '') return '';
//   if (!regexp.test(input)) return regexpErr;
//   if (parseInt(input) < min) return `Min is ${min}`;
//   if (parseInt(input) > max) return `Max is ${max}`;
//
//   return '';
// };

export const anyValidator = {
  required: false,
  regexp: /^.*$/,
  regexpErr: "Неправильний формат",
  min: 0,
  max: 100
};

export const loginValidator = {
  required: true,
  regexp: /^[a-z]+_[a-z]{2}$/,
  // regexpErr: "Може містити лише латинські літери нижнього регістру та один символ підкреслення '_'",
  regexpErr: "Неправильний формат! [a-z]{1,30}_[a-z]{2}",
  min: 4,
  max: 33
};

export const nameValidator = {
  required: true,
  regexp: /^.*$/,
  // regexpErr: "Може містити лише латинські літери нижнього регістру та один символ підкреслення '_'",
  regexpErr: "Неправильний формат ім'я",
  min: 1,
  max: 50
};

export const pwdValidator = {
  required: false,
  regexp: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z\d]*$/,
  regexpErr: "Пароль повинен містити латинські літери верхнього і нижнього регістрів, а також не менше однієї цифри",
  min: 8,
  max: 20
};
