class Kronometer {
  constructor(second) {
    this.second = second;
    this.timeInterval = null;

    this.setSecond = this.setSecond.bind(this);
    this.setKronometer = this.setKronometer.bind(this);
    this.startKronometer = this.startKronometer.bind(this);
  }

  setSecond = (second) => {
    this.second = second;
  };

  getSecond = () => {
    return this.second;
  };

  setKronometer = () => {
    return this.second - 1;
  }

  startKronometer = () => {
    this.timeInterval = setInterval(() => {
      this.second = this.setKronometer();
    }, 1000);
    return this.timeInterval;
  }

  endKronometer = () => {
    clearInterval(this.timeInterval);
  }
}

export default Kronometer;