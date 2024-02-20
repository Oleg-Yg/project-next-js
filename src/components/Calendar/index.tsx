"use client";

import React, { useEffect, useState } from "react";
import style from "./styles.module.scss";
import clsx from "clsx";
import { WEEK_DAYS } from "@/components/Calendar/constants";
import { getDays } from "@/components/Calendar/utils";
import { addMonths, format, isSameDay, isSameMonth, subMonths } from "date-fns";
import { ru } from "date-fns/locale";

const Calendar = () => {
  const [days, setDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());

  useEffect(() => {
    setDays(getDays(currentMonth));
  }, [currentMonth]);

  const changeSelectedDate = (day: Date) => {
    setSelectedDate(day);
  };

  const getPreviousMonth = (day: Date) => {
    setCurrentMonth(subMonths(day, 1));
  };

  const getNextMonth = (day: Date) => {
    setCurrentMonth(addMonths(day, 1));
  };

  const nowMonth = format(currentMonth, "LLLL yyyy", {
    locale: ru,
  }).toUpperCase();

  console.log(selectedDate);

  return (
    <div className={style.calendar}>
      <div className={style.month}>
        <button
          className={clsx(style["calendar-prev-next"])}
          onClick={() => getPreviousMonth(currentMonth)}
        >
          {"<"}
        </button>
        <span>{nowMonth}</span>
        <button
          className={clsx(style["calendar-prev-next"])}
          onClick={() => getNextMonth(currentMonth)}
        >
          {">"}
        </button>
      </div>

      <table className={style["calendar-table"]}>
        <thead className={style["calendar-table-thead"]}>
          <tr>
            {WEEK_DAYS.map((day) => (
              <td key={day}>{day}</td>
            ))}
          </tr>
        </thead>

        <tbody>
          {days.map((week: [Date], index) => (
            <tr key={index}>
              {week.map((day: Date, index) => (
                <td key={index} className={style["calendar-table-td"]}>
                  <button
                    className={clsx(style["calendar-table-day"], {
                      [style["now-date"]]: isSameDay(new Date(), day),
                      [style["selected-date"]]: isSameDay(selectedDate, day),
                      [style["prev-or-next-date"]]: !isSameMonth(
                        day,
                        currentMonth
                      ),
                    })}
                    onClick={() => changeSelectedDate(day)}
                  >
                    {day.getDate()}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
