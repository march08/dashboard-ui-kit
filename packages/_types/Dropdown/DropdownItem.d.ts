import { AnyTag } from '@duik/core';
export declare const DropdownItem: {
    <T extends AnyTag = "button">(props: import("../core").PropsWithTagProps<T, import("../Button").ButtonPropsBase & {
        Component?: T | undefined;
    }>): JSX.Element;
    displayName: string;
};
