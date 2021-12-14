import { useCallback, useEffect, useRef } from 'react';

/**
 * @description useTimeout hook use for call a function delay after a specifiq time
 * @param {CallableFunction} callback
 * @param {number} delay
 * @return {*}
 * @author @nawab69
 * @example export default function TimeoutComponent() {
            const [count, setCount] = useState(10)
            const { clear, reset } = useTimeout(() => setCount(0), 1000)

            return (
              <div>
                <div>{count}</div>
                <button onClick={() => setCount(c => c + 1)}>Increment</button>
                <button onClick={clear}>Clear Timeout</button>
                <button onClick={reset}>Reset Timeout</button>
              </div>
            )
          }
 */
function useTimeout(callback: CallableFunction, delay: number) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<any>();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export { useTimeout };
