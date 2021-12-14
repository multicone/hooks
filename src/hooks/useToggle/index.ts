import { useState } from 'react';

type IUseToogle = (boolean | ((value?: boolean) => void))[];

/**
 * @description Toggle hook for react.
 * @param {boolean} defaultValue
 * @return {*}  {IUseToogle}
 * @author nawab69
 * @tutorial https://github.com/multicone/hooks
 * @example
 *    function ToggleComponent() {
 *    const [value, toggleValue] = useToggle(false);
 *      return (
 *         <div>
 *          <div>{value.toString()}</div>
 *           <button onClick={toggleValue}>Toggle</button>
 *           <button onClick={() => toggleValue(true)}>Make True</button>
 *           <button onClick={() => toggleValue(false)}>Make False</button>
 *         </div>
 *       );
 *     }
 */

const useToggle = (defaultValue: boolean): IUseToogle => {
  const [value, setValue] = useState<boolean>(defaultValue);

  const toogleValue = (value?: boolean) => {
    setValue((currentValue) => (typeof value === 'boolean' ? value : !currentValue));
  };

  return [value, toogleValue];
};

export { useToggle };
