/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#Date_object
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date     *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Parses a rfc2822 string date representation into date value
 * For rfc2822 date specification refer to : http://tools.ietf.org/html/rfc2822#page-14
 *
 * @param {string} value
 * @return {date}
 *
 * @example:
 *    'December 17, 1995 03:24:00'    => Date()
 *    'Tue, 26 Jan 2016 13:48:02 GMT' => Date()
 *    'Sun, 17 May 1998 03:00:00 GMT+01' => Date()
 */
function parseDataFromRfc2822(value) {
  return new Date(value);
}

/**
 * Parses an ISO 8601 string date representation into date value
 * For ISO 8601 date specification refer to : https://en.wikipedia.org/wiki/ISO_8601
 *
 * @param {string} value
 * @return {date}
 *
 * @example :
 *    '2016-01-19T16:07:37+00:00'    => Date()
 *    '2016-01-19T08:07:37Z' => Date()
 */
function parseDataFromIso8601(value) {
  return new Date(value);
}

/**
 * Returns true if specified date is leap year and false otherwise
 * Please find algorithm here: https://en.wikipedia.org/wiki/Leap_year#Algorithm
 *
 * @param {date} date
 * @return {bool}
 *
 * @example :
 *    Date(1900,1,1)    => false
 *    Date(2000,1,1)    => true
 *    Date(2001,1,1)    => false
 *    Date(2012,1,1)    => true
 *    Date(2015,1,1)    => false
 */
