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
  date?: Date,
  selectedDateFrom?: Date,
  selectedDateTo?: Date,
  selectedDate?: Date
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
  date?: Date,
  selectedDateFrom?: Date,
  selectedDate?: Date
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
  date?: Date,
  selectedDateTo?: Date,
  selectedDate?: Date
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

  return false
}