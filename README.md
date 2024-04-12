# react-calendar-input

## Overview

react-calendar-input is a React library for displaying a calendar with an input field. This library allows users to easily select a date and provides a callback function to retrieve the selected date value.

## Installation

You can install react-calendar-input via npm or yarn:

```bash
npm install simple-react-calendar-input
``` 
```javascript
import React, { useState } from 'react';
import Calendar from 'react-calendar-input';

const MyComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  return (
    <div>
      <h1>My Calendar</h1>
      <Calendar
        attributeNameInput="dateInput"
        nameLabel="Date"
        onChange={handleDateChange}
      />
    </div>
  );
};

export default MyComponent;
```

## Props
* attributeNameInput (string, required): The name attribute for the input field.
* nameLabel (string, required): The label for the input field.
* onChange (function, required): A callback function that receives the selected date value as a parameter.

## TableDate Component

The `TableDate` component is a React component designed to display a calendar table for selecting dates. It is typically used in conjunction with other components to create a date picker or calendar view within a web application.

## Overview

The `TableDate` component accepts two props:

- `getDate`: A callback function that receives the selected date value as a parameter. This function is called whenever a date is clicked in the calendar.
- `langage`: A string indicating the language used for date formatting. Currently supports "fr" for French and default behavior for other languages.

## Functionality

- The component dynamically generates a calendar table based on the user-selected month and year.
- Users can click on any date within the calendar to select it.
- The selected date is highlighted, and its value is passed back to the parent component through the `getDate` callback function.

## Usage

```javascript
import React from 'react';
import TableDate from './TableDate';

const MyComponent = () => {
  const handleDateSelection = (date) => {
    console.log('Selected date:', date);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <TableDate getDate={handleDateSelection} langage="fr" />
    </div>
  );
};

export default MyComponent;
```

## Author
DAVID DE FREITAS

## License
This project is licensed under the MIT License.