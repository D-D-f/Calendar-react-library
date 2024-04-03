"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysInMonth = exports.GetFirstDayAndTheMonth = exports.GetCurrentDate = void 0;
const GetFirstDayAndTheMonth = (year, monthIndex, date) => {
  const getDate = new Date(year, monthIndex, date);
  const userChosenDay = getDate.getDay();
  const userChosenMonth = getDate.getMonth();
  return {
    userChosenDay,
    userChosenMonth
  };
};
exports.GetFirstDayAndTheMonth = GetFirstDayAndTheMonth;
const GetCurrentDate = () => {
  const getCurrentDate = new Date();
  const currentMonth = getCurrentDate.getMonth();
  const currentDay = getCurrentDate.getDay();
  const currentYear = getCurrentDate.getFullYear();
  return {
    currentDay,
    currentMonth,
    currentYear
  };
};
exports.GetCurrentDate = GetCurrentDate;
const daysInMonth = (indexMonth, year) => {
  const bisextil = year % 4 === 0 ? true : false;
  let nbDays;
  switch (indexMonth) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      nbDays = 31;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      nbDays = 30;
      break;
    case 1:
      nbDays = bisextil ? 29 : 28;
      break;
    default:
      nbDays = -1;
      throw new Error("Month is not defined");
  }
  return nbDays;
};
exports.daysInMonth = daysInMonth;