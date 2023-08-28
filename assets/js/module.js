"use strict";

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * @param {number} dataUnix Unix date in secondes
 * @param {number} timeZone Timezone shift from UTC in secondes
 * @returns {string} Date String formate *Sunday 10, Jan*
 */

export const getDate = function (dataUnix, timeZone) {
  const date = new Date((dataUnix + timeZone) * 1000);
  const weekDayName = weekDayNames[date.getDay()];

  const monthName = monthNames[date.getMonth()];

  return `${weekDayName} ${date.getDate()},${monthName}`;
};

/**
 * @param {number} timeUnix Unix date in secondes
 * @param {number} timeZone Timezone shift from UTC in secondes
 * @returns {string} Time String formate *HH:MM AM/PM*
 */

export const getTime = function (timeUnix, timeZone) {
  const date = new Date((timeUnix + timeZone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12}:${minutes} ${period}`;
};

/**
 * @param {number} timeUnix Unix date in secondes
 * @param {number} timeZone Timezone shift from UTC in secondes
 * @returns {string} Time String formate *HH*
 */

export const getHours = function (timeUnix, timeZone) {
  const date = new Date((timeUnix + timeZone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 12 || 12} ${period}`;
};

/**
 * @param {number} mph Matter per seconds
 * @returns {number} Kilometer per hours
 */

export const mps_to_kmh = (mps) => {
  const mph = mps * 3600;
  return mph / 1000;
};

export const aqiText = {
  1: {
    level: "Good",
    message:
      "Air quality is considered satisfactory, and air pollution poses little or no risk.",
  },
  2: {
    level: "Fair",
    message:
      "Air quality is acceptable; however, for some pollutions there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
  },
  3: {
    level: "Moderate",
    message:
      "Member of sensitive groups may experience health effects. The general public is not likely to be affected.",
  },
  4: {
    level: "Poor",
    message:
      "Everyone may begin experience health effects; members of sensitive groups may experience more serious health effects",
  },
  5: {
    level: "Very Poor",
    message:
      "Health warning of emergency conditions. The entire population is more likely to be affected",
  },
};
