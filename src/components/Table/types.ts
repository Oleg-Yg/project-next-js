import { Option } from "@/components/Table/Select/types";

export interface TableProps {
  columns: Columns[];
  data: Data[];
  isPagination?: boolean;
  page?: number;
  setPage?: (page: number) => void;
  limit: string;
  setLimit: (limit: string) => void;
  total?: number;
  options?: Option[];
  isSelectableColumns?: boolean;
  isLoader: boolean;
}

interface Columns {
  title: string;
  isSort: boolean;
  columnName: string;
}

interface Data {
  id: string;
  [key: string]: string | number | JSX.Element | (string | JSX.Element)[];
}
