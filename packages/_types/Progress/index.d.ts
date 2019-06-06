import './styles.scss';
export declare type ProgressProps = JSX.IntrinsicElements['div'] & {
    fill?: number;
    fills?: number[];
    lg?: boolean;
};
export declare const Progress: {
    ({ className, fill, fills, lg, ...rest }: ProgressProps): JSX.Element;
    defaultProps: {
        className: null;
        fill: number;
    };
    displayName: string;
};
export default Progress;
