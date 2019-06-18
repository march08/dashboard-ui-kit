import * as React from "react";

export type OpenStateControls = {
  isOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  handleToggle: () => void;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useOpenState = (
  isOpenDefaultState: boolean = false
): OpenStateControls => {
  const [isOpen, setOpenState] = React.useState<boolean>(isOpenDefaultState);

  const handleClose = () => setOpenState(false);
  const handleOpen = () => setOpenState(true);
  const handleToggle = () => setOpenState(!isOpen);

  return {
    isOpen,
    setOpenState,
    handleClose,
    handleOpen,
    handleToggle
  };
};
