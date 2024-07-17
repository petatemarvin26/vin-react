import {FunctionVal} from '@/utils/types';

/**
 * Check if string has number
 */
const hasLetter: FunctionVal<string> = (value) => {
  return /(?=([A-Za-z]))/.test(value);
};

export {hasLetter};
