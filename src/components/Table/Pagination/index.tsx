import React, { useEffect, useState } from "react";
import { PaginationProps } from "@/components/Table/Pagination/types";
import {
  HiChevronDoubleLeft as ToStart,
  HiChevronDoubleRight as ToEnd,
  HiChevronLeft as Back,
  HiChevronRight as Next,
} from "react-icons/hi";
import style from "./styles.module.scss";
import clsx from "clsx";

const Pagination: React.FC<PaginationProps> = ({ totalPage, setPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (setPage) {
      setPage(currentPage);
    }
  }, [currentPage, setPage]);

  const onStart = () => {
    setCurrentPage((prev) => (prev = 1));
  };

  const onBack = () => {
    if (currentPage === 1) return;
    setCurrentPage((prev) => prev - 1);
  };

  const onNext = () => {
    if (currentPage === totalPage) return;
    setCurrentPage((prev) => prev + 1);
  };

  const onEnd = () => {
    setCurrentPage((prev) => (prev = totalPage));
  };

  return (
    <div className={style.pagination}>
      <span className={style.info}>
        Page {currentPage} of {totalPage}
      </span>

      <button
        className={clsx(style.button, {
          [style["disabled"]]: currentPage === 1,
        })}
        onClick={onStart}
        disabled={currentPage === 1}
      >
        <ToStart size={22} />
      </button>

      <button
        className={clsx(style.button, {
          [style["disabled"]]: currentPage === 1,
        })}
        onClick={onBack}
        disabled={currentPage === 1}
      >
        <Back size={22} />
      </button>

      <button
        className={clsx(style.button, {
          [style["disabled"]]: currentPage === totalPage,
        })}
        onClick={onNext}
        disabled={currentPage === totalPage}
      >
        <Next size={22} />
      </button>

      <button
        className={clsx(style.button, {
          [style["disabled"]]: currentPage === totalPage,
        })}
        onClick={onEnd}
        disabled={currentPage === totalPage}
      >
        <ToEnd size={22} />
      </button>
    </div>
  );
};

export default Pagination;
