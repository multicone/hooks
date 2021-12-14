import { useEffect, useRef } from 'react';
/**
 * @description useUpdateEffect is simmilar to component did Mount method of class component
 * @param {CallableFunction} callback
 * @param {[]} dependencies
 */
function useUpdateEffect(callback: CallableFunction, dependencies: []) {
  const firstRenderRef = useRef<boolean>(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}

export { useUpdateEffect };
