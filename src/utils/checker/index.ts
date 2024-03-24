import {FunctionVal, NonCircularStringify, SmartCompare} from './types';

const hasLetter: FunctionVal<string> = (value) => {
  return /(?=([A-Za-z]))/.test(value);
};

const formatNumber = (value: number, options?: Intl.NumberFormatOptions) => {
  const num = Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    ...options
  });
  return parseFloat(num.format(value));
};

/**
 * Remove circular object reference and return the rest
 * @param {object} obj
 * @returns {object}
 */
const nonCircularStringify: NonCircularStringify = (obj) => {
  let temp = new Set();
  return JSON.stringify(obj, function (key, val) {
    if (typeof val === 'object' && val) {
      if (temp.has(val)) return;
      temp.add(val);
    }
    return val;
  });
};

const smartCompare: SmartCompare = (checks) => {
  return (prev, next) => {
    for (const check of checks) {
      let _check = check.includes('.') ? check.split('.') : check,
        flag = false,
        _prev = prev,
        _next = next;

      if (Array.isArray(_check)) {
        for (const prop of _check) {
          _prev = _prev[prop];
          _next = _next[prop];
        }
      } else {
        _prev = prev[check];
        _next = next[check];
      }

      if (typeof _prev === 'object') {
        flag = nonCircularStringify(_prev) === nonCircularStringify(_next);
        // } else if (typeof _prev === 'function') {
        //   flag = String(_prev) === String(_next);
      } else {
        flag = _prev === _next;
      }

      if (!flag) return false;
    }
    return true;
  };
};

export {hasLetter, formatNumber, smartCompare};
