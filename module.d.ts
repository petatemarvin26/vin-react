declare module '*.svg' {
  const ReactComponent: React.ElementType<React.SVGAttributes<SVGElement>>;
  const Svg: React.ReactNode;
  export {ReactComponent};
  export default Svg;
}

declare module '*.css';
