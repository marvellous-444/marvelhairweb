import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Default styles
import './Appointment.css'; // Import your custom CSS

function AppointmentScheduler() {
  // Initial state includes both date and time
  const [startDate, setStartDate] = useState(new Date());

  // Handle form submission
  const handleSubmit = () => {
    alert(`Appointment Scheduled for: ${startDate}`);
  };

  return (
    <div className="scheduler-container">
      <h1 className="scheduler-title">Book Appointment</h1>
      <div className="scheduler-form">
        <label htmlFor="appointment-date" className="scheduler-label">Select Date and Time</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)} // Set the selected date/time
          showTimeSelect // Enable time selection
          timeFormat="HH:mm" // Time format (24-hour format)
          timeIntervals={15} // Interval between selectable times (15 minutes)
          dateFormat="MMMM d, yyyy h:mm aa" // Date and time format
          className="scheduler-input"
        />

        <button className="scheduler-button" onClick={handleSubmit}>
          Book Now
        </button>
      </div>
    </div>
  );
}

export default AppointmentScheduler;