function isLeapYear(date) {
  const d = new Date(date);
  const year = d.getFullYear();

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

/**
 * Returns the string representation of the timespan between two dates.
 * The format of output string is "HH:mm:ss.sss"
 *
 * @param {date} startDate
 * @param {date} endDate
 * @return {string}
 *
 * @example:
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,11,0,0)   => "01:00:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,30,0)       => "00:30:00.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,20)        => "00:00:20.000"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,10,0,0,250)     => "00:00:00.250"
 *    Date(2000,1,1,10,0,0),  Date(2000,1,1,15,20,10,453)   => "05:20:10.453"
 */
function timeSpanToString(startDate, endDate) {
  // throw new Error('Not implemented');
  const sDate = new Date(startDate);
  const eDate = new Date(endDate);
  // console.log("sDate:", sDate);
  // console.log("eDate:", eDate);
  // let sDateSeconds = Date.parse(sDate);
  // let eDateSeconds = Date.parse(eDate);
  // console.log("sDateSeconds:", sDateSeconds);
  // console.log("eDateSeconds:", eDateSeconds);

  const difference = eDate - sDate;
  // console.log('difference:', difference);

  const differenceDate = new Date(difference);
  // console.log("differenceDate:", differenceDate);

  const differenceIso = differenceDate.toISOString();
  // console.log("iso:", differenceIso);

  return differenceIso.slice(11, -1);
}

// THE ROAD TO THE KNOWLEDGE THAT IN JS DATES CAN BE DEDUCTIBLE:

// let hours = difference / 3600000;
// console.log('hours:', hours);
// let hoursFin, minutes, minutesFin, seconds, secondsFin;

// if (difference === 0) {
//   return `00:00:00.000`;
// }

// if (Number.isInteger(hours)) {
//   if (hours >= 1 && hours < 10) {
//     hoursFin = `0${hours}`;
//   } else if (hours > 10) {
//     hoursFin = hours;
//   }
//   return `${hoursFin}:00:00.000`;
// } else {
//   // hours = hours.toFixed(2);
//   // console.log('hours:', hours);

//   if (hours < 1) {
//     hoursFin = '00';
//   } else if (hours < 10) {
//     hoursFin = `0${hours}`;
//   } else {
//     hoursFin = Math.trunc(hours);
//   }
//   console.log('hoursFin:', hoursFin);

//   minutes = (hours - Math.trunc(hours)) * 60;
//   console.log('minutes:', minutes);

//   if (Number.isInteger(minutes)) {
//     if (minutes > 1 && minutes < 10) {
//       minutesFin = `0${minutes}`;
//     } else if (minutes > 10) {
//       minutesFin = minutes;
//     }
//     return `${hoursFin}:${minutesFin}:00.000`;
//   } else {
//     // minutes = minutes.toFixed(2);
//     // console.log('minutes:', minutes);

//     if (minutes < 1) {
//       minutesFin = '00';
//     } else if (minutes < 10) {
//       minutesFin = `0${minutes}`;
//     } else {
//       minutesFin = Math.trunc(minutes);
//     }
//     console.log('minutesFin:', minutesFin);

//     seconds = ((minutes - Math.trunc(minutes)) * 60).toFixed(3);
//     console.log('seconds:', seconds);

//       if (seconds > 1 && seconds < 10) {
//         secondsFin = `0${seconds}`;
//       } else if (seconds > 10) {
//         secondsFin = seconds;
//       }
//       return `${hoursFin}:${minutesFin}:${secondsFin}`;
//   }
// }
// }
// let differenceHours = Math.floor(eDateSeconds - sDateSeconds % 3600000);
// let differenceMinutes = Math.floor(eDateSeconds - sDateSeconds % 600000)
// console.log("hours:", differenceHours);
// console.log("minutes:", differenceMinutes);

// let hours = (difference / 3600000);
// console.log('hours:', hours);
// let hoursFin;

// if (hours < 1) {
//   hoursFin = '00';
// } else if (hours < 10) {
//   let hoursRound = Number(hours).toFixed();
//   hoursFin = `0${hoursRound}`;
// }
// console.log('hoursFin:', hoursFin);

// let minutes = (difference - hours * 3600000);
// console.log('minutes:', minutes);
// let minutesFin;
// if (!Number.isInteger(hours)) {
//   let hoursRound = Number(hours).toFixed();
//   minutesFin = hoursRound * 60 + minutes;
// } else if (minutes < 1) {
//   minutesFin = '00';
// } else if (minutes < 10) {
//   minutesFin = `0${minutes}`;
// } else {
//   minutesFin = minutes;
// }

// console.log('minutesFin:', minutesFin);

// let seconds = (difference - minutes * 60000 - hours * 3600000) / 1000;
// if (seconds < 10) {
//   seconds = `0${seconds}`;
// }
// console.log('seconds:', seconds);

// let milseconds =
//   difference - minutes * 60000 - hours * 3600000 - seconds * 1000;
// console.log('milseconds:', milseconds);
// if (milseconds === 0) {
//   milseconds = '000';
// } else if (milseconds < 10) {
//   milseconds = `00${milseconds}`;
// } else if (milseconds < 100) {
//   milseconds = `0${milseconds}`;
// }

// return `${hoursFin}:${minutesFin}:${seconds}.${milseconds}`;
// }

/**
 * Returns the angle (in radians) between the hands of an analog clock
 * for the specified Greenwich time.
 * If you have problem with solution please read: https://en.wikipedia.org/wiki/Clock_angle_problem
 *
 * SMALL TIP: convert to radians just once, before return in order to not lost precision
 *
 * @param {date} date
 * @return {number}
 *
 * @example:
 *    Date.UTC(2016,2,5, 0, 0) => 0
 *    Date.UTC(2016,3,5, 3, 0) => Math.PI/2
 *    Date.UTC(2016,3,5,18, 0) => Math.PI
 *    Date.UTC(2016,3,5,21, 0) => Math.PI/2
 */
function angleBetweenClockHands(date) {
  let angle;
  const minutes = new Date(date).getUTCMinutes();
  let hours = new Date(date).getUTCHours();
  const minAngleGrau = minutes * 6;
  let dividerOne;
  let dividerTwo;

  if (hours > 12) {
    hours -= 12;
  }

  const hourAngleGrau = hours * 30 + minutes * 0.5;

  if (minAngleGrau === hourAngleGrau) {
    return 0;
  }


  if (minAngleGrau < hourAngleGrau) {
    dividerOne = minAngleGrau;
    dividerTwo = hourAngleGrau;
  } else {
    dividerOne = hourAngleGrau;
    dividerTwo = minAngleGrau;
  }

  const partOne = dividerOne;
  const angleOne = dividerTwo - dividerOne;
  const partTwo = 360 - dividerTwo;
  const angleTwo = partOne + partTwo;

  if (angleOne > angleTwo) {
    angle = angleTwo;
  } else if (angleOne < angleTwo) {
    angle = angleOne;
  } else {
    angle = angleOne;
  }

  return angle * (Math.PI / 180);
}

module.exports = {
  parseDataFromRfc2822,
  parseDataFromIso8601,
  isLeapYear,
  timeSpanToString,
  angleBetweenClockHands,
};
