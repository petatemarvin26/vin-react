export type Item = {
  label: string;
  value: any;
};

export type HandleSelect = {
  (item: Item): void;
};

export type Props = {
  onSelect: HandleSelect;
  items: Item[];
  selected?: Item;
  placeholder?: string;
  className?: string;
  selectedClassName?: string;
  listClassName?: string;
  containerClassName?: string;
  itemsClassName?: string;
};
