import { useState } from 'react';

type IUseToogle = (boolean | ((value?: boolean) => void))[];

export const useToggle = (defaultValue: boolean): IUseToogle => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toogleValue = (value?: boolean) => {
    setValue((currentValue) => (value ? value : !currentValue));
  };

  return [value, toogleValue];
};
