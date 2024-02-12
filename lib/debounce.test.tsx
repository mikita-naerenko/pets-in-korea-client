import { debounce } from "./debounce";

describe("debounce", () => {
  jest.useFakeTimers();

  test("should call the function after the delay", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    jest.advanceTimersByTime(50);
    expect(func).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test("should debounce multiple calls", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc();
    debouncedFunc();
    debouncedFunc();

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalled();
    expect(func).toHaveBeenCalledTimes(1);
  });

  test("should call the function with the last arguments", () => {
    const func = jest.fn();
    const debouncedFunc = debounce(func, 100);

    debouncedFunc(1);
    debouncedFunc(2);

    jest.advanceTimersByTime(100);

    expect(func).toHaveBeenCalledWith(2);
  });
});
