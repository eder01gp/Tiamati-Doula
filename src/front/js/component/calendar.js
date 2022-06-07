import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/calendar.css";

export const Calendar = () => {
  const { store } = useContext(Context);
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  const [monthNum, setMonthNum] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  let month = "";
  let year = "";

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

  //*this makes the week start on Monday & end on Sunday*//
  const startDay = () => {
    let start = new Date(currentYear, monthNum, 1);
    return start.getDay() - 1 == -1 ? 6 : start.getDay() - 1;
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

  //* 3 functions for calendar day numbers*//
  const generateDaysOFmonth = () => {
    let days = [];
    for (let i = 1; i <= getTotalDays(monthNum); i++) {
      days.push(i);
    }
    return days;
  };
  const days = generateDaysOFmonth();

  const prevMonthDays = () => {
    let prevDays = [];
    for (let i = startDay(); i > 0; i--) {
      prevDays.push(getTotalDays(monthNum - 1) - (i - 1));
    }
    return prevDays;
  };
  const prevDays = prevMonthDays();

  const nextMonthDays = () => {
    let nextDays = [];
    for (let i = store.endDays[monthNum]; i > 0; i++) {
      nextDays.push(getTotalDays(monthNum + 1));
      return nextDays;
    }
  };
  const nextDays = nextMonthDays();
  console.log(nextDays);

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
        {prevDays.map((x) => {
          return (
            <div key={x} className="calendar-prev-num-day">
              {x}
            </div>
          );
        })}
        {days.map((day) => {
          if (day == currentDay) {
            return (
              <div key={day} id="today" className="calendar-num-day">
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
      </div>
    </div>
  );
};
