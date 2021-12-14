// import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from '../index';

describe('useToggle test', () => {
  it('should be defined', () => {
    expect(useToggle).toBeDefined();
  });

  it('renders the hook correctly and checks types', () => {
    const { result } = renderHook(() => useToggle(false));
    expect(typeof result.current[0]).toBe('boolean');
    expect(typeof result.current[1]).toBe('function');
  });

  it('should change value to true', () => {
    const { result } = renderHook(() => useToggle(true));
    const [value, toogleValue] = result.current;
    expect(value).toBe(true);
    act(() => {
      if (typeof toogleValue == 'function') {
        toogleValue();
      }
    });
    expect(result.current[0]).toBe(false);

    act(() => {
      if (typeof toogleValue == 'function') {
        toogleValue();
      }
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      if (typeof toogleValue == 'function') {
        toogleValue();
      }
    });

    expect(result.current[0]).toBe(false);

    // expect(result.current.count).toBe(1);
  });
  // it('should change to false');
  // it('should toogle value');
});
