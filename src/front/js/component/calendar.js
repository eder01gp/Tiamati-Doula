import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/calendar.css";

export const Calendar = () => {
  const { store } = useContext(Context);
  let currentDate = new Date();
  let currentDay = new Date().getDate();
  let month = "";
  let year = "";
  const [monthNum, setMonthNum] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  ///// --- FUNCTIONS --- /////
  const previousMonth = () => {
    if (monthNum != 0) {
      setMonthNum(monthNum - 1);
    } else {
      setMonthNum(11);
      setCurrentYear(currentYear - 1);
    }
    setNewDate(monthNum, currentYear);
    month;
    year;
  };

  const nextMonth = () => {
    if (monthNum != 11) {
      setMonthNum(monthNum + 1);
    } else {
      setMonthNum(0);
      setCurrentYear(currentYear + 1);
    }
    setNewDate(monthNum, currentYear);
  };

  const setNewDate = (mN, cY) => {
    year = cY;
    month = store.monthsNames[mN];
  };

  /*return the number of the week day == first day of month*/
  const startDay = () => {
    let start = new Date(currentYear, monthNum, 1);
    /*this makes the week start on Monday & end on Sunday*/
    return start.getDay() - 1 == -1 ? 6 : start.getDay() - 1;
  };

  //*return the number of the week day == last day of month*//
  const endDay = () => {
    let end = new Date(currentYear, monthNum, store.endDays[monthNum]);

    if (monthNum == 1) {
      if (
        (currentYear % 4 == 0 && currentYear % 100 != 0) ||
        currentYear % 400 == 0
      ) {
        end = new Date(currentYear, monthNum, 29);
      }
    }

    /*this makes the week start on Monday & end on Sunday*/
    return end.getDay() - 1 == -1 ? 6 : end.getDay() - 1;
  };

  const getTotalDays = (monthN) => {
    let maxDays = store.endDays[monthN];

    /*check if is leap year */
    if (monthN == 1) {
      if (
        (currentYear % 4 == 0 && currentYear % 100 != 0) ||
        currentYear % 400 == 0
      ) {
        maxDays += 1;
      }
    }
    return maxDays;
  };

  //* 3 functions for generate calendar day numbers*//
  const generateMonthDays = () => {
    let days = [];
    for (let i = 1; i <= getTotalDays(monthNum); i++) {
      days.push(i);
    }
    return days;
  };
  const days = generateMonthDays();

  const generatePrevMonthDays = () => {
    let prevMonthDays = [];
    for (let i = startDay(); i > 0; i--) {
      prevMonthDays.push(
        getTotalDays(monthNum - 1 == -1 ? 11 : monthNum - 1) - (i - 1)
      );
    }
    return prevMonthDays;
  };
  const prevMonthDays = generatePrevMonthDays();

  const generateNextMonthDays = () => {
    let nextMonthDays = [];
    let d = 0;
    for (let i = endDay(); i < 6; i++) {
      d += 1;
      nextMonthDays.push(d);
    }
    return nextMonthDays;
  };
  const nextMonthDays = generateNextMonthDays();

  /// --- RENDER --- ///
  return (
    <div className="calendar ms-5">
      <div id="calendar-header" className="d-flex">
        <div id="prev-month" className="mt-2 float-start ms-2">
          <i
            id="prev-arrow"
            type="button"
            className="fa-solid fa-caret-left fa-2x"
            onClick={() => previousMonth()}
          ></i>
        </div>

        <div id="month" className="m-auto mt-2 pt-1 me-1">
          <h6>{month == "" ? store.monthsNames[monthNum] : month}</h6>
        </div>

        <div id="year" className="m-auto ms-1 mt-2 pt-1">
          <h6>{year == "" ? currentYear : year}</h6>
        </div>

        <div id="next-month" className="mt-2 float-end me-2">
          <i
            id="next-arrow"
            type="button"
            className="fa-solid fa-caret-right fa-2x"
            onClick={() => nextMonth()}
          ></i>
        </div>
      </div>

      <div className="calendar-body-row d-flex">
        {store.weekDays.map((i) => {
          return (
            <div key={i} className="calendar-week-day">
              <b>{i}</b>
            </div>
          );
        })}
      </div>

      <div className="calendar-body-columns">
        {prevMonthDays.map((prev) => {
          return (
            <div key={prev} className="calendar-prev-month-day">
              {prev}
            </div>
          );
        })}
        {days.map((day) => {
          if (
            day == currentDay &&
            monthNum == currentDate.getMonth() &&
            currentYear == currentDate.getFullYear()
          ) {
            return (
              <div key={day} id="today" classNamec={"calendar-num-day"}>
                <b>{day}</b>
              </div>
            );
          } else {
            return (
              <div key={day} className="calendar-num-day">
                {day}
              </div>
            );
          }
        })}
        {nextMonthDays.map((next) => {
          return (
            <div key={next} className="calendar-next-month-day">
              {next}
            </div>
          );
        })}
      </div>
    </div>
  );
};
