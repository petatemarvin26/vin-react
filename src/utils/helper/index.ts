import {FunctionVal} from './types';

const hasLetter: FunctionVal<string> = (value) => {
  return /(?=([A-Za-z]))/.test(value);
};

export {hasLetter};
