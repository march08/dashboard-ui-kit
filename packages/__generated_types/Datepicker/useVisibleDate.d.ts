import React from 'react';
import { DatepickerView } from './useDatepickerView';
export declare const useVisibleDate: (initDate: Date | undefined, view: {
    activeView: DatepickerView;
    setNextView: () => void;
    setPrevView: () => void;
    setView: React.Dispatch<React.SetStateAction<DatepickerView>>;
}) => {
    handleMonthSelect: (monthNumber: number) => void;
    handleYearSelect: (yearNumber: number) => void;
    handlePrev: () => void;
    handleNext: () => void;
    visibleDate: Date;
    setVisibleDate: React.Dispatch<React.SetStateAction<Date>>;
};
