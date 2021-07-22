const throttle = (
  func: (...args: any[]) => void,
  limit: number,
  setIsInThrottle?: (value?: boolean) => void
): (() => void) => {
  let inThrottle: boolean;
  return function(this: any) {
    const args:any = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      if (typeof setIsInThrottle === "function") {
        setIsInThrottle(true);
      }
      setTimeout(() => {
        inThrottle = false;
        if (typeof setIsInThrottle === "function") {
          setIsInThrottle(false);
        }
      }, limit);
    }
  };
};

export default throttle;
