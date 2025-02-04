import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Bookings from './';

describe('Booking Page', () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test('should display one or more available booking time options', async () => {
    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>
    );

    // Find all available time options
    const timeOptions = await screen.findAllByTestId('booking-time-option');

    // Ensure at least one time slot is available
    expect(timeOptions.length).toBeGreaterThanOrEqual(1);

    // Validate that each time follows the correct HH:MM format
    timeOptions.forEach((timeOption) => {
      expect(timeOption.value).toMatch(timeFormat);
    });
  });

  test('should update available booking time options when changing the booking date', async () => {
    render(
      <MemoryRouter>
        <Bookings />
      </MemoryRouter>
    );

    const bookingDate = '2023-04-01';
    const dateInput = screen.getByLabelText(/Date/i);

    // Get initial available time options
    const initialTimeOptions = await screen.findAllByTestId('booking-time-option');
    
    // Change the date
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);

    // Wait for updated times to appear
    const updatedTimeOptions = await screen.findAllByTestId('booking-time-option');

    // Ensure the input reflects the selected date
    expect(dateInput).toHaveValue(bookingDate);

    // Validate all time options match HH:MM format
    initialTimeOptions.forEach((timeOption) => {
      expect(timeOption.value).toMatch(timeFormat);
    });
    updatedTimeOptions.forEach((timeOption) => {
      expect(timeOption.value).toMatch(timeFormat);
    });

    // Confirm that time options changed after date selection
    expect(updatedTimeOptions.length).not.toBe(initialTimeOptions.length);
  });

});
