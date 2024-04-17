# simple-calendar-react-library

## What is it for?

This library allows you to obtain a calendar, where you can define a start and end year. When clicking on a date, through a function, it returns the date in French or English format.

## How to use it?

### Installation is simple, here's the command to run to install it with npm:

```bash
npm install simple-react-calendar-input
```

- Then, to import it:

```javascript
    import { CalendarPicker } from "simple-calendar-react-library";
```

- Using the CalendarPicker component:

```javascript
    <CalendarPicker getDate={getDateBirthday} language="fr" start={1950} end={2024} />
```

* The getDate prop expects a function, with the event as a parameter, which will retrieve the date value.
* The language prop expects the chosen format, "fr" or "eng".
* The start prop allows you to choose the starting year of the calendar.
* The end prop allows you to choose the last year.

## Author
DAVID DE FREITAS

## License
This project is licensed under the MIT License.