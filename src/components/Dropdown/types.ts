export type Item = {
  label: string;
  value: any;
};

export type HandleSelect = {
  (item: Item): void;
};

export type Props = {
  selected: Item;
  onSelect: HandleSelect;
  items: Item[];
  className?: string;
  selectedClassName?: string;
  listClassName?: string;
  containerClassName?: string;
  itemsClassName?: string;
};
