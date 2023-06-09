import {FunctionVal, NonCircularStringify, SmartCompare} from './types';

const hasLetter: FunctionVal<string> = (value) => {
  return /(?=([A-Za-z]))/.test(value);
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

/**
 * Smart Compare is utility function where it compares the previous and new property of a component
 * @param {Array<string>} checks serve as the property what you want to hookup if gets update
 * @return {boolean} Returns true if has no change return false if has change
 */
export const smartCompare: SmartCompare = (checks) => {
  /**
   * @param {object} prev
   * @param {object} next
   * @returns {boolean}
   */
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
      } else {
        flag = _prev === _next;
      }

      if (!flag) return false;
    }
    return true;
  };
};

const formatNumber = (value: number, options?: Intl.NumberFormatOptions) => {
  const num = Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    ...options
  });
  return parseFloat(num.format(value));
};

export {hasLetter, formatNumber};
