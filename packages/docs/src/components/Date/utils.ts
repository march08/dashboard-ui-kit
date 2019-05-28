const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

type DateNull = Date | null;

export const getDaysInMonth = (date: Date) => {
  const d = new Date(date)
  d.setMonth(date.getMonth() + 1)
  d.setDate(0)
  return d.getDate();
}

/**
 * 0 - 6
 * @param date 
 */
export const getMonthStartDay = (date: Date) => {
  return new Date(date).getDay()
}

export const generateArrayOfLen = (len: number, startNumber: number = 1) => {
  const arr = new Array(len)
  return arr.fill(1).map((value, index) => {
    return index + startNumber
  })
}

export const isDateSelected = (
  date?: DateNull,
  selectedDateFrom?: DateNull,
  selectedDateTo?: DateNull,
  selectedDate?: DateNull
) => {

  if (!date) {
    return false
  }

  if (selectedDate && selectedDate.getTime() === date.getTime()) {
    return true
  }

  if (selectedDateFrom
    && selectedDateTo
    && selectedDateFrom.getTime() <= date.getTime()
    && selectedDateTo.getTime() >= date.getTime()) {
    return true
  }

  return false
}

export const isDateSelectedFirst = (
  date?: DateNull,
  selectedDateFrom?: DateNull,
  selectedDate?: DateNull
) => {

  if (!date) {
    return false
  }

  if (selectedDate && selectedDate.getTime() === date.getTime()) {
    return true
  }

  if (selectedDateFrom && selectedDateFrom.getTime() === date.getTime()) {
    return true
  }

  return false
}
export const isDateSelectedLast = (
  date?: DateNull,
  selectedDateFrom?: DateNull,
  selectedDateTo?: DateNull,
  selectedDate?: DateNull
) => {

  if (!date) {
    return false
  }

  if (selectedDate && selectedDate.getTime() === date.getTime()) {
    return true
  }

  if (selectedDateTo && selectedDateTo.getTime() === date.getTime()) {
    return true
  }

  if (selectedDateFrom && selectedDateFrom.getTime() === date.getTime() && !selectedDateTo) {
    return true
  }

  return false
}

export const getMonthText = (date: Date) => {
  const monthNumber = date.getMonth()
  return months[monthNumber];
}


export const getMonthTextByMonthNumber = (monthNumber: number) => {
  return months[monthNumber];
}