type StylesheetModule = {
  [classname: string]: any;
};

type ClassNames = {
  (...classnames: Array<any>): string;
};

type ConnectStyleProps = {
  /**
   * utility function for Modular Stylesheet
   * - disregard falsy value passed in classes argument
   */
  classNames?: ClassNames;
};

type ConnectStyle = {
  (style: StylesheetModule): <P extends ConnectStyleProps>(
    Component: React.ComponentType<P>
  ) => React.ComponentType<P>;
};

export type {ConnectStyleProps, ClassNames, ConnectStyle};
