/**
 * @class Kronometer
 * @definition: Kronometer Class that keeps all of the properties of Kronometer
 * @author Resat Memis
 */
class Kronometer {
  /**
   * 
   * @param {number} second 
   */
  constructor(second) {
    this.second = second;
    this.timeInterval = null;
    this.isFinish = null;

    this.setSecond = this.setSecond.bind(this);
    this.setKronometer = this.setKronometer.bind(this);
    this.startKronometer = this.startKronometer.bind(this);
  }

  /**
   * 
   * @param {number} second 
   */
  setSecond = (second) => {
    this.second = second;
  };

  /**
   * @public getter
   */
  getSecond = () => {
    return this.second;
  };

  // classic kronometer process
  setKronometer = () => {
    return this.second - 1;
  }

  // start kronometer timer
  startKronometer = () => {
    this.timeInterval = setInterval(() => {
      this.second = this.setKronometer();
    }, 1000);
    return this.timeInterval;
  }

  // stop kronometer timer
  stopKronometer = () => {
    clearInterval(this.timeInterval);
  }

  // finish kronometer timer
  endKronometer = () => {
    clearInterval(this.timeInterval);
    this.isFinish = true;
  }

  getFinishKronometerText = () => {
    if (this.isFinish) {
      return 'Finish';
    }
    return this.isFinish;
  }
}

export default Kronometer;