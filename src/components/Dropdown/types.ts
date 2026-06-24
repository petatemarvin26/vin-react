export type Item = {
  label: string;
  value: any;
};

export type HandleSelect = {
  (item: Item): void;
};

export type Props = {
  items: Item[];
  selected?: Item;
  placeholder?: string;
  className?: string;
  selectedClassName?: string;
  listClassName?: string;
  containerClassName?: string;
  itemsClassName?: string;
  disabled?: boolean;
  onSelect: HandleSelect;
};
