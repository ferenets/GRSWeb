// import _ from 'lodash';

export const pad = (int) => {
  if ( int < 10 ) {
    return '0' + int;
  }
  return '' + int;
};

export const formatPrice = (int) => {
  let integer = `${Math.floor(int / 100)}`;
  const fract = pad(int % 100);

  for ( let i = integer.length - 3; i > 0; i -= 3 ) {
    integer = integer.slice(0, i) + ',' + integer.slice(i);
  }

  return `$${integer}.${fract}`;
};

export const storageAvailable = (type) => {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch(e) {
    return false;
  }
};

export const hasCookie = (name) => {
  const pairs = document.cookie.split(";");

  for ( let i = 0; i < pairs.length; ++i ) {
    if (pairs[i].split("=")[0].trim() === name) return true;
  }
  return false;
};
