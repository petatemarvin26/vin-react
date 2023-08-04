type HandleClickPage = {
  (key: number): (page: number) => void;
};

type OnPageChange = {
  (page: number): void;
};

type State = {
  pages: Array<number>;
};

type Props = {
  className?: string;
  pageClassName?: string;
  currentPage?: number;
  totalItems: number;
  maxPagesDisplay: number;
  maxItemsDisplay: number;
  onPageChange?: OnPageChange;
};

export type {Props, State, HandleClickPage};
