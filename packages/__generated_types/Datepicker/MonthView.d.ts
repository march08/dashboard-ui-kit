import React from 'react';
declare type DatepickerDayProps = JSX.IntrinsicElements['button'] & {
    date: Date;
    handleDateSelect?: (date: Date) => void;
    isCurrentMonth?: boolean;
    selectedDateFrom?: Date | null;
    selectedDateTo?: Date | null;
    selectedDate?: Date | null;
    minDate?: Date;
    maxDate?: Date;
    mouseOverDate?: Date;
    handleMouseOver?: (date: Date) => void;
};
export declare type MonthViewProps = {
    visibleDate: Date;
    /**
     * set to 1 if you want to start with sunday
     */
    weekdayOffset?: number;
    dayProps?: Omit<DatepickerDayProps, 'date'>;
    renderWeekdayShort: (weekdayNumber: number) => React.ReactNode;
};
export declare const MonthView: {
    (props: MonthViewProps): JSX.Element;
    displayName: string;
};
export {};
