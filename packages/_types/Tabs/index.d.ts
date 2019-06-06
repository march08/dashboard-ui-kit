export * from './TabItem';
export declare type TabsProps = JSX.IntrinsicElements['nav'] & {
    xs?: boolean;
    sm?: boolean;
};
export declare const Tabs: (props: TabsProps) => JSX.Element;
export declare const Tab: (props: TabsProps) => JSX.Element;
export declare const TabContainer: (props: TabsProps) => JSX.Element;
export default Tabs;
