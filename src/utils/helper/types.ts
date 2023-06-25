type FunctionVal<Type, Return = any> = {
  (value: Type): Return;
};

type NonCircularStringify = {
  (obj: object): string;
};

type SmartCompare = {
  (check: string[]): (prev: object, next: object) => boolean;
};

export type {FunctionVal, NonCircularStringify, SmartCompare};
