type TickFunction = (_currentTime: number) => void;
type OnFinishFunction = () => void;

class CountDown {
  private _count!: number;
  private _intervalId: number;
  private _onFinish: OnFinishFunction = () => {};

  /**
   * Start initial time in milliseconds
   */
  start(callback: TickFunction, startTimeFrom: number, timeout = 1000) {
    this._count = startTimeFrom;
    this._intervalId = window.setInterval(() => {
      this._count -= timeout;
      if (this._count <= 0) {
        clearInterval(this._intervalId);
        this._onFinish();
      }
      callback(this._count);
    }, timeout);
  }

  onFinish(callback: OnFinishFunction) {
    this._onFinish = callback;
  }

  end() {
    clearInterval(this._intervalId);
  }
}

export const countDown = new CountDown();
