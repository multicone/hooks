import { useEffect } from 'react';
import { useTimeout } from '../useTimeout';
/**
 * @description useDebounce hook
 * @param {CallableFunction} callback
 * @param {number} delay
 * @param {[]} dependencies
 * @author @nawab69
 * @example
 *    export default function TimeoutComponent() {
 *      const [count, setCount] = useState(10)
 *      const { clear, reset } = useTimeout(() => setCount(0), 1000)
 *      return (
 *        <div>
 *        <div>{count}</div>
 *        <button onClick={() => setCount(c => c + 1)}>Increment</button>
 *        <button onClick={clear}>Clear Timeout</button>
 *        <button onClick={reset}>Reset Timeout</button>
 *        </div>
 *           )
 *     }
 */
function useDebounce(
  callback: CallableFunction,
  delay: number,
  dependencies: [],
): void {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

export { useDebounce };
