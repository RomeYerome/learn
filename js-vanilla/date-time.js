`DATES & TIMES`;

// the date constructor in javascript creates a date object.

`Today's Date`;
// If you create a new date object without arguments, you get a date object with today's date

const today = new Date(); // returns a date object with today's date for example 2022-02-03T14:00:00.000Z


`Specific Date`;
// To create a date argument with a specific date, pass in the date as an argument

const birthday = new Date('2/3/1987'); // returns a date object with February 3rd 1987


`Now: Time in Milli Seconds`;
// the Date.now() method is a static method that gives you the no of milliseconds since 00:00 on January 1st 1970 till now

Date.now(); // returns no of milli seconds since 1st jan 1970 till now


`Parse: Time in Milli Seconds for Specific Date`;
// The Date.parse(date string) method gives you the no of milliseconds between the given date-time and 00:00 on January 1st 1970

Date.parse('04 Dec 1995 00:12:00 GMT'); // returns the number of milliseconds btw the given date-time and jan 1st 1970


`getFullYear() - 4 Digit year`;
today.getFullYear(); // returns the 4 digit year eg 2022
today.setFullYear(2023); // sets the year of the today date object

`getMonth() - Current Month: 0 - 11`;
today.getMonth(); // returns current month btw 0 (jan) to 11 (dec)
today.setMonth(11); // sets the month of the 'today' date object to December

`getDate() - Day of the Month: 1 - 31`;
today.getDate(); // returns day of the month from 1 to 31
today.setDate(13); // sets the day of the month to the 13th

`getDay() - Day of the week: 0-6`;
today.getDay(); // returns day of the week from 0 to 6
// you can't set day of the week, once you set the day of the month (setDate) it already corresponds to a day of the week

`getHours() - Current Hour: 0 - 23`;
today.getHours(); // returns the current hour btw 0 to 23
today.setHours(22); // sets the hour to 11pm


`getMinutes() - Current Minute: 0 - 59`;
today.getMinutes(); // returns current minute btw 0 to 59
today.setMinutes(55); // sets the minute to 55

`getSeconds() - Current Second: 0 - 59`;
today.getSeconds(); // returns current sec btw 0 to 59
today.setSeconds(30); // sets the seconds to 30


`getTime() - Seconds since Jan 1st 1970`;
today.getTime(); // returns no of milliseconds since 00:00 jan 1, 1970
today.setTime(); // sets the no of milliseconds since Jan 1, 1970


`getTimezoneOffset() - Time Diff btw UTC and Current timezone`;
today.getTimezoneOffset(); // returns timezone offset in minutes to UTC time


`toDateString() - Date as String in local timezone `;
today.toDateString(); // returns the date as a string and in the local timezone


`toISOString() - Date as String in ISO format and UTC timezone`;
today.toISOString(); // returns the full date as a string in standard iso format with zero offset from utc eg. 2011-11-22T05:44:56.000Z


`toLocaleDateString()`;
today.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }); // returns string of the date portion in language local to the user agent. takes modifying option object as argument


`toLocaleString()`;
today.toLocaleString('en-GB', { timeZone: 'UTC', month: 'short' }); //Converts a date and time to a string by using the current or specified locale.


// If you add timeZone: 'UTC' you'll get the equivalent UTC value

// If you use set instead of get, you can alter the values of a stored date

console.log(today.getUTCDate());