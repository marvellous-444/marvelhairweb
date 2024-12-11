import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Default styles
import './Appointment.css'; // Import your custom CSS

function AppointmentScheduler() {
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = () => {
    alert(`Appointment Scheduled for: ${startDate}`);
  };

  return (
    <div className="scheduler-container">
      <h1 className="scheduler-title">Appointment Scheduler</h1>
      <div className="scheduler-form">
        <label htmlFor="appointment-date" className="scheduler-label">Select Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="scheduler-input"
        />
        <button className="scheduler-button" onClick={handleSubmit}>
          Schedule Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentScheduler;
