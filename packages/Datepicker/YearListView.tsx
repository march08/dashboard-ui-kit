import React from 'react';

import cls from './styles.scss';

import { generateArrayOfLen, isYearDisabled } from './utils';

export type YearListViewProps = {
  handleYearSelect: (yearNumber: number) => void;
  minDate?: Date;
  maxDate?: Date;
  visibleDate: Date;
};

export const YearListView = (props: YearListViewProps) => {
  const { visibleDate, handleYearSelect, minDate, maxDate } = props;
  const currentYear = visibleDate.getFullYear();
  const startYear = currentYear - (currentYear % 12);
  return (
    <div className={cls['datepicker-year-list']}>
      {generateArrayOfLen(12, startYear).map(yearNumber => {
        const onClickMonth = () => {
          handleYearSelect(yearNumber);
        };
        return (
          <button
            type="button"
            key={yearNumber}
            onClick={onClickMonth}
            className={cls['datepicker-year-list-item']}
            disabled={isYearDisabled(
              new Date(yearNumber, 1, 1),
              minDate,
              maxDate
            )}
          >
            {yearNumber}
          </button>
        );
      })}
    </div>
  );
};

YearListView.displayName = 'YearListView';
