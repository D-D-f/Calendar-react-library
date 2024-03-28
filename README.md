A React library for displaying a calendar with an input field. This library allows users to select a date easily and provides a callback function to retrieve the selected date value.

Installation
You can install simple-react-library via npm or yarn:

```
npm install react-calendar-input
```

```
yarn add react-calendar-input
```

## Usage with React
```
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
onClick={handleDateChange}
/>
</div>
);
};

export default MyComponent;
```

## Props
attributeNameInput (string, required): The name attribute for the input field.

nameLabel (string, required): The label for the input field.

onChange (function, required): A callback function that receives the selected date value as a parameter.


## Author

DAVID DE FREITAS

## License

This project is licensed under the MIT License.
