import { DatepickerView } from './useDatepickerView';
export declare const getMonthText: (date: Date) => string;
export declare const getMonthTextByMonthNumber: (monthNumber: number) => string;
export declare const defaultRenderTitle: (visibleDate: Date, activeView: DatepickerView) => import("react").ReactText;
export declare const defaultRenderMonthName: (monthNumber: number) => string;
export declare const defaultRenderWeekdayShort: (weekdayNumber: number) => string;
