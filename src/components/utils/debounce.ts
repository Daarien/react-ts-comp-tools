// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.

interface Cancelable {
  clear(): void;
}

export default function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number = 166
) {
  let timeout: number;
  function debounced(...args: any[]) {
    // @ts-ignore
    const that = this;
    const later = () => {
      func.apply(that, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced as T & Cancelable;
}
