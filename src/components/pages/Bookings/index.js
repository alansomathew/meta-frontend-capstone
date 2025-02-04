import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { fetchAPI, submitAPI } from '../../../utils/fakeAPI';
import pages from '../../../utils/pages';
import BookingForm from './BookingForm';

/**
 * Reducer function to update available booking times based on the selected date.
 * @param {Array} availableTimes - The current list of available times.
 * @param {string} date - The newly selected date.
 * @returns {Array} Updated list of available times.
 */
const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return response.length ? response : availableTimes; 
};

/**
 * Initializes available times when the component mounts.
 * Ensures no duplication by replacing the initial state instead of appending.
 * @returns {Array} Initial available times fetched from the API.
 */
const initializeTimes = () => fetchAPI(new Date());

const Bookings = () => {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  /**
   * Handles form submission and navigates to the confirmation page if successful.
   * @param {Object} formData - The submitted booking data.
   */
  const submitData = (formData) => {
    if (submitAPI(formData)) {
      navigate(pages.get('confirmedBooking').path);
    }
  };

  return (
    <div className="bookings">
      <h2>Table Reservation</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={dispatchOnDateChange} 
        submitData={submitData} 
      />
    </div>
  );
};

export default Bookings;
