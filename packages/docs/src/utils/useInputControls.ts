import { useState } from "react";

export const useInputControls = (defaultValue: string = "") => {
  const [value, setVaue] = useState<string>(defaultValue);

  const onChange = (e: React.FocusEvent<HTMLInputElement>) => {
    setVaue(e.target.value);
  };

  const resetValue = () => {
    setVaue("");
  };
  return {
    onChange,
    resetValue,
    value,
    setVaue
  };
};

export default useInputControls;
