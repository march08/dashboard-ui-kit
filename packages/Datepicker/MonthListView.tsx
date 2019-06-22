import React from 'react';

import cls from './styles.scss';

import { generateArrayOfLen, isMonthDisabled } from './utils';

export type MonthListViewProps = {
  handleMonthSelect: (monthNumber: number) => void;
  renderMonthName: (monthNumber: number) => React.ReactNode;
  minDate?: Date;
  maxDate?: Date;
  visibleDate: Date;
};

export const MonthListView = (props: MonthListViewProps) => {
  const {
    handleMonthSelect,
    renderMonthName,
    minDate,
    maxDate,
    visibleDate
  } = props;

  const visibleYear = visibleDate.getFullYear();

  return (
    <div className={cls['datepicker-month-list']}>
      {generateArrayOfLen(12, 0).map(monthNumber => {
        const onClickMonth = () => {
          handleMonthSelect(monthNumber);
        };
        return (
          <button
            type="button"
            key={monthNumber}
            onClick={onClickMonth}
            className={cls['datepicker-month-list-item']}
            disabled={isMonthDisabled(
              new Date(visibleYear, monthNumber, 1),
              minDate,
              maxDate
            )}
          >
            {renderMonthName(monthNumber)}
          </button>
        );
      })}
    </div>
  );
};

MonthListView.displayName = 'MonthListView';
