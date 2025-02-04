import { useState } from 'react';
import FormField from './FormField';

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes.length > 0 ? availableTimes[0] : ''; // Ensures no undefined error
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ['Birthday', 'Anniversary'];

  // Error messages
  const errorMessages = {
    date: 'Please choose a valid date',
    time: 'Please choose a valid time',
    occasion: 'Please choose a valid occasion',
    guests: `Please enter a number between ${minimumNumberOfGuests} and ${maximumNumberOfGuests}`,
  };

  // State management
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);

  // Validations
  const isDateValid = () => !!date;
  const isTimeValid = () => !!time;
  const isNumberOfGuestsValid = () => numberOfGuests >= minimumNumberOfGuests && numberOfGuests <= maximumNumberOfGuests;
  const isOccasionValid = () => !!occasion;

  const areAllFieldsValid = () => 
    isDateValid() && isTimeValid() && isNumberOfGuestsValid() && isOccasionValid();

  // Handlers
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    if (newDate) dispatchOnDateChange(newDate); // Ensures no unnecessary dispatch
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (areAllFieldsValid()) {
      submitData({ date, time, numberOfGuests, occasion });
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormField label="Date" htmlFor="booking-date" hasError={!isDateValid()} errorMessage={errorMessages.date}>
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required 
          onChange={handleDateChange}
        />
      </FormField>

      <FormField label="Time" htmlFor="booking-time" hasError={!isTimeValid()} errorMessage={errorMessages.time}>
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required 
          onChange={(e) => setTime(e.target.value)}
        >
          {availableTimes.map((time) => (
            <option data-testid="booking-time-option" key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Number of guests" htmlFor="booking-number-guests" hasError={!isNumberOfGuestsValid()} errorMessage={errorMessages.guests}>
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required 
          onChange={(e) => setNumberGuests(Number(e.target.value))} // Ensures numeric value
        />
      </FormField>

      <FormField label="Occasion" htmlFor="booking-occasion" hasError={!isOccasionValid()} errorMessage={errorMessages.occasion}>
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required 
          onChange={(e) => setOccasion(e.target.value)}
        >
          {occasions.map((occasion) => (
            <option data-testid="booking-occasion-option" key={occasion} value={occasion}>
              {occasion}
            </option>
          ))}
        </select>
      </FormField>

      <button className="button-primary" type="submit" disabled={!areAllFieldsValid()}>
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
