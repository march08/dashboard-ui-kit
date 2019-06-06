import * as React from 'react';
export declare type OpenStateControls = {
    isOpen: boolean;
    handleClose: () => void;
    handleOpen: () => void;
    handleToggle: () => void;
    setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
};
export declare const useOpenState: (isOpenDefaultState?: boolean) => OpenStateControls;
