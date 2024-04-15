type StylesheetModule = {
  [classname: string]: any;
};

/**
 * ClassNames utility function for Modular Stylesheet
 */
type ClassNames = {
  (classes: Array<any>): string | undefined;
};

type ConnectStyle = {
  (style: StylesheetModule): <P extends {classNames?: ClassNames}>(
    Component: React.ComponentType<P>
  ) => React.ComponentType<P>;
};

export type {ClassNames, ConnectStyle};
