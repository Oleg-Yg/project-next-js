import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import { columns, data1 } from "@/app/gallery/WrapperTable/table.data";
import axios from "axios";
import { getDataTable } from "@/app/gallery/WrapperTable/utils";

const WrapperTable = () => {
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(true);
  const [data, setData] = useState<any>();
  const [dataTable, setDataTable] = useState<any>([]);

  useEffect(() => {
    setIsLoader(true);
    axios
      .get(
        `https://api.dev.thedematerialised.com/api/nfts?limit=${limit}&offset=${
          Number(limit) * (page - 1)
        }`
      )
      .then((response) => {
        setData(response.data);
        setIsLoader(false);
      });
  }, [limit, page]);

  // useEffect(() => {
  //   setIsLoader(true);
  //   axios
  //     .get(
  //       `https://jsonplaceholder.typicode.com/users?limit=${limit}&offset=${
  //         Number(limit) * (page - 1)
  //       }`
  //     )
  //     .then((response) => {
  //       setData(response.data);
  //       setIsLoader(false);
  //     });
  // }, [limit, page]);

  useEffect(() => {
    if (data) {
      setDataTable(getDataTable(data.list, ["id", "name", "createdAt"]));
    }
  }, [data]);

  // useEffect(() => {
  //   if (data) {
  //     setDataTable(getDataTable(data, ["id", "name", "email"]));
  //   }
  // }, [data]);

  console.log("page", page);
  console.log("limit", limit);
  console.log("data", data);

  return (
    <>
      <Table
        isLoader={isLoader}
        columns={columns}
        // data={data1}
        data={dataTable}
        isPagination={true}
        page={page}
        setPage={setPage}
        total={data?.amount as number}
        limit={limit}
        setLimit={setLimit}
      />
    </>
  );
};

export default WrapperTable;
