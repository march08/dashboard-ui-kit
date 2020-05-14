import React from 'react';
import classnames from 'classnames';

import cls from './styles.scss';

import {
  getDaysInMonth,
  getMonthStartDay,
  generateArrayOfLen,
  isDateSelectedLast,
  isDateSelectedFirst,
  isDayDisabled,
  isDateInRange
} from './utils';

type DatepickerDayProps = JSX.IntrinsicElements['button'] & {
  date: Date;
  handleDateSelect?: (date: Date) => void;
  isCurrentMonth?: boolean;
  selectedDateFrom?: Date | null;
  selectedDateTo?: Date | null;
  selectedDate?: Date | null;
  minDate?: Date;
  maxDate?: Date;
  mouseOverDate?: null | Date;
  handleMouseOver?: (date: Date) => void;
};

const DatepickerDay = (props: DatepickerDayProps) => {
  const {
    date,
    isCurrentMonth,
    handleDateSelect,
    selectedDateFrom,
    selectedDateTo,
    selectedDate,
    minDate,
    maxDate,
    handleMouseOver,
    mouseOverDate,
    ...rest
  } = props;

  const handleClick = () => {
    if (handleDateSelect) {
      handleDateSelect(date);
    }
  };

  const handleOnMouseOver = handleMouseOver
    ? () => {
        handleMouseOver(date);
      }
    : undefined;

  return (
    <button
      type="button"
      onClick={handleClick}
      key={date.toDateString()}
      disabled={isDayDisabled(date, minDate, maxDate)}
      onMouseOver={handleOnMouseOver}
      className={classnames(cls['datepicker-day'], {
        [cls['datepicker-day-current-month']]: isCurrentMonth,
        [cls['datepicker-day-not-current']]: !isCurrentMonth,
        [cls['datepicker-day-hover-range']]: isDateInRange(
          date,
          selectedDateFrom,
          mouseOverDate
        ),
        [cls['datepicker-day-selected']]: isDateInRange(
          date,
          selectedDateFrom,
          selectedDateTo
        ),
        [cls['datepicker-day-selected-first']]: isDateSelectedFirst(
          date,
          selectedDateFrom,
          selectedDate
        ),
        [cls['datepicker-day-selected-last']]: isDateSelectedLast(
          date,
          selectedDateFrom,
          selectedDateTo,
          selectedDate
        )
      })}
      {...rest}
    >
      <span className={cls['datepicker-day-content']}>{date.getDate()}</span>
    </button>
  );
};

export type MonthViewProps = {
  visibleDate: Date;
  /**
   * set to 1 if you want to start with sunday
   */
  weekdayOffset?: number;
  dayProps?: Omit<DatepickerDayProps, 'date'>;
  renderWeekdayShort: (weekdayNumber: number) => React.ReactNode;
};

export const MonthView = (props: MonthViewProps) => {
  const {
    visibleDate,
    weekdayOffset = 0,
    dayProps,
    renderWeekdayShort
  } = props;
  const startDay = getMonthStartDay(visibleDate);

  const currentYear = visibleDate.getFullYear();
  const currentMonth = visibleDate.getMonth();
  const currentDate = new Date(currentYear, currentMonth, 1);
  const currentMonthDays = getDaysInMonth(currentDate);

  const previousDate = new Date(currentYear, currentMonth - 1, 1);
  const previousMonth = previousDate.getMonth();
  const previousYear = previousDate.getFullYear();
  const previousMonthDays = getDaysInMonth(previousDate);

  const nextDate = new Date(currentYear, currentMonth + 1, 1);
  const nextMonth = nextDate.getMonth();
  const nextYear = nextDate.getFullYear();

  const lengthOfPreviousMonth = (startDay + weekdayOffset) % 7;

  return (
    <div className={cls['datepicker-month']}>
      {generateArrayOfLen(7, 7 - weekdayOffset)
        .map(v => v % 7)
        .map(weekday => (
          <span key={`head-${weekday}`} className={cls['datepicker-day-name']}>
            {renderWeekdayShort(weekday)}
          </span>
        ))}
      {/* Previous month */}
      {generateArrayOfLen(
        lengthOfPreviousMonth,
        previousMonthDays - startDay + 1 - weekdayOffset
      ).map(item => (
        <DatepickerDay
          key={item}
          disabled
          date={new Date(previousYear, previousMonth, item)}
          {...dayProps}
        />
      ))}
      {/* This month */}
      {generateArrayOfLen(currentMonthDays).map(item => {
        return (
          <DatepickerDay
            key={`current-${item}`}
            isCurrentMonth
            date={new Date(currentYear, currentMonth, item)}
            {...dayProps}
          />
        );
      })}
      {/* Next month */}
      {generateArrayOfLen(
        (7 - ((lengthOfPreviousMonth + currentMonthDays) % 7)) % 7,
        1
      ).map(item => (
        <DatepickerDay
          key={item}
          date={new Date(nextYear, nextMonth, item)}
          {...dayProps}
        />
      ))}
    </div>
  );
};

MonthView.displayName = 'MonthView';
