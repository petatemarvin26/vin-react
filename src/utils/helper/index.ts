import {FunctionVal} from '@/utils/types';

/**
 * Convert number into desired format
 */
const toFloat = (value: number, options?: Intl.NumberFormatOptions) => {
  const num = Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    ...options
  });
  return parseFloat(num.format(value));
};

/**
 * Convert word into pascal case
 */
const toPascalCase: FunctionVal<string> = (value) => {
  const initial = value.substring(0, 1).toUpperCase();
  const rest = value.substring(1).toLowerCase();
  return `${initial}${rest}`;
};

/**
 * Convert all words into pascal case
 */
const toNameCase: FunctionVal<string> = (value) => {
  const names = value.split(' ');
  let pascal_name = '';
  for (let n = 0; n < names.length; n++) {
    pascal_name += toPascalCase(names[n]);
    if (n !== names.length - 1) {
      pascal_name += ' ';
    }
  }
  return pascal_name;
};

/**
 * This function return flat object
 */
const toFlat: FunctionVal<object> = (obj) => {
  const keys = Object.keys(obj);
  const vals = Object.values(obj);
  let flat_obj: {[k: string]: any} = {};
  for (let k in keys) {
    const val = vals[k];
    if (typeof val === 'object') {
      const fl_obj = toFlat(val),
        fl_keys = Object.keys(fl_obj),
        fl_vals = Object.values(fl_obj);
      for (let fk in fl_keys) {
        flat_obj[`${keys[k]}.${fl_keys[fk]}`] = fl_vals[fk];
      }
      continue;
    }
    flat_obj[keys[k]] = val;
  }
  return flat_obj;
};

export {toFloat, toFlat, toNameCase, toPascalCase};
