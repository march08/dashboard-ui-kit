import React from 'react';
export declare enum DatepickerView {
    month = "MONTH",
    monthList = "MONTH_LIST",
    yearList = "YEAR_LIST"
}
export declare const useDatepickerView: (initialView?: DatepickerView) => {
    activeView: DatepickerView;
    setNextView: () => void;
    setPrevView: () => void;
    setView: React.Dispatch<React.SetStateAction<DatepickerView>>;
};
