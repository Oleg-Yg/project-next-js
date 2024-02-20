import {
  addWeeks,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

export const getDays = (month: Date) => {
  const startOfCurrentMonth = startOfMonth(month);
  const startOfCalendarWeek = startOfWeek(startOfCurrentMonth, {
    weekStartsOn: 1,
  });
  const beginningOfLastWeek = addWeeks(startOfCalendarWeek, 5);
  const startOfEveryWeek = eachWeekOfInterval(
    {
      start: startOfCalendarWeek,
      end: beginningOfLastWeek,
    },
    { weekStartsOn: 1 }
  );

  return startOfEveryWeek.reduce((acc, startOfWeek) => {
    const eachDayOfWeek = eachDayOfInterval({
      start: startOfWeek,
      end: endOfWeek(startOfWeek, { weekStartsOn: 1 }),
    });
    return (acc = [...acc, eachDayOfWeek]);
  }, [] as any);
};
