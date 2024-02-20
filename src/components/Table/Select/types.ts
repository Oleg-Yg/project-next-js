export interface SelectProps {
  options: Option[];
  onChange: (selected: Option["value"]) => void;
}

export interface Option {
  title: string;
  value: string;
}
