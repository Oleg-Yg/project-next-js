import React, { useEffect, useState } from "react";
import { TableProps } from "@/components/Table/types";
import style from "./styles.module.scss";
import Loader from "@/components/Loader";
import Pagination from "@/components/Table/Pagination";
import Select from "@/components/Table/Select";

const Table: React.FC<TableProps> = ({
  columns,
  data,
  isPagination = false,
  page = 1,
  setPage,
  limit,
  setLimit,
  total,
  options = [
    { title: "10", value: "10" },
    { title: "20", value: "20" },
    { title: "40", value: "40" },
  ],
  isSelectableColumns,
  isLoader,
}) => {
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (total && limit) {
      setTotalPage((prev) => (prev = Math.ceil(total / Number(limit))));
    }
  }, [total, limit]);

  const onChangeDropdown = (value: string) => {
    if (setLimit) {
      setLimit(value);
    }
  };

  return (
    <div className={style.wrapperTable}>
      <table className={style.table}>
        <thead>
          <tr className={style.row}>
            {columns.map((column) => (
              <th align={"left"} key={column.title} className={style.th}>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>

        {isLoader ? (
          <tbody>
            <tr>
              <td>
                <Loader />
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className={style.row}>
                {columns.map((column) => (
                  <td key={column.title} className={style.td}>
                    {row[column.columnName]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>

      <div className={style.footer}>
        <div className={style.info}>
          <div className={style.displayInfo}>
            <span className={style.infoText}>Display:</span>
            {options && (
              <Select options={options} onChange={onChangeDropdown} />
            )}
          </div>
          {total && (
            <div>
              <span className={style.infoText}>Total:</span>
              <span>{total}</span>
            </div>
          )}
        </div>

        {isPagination && setPage && (
          <Pagination totalPage={totalPage} setPage={setPage} />
        )}
      </div>
    </div>
  );
};

export default Table;
