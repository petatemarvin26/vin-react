import {CSSProperties, DragEventHandler} from 'react';

type Props = {
  src: string;
  className?: string;
  style?: CSSProperties;
  draggable?: boolean;
  onLoad?: () => void;
  onDragStart?: DragEventHandler<HTMLImageElement>;
};

type States = {};

export type {Props, States};
