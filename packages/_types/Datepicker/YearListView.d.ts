export declare type YearListViewProps = {
    handleYearSelect: (yearNumber: number) => void;
    minDate?: Date;
    maxDate?: Date;
    visibleDate: Date;
};
export declare const YearListView: {
    (props: YearListViewProps): JSX.Element;
    displayName: string;
};
