function daysInMonth(month, year) {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays[month - 1];
  }
  
  console.log(daysInMonth(2, 2023)); // 28 (February in a non-leap year)
  