import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const generateCalendarGrid = (date) => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const days = daysInMonth(month + 1, year);
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= days; day++) {
      calendarDays.push(
        <div key={day} className="calendar-day" onClick={() => alert(`Clicked on day ${day}`)}>
          {day}
        </div>
      );
    }

    return calendarDays;
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
    setCurrentDate(new Date(newDate));
  };

  const previousMonth = () => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
    setCurrentDate(new Date(newDate));
  };

  return (
    <div className="calendar" style={{ width: '50%' }}>
      <div className="calendar-nav">
        <button onClick={previousMonth}>&lt;</button>
        <span>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="calendar-header">
        {dayHeaders.map((day, index) => (
          <div key={index} className="calendar-header-day">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-body">{generateCalendarGrid(currentDate)}</div>
    </div>
  );
};

export default Calendar;