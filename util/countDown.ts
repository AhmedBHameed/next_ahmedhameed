type TickFunction = (_currentTime: number) => void;
type OnFinishFunction = () => void;

class CountDown {
  private count!: number;

  private intervalId: number;

  private onFinishFn: OnFinishFunction;

  /**
   * Start initial time in milliseconds
   */
  start(callback: TickFunction, startTimeFrom: number, timeout = 1000) {
    this.count = startTimeFrom;
    this.intervalId = window.setInterval(() => {
      this.count -= timeout;
      if (this.count <= 0) {
        clearInterval(this.intervalId);
        this.onFinishFn();
      }
      callback(this.count);
    }, timeout);
  }

  onFinish(callback: OnFinishFunction) {
    this.onFinishFn = callback;
  }

  end() {
    clearInterval(this.intervalId);
  }
}

export const countDown = new CountDown();
