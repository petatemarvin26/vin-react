import {CSSProperties, DragEventHandler} from 'react';

type Props = {
  src: string;
  className?: string;
  style?: CSSProperties;
  draggable?: boolean;
  onLoad?: () => void;
  onLoadStart?: () => void;
  onLoadEnd?: () => void;
  onProgress?: (percent: number) => void;
  onDragStart?: DragEventHandler<HTMLImageElement>;
};

type States = {
  src: any;
};

export type {Props, States};
