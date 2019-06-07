import React from 'react';
export declare type MonthListViewProps = {
    handleMonthSelect: (monthNumber: number) => void;
    renderMonthName: (monthNumber: number) => React.ReactNode;
    minDate?: Date;
    maxDate?: Date;
    visibleDate: Date;
};
export declare const MonthListView: {
    (props: MonthListViewProps): JSX.Element;
    displayName: string;
};
