/**
 * Remove circular object reference and return the rest
 */
type NonCircularStringify = {
  (obj: object): string;
};

type O = {
  [key: string]: any;
};

/**
 * Smart Compare is utility function where it compares the previous and new property of a component
 * most of the case it used in `React.memo(Component, smartCompare(['prop1', 'prop1.subprop1']))`
 */
type SmartCompare = {
  (check: string[]): (prev: O, next: O) => boolean;
};

export {NonCircularStringify, SmartCompare};
