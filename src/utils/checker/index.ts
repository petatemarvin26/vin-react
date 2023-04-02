import {FunctionVal} from './types';

const toName: FunctionVal<string> = (value) => {
  const initial = value.substring(0, 1).toUpperCase();
  const rest = value.substring(1).toLowerCase();
  return `${initial}${rest}`;
};

const toPascalCase: FunctionVal<string> = (value) => {
  const names = value.split(' ');

  let pascal_name = '';
  let index = 0;

  for (const name of names) {
    pascal_name += name;
    if (index + 1 !== names.length) {
      pascal_name += ' ';
    }
    index += 1;
  }
  return pascal_name;
};

export {toName, toPascalCase};
