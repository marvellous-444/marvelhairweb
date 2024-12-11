import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";


// Component for the Appointment Scheduler
const AppointmentScheduler = () => {
  
    // States to hold the selected date, time, and list of appointments
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [appointments, setAppointments] = useState([]);

  // Handle Date Selection
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // Handle Time Selection
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  // Handle Appointment Submission
  const handleAppointmentSubmit = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both a date and time.");
      return;
    }

    // Convert selected date to a readable string
    const appointmentDate = moment(selectedDate).format("MMMM Do YYYY");

    // Create an appointment object
    const newAppointment = {
      date: appointmentDate,
      time: selectedTime,
    };

    // Add new appointment to the list
    setAppointments([...appointments, newAppointment]);

    // Reset date and time
    setSelectedDate(null);
    setSelectedTime("");
  };

  return (
    <>
      <div>
          <h1>Appointment Scheduler</h1>
          <div>
          <label>Date:</label>
          <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="MMMM d, yyyy"
          />
          </div>
          <div>
          <label>Time:</label>
          <input
              type="time"
              value={selectedTime}
              onChange={handleTimeChange}
          />
          </div>
          <button onClick={handleAppointmentSubmit}>Schedule Appointment</button>

          <h2>Scheduled Appointments:</h2>
          <ul>
          {appointments.map((appointment, index) => (
              <li key={index}>
              {appointment.date} at {appointment.time}
              </li>
          ))}
          </ul>
      </div>
    
    
    </>
  );
};

export default AppointmentScheduler;
