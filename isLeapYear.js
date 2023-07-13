function isLeapYear(year) {
  if (year % 400 == 0) {
    return true;
  } else if (year % 100 != 0) {
    return year % 4 == 0;
  } else {
    return false;
  }
}