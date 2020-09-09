import { KronometerConstant } from '../../constants';

const {
  KRONOMETER_FINISH
} = KronometerConstant.TEXTS;

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
  constructor(second = 0) {
    this.second = second;
    this.timeInterval = null;
    this.isFinish = 'no';

    this.setSecond = this.setSecond.bind(this);
    this.setKronometer = this.setKronometer.bind(this);
    this.startKronometer = this.startKronometer.bind(this);
    this.stopKronometer = this.stopKronometer.bind(this);
    this.endKronometer = this.endKronometer.bind(this);
    this.resetKronometer = this.resetKronometer.bind(this);
    this.getFinishKronometerText = this.getFinishKronometerText.bind(this);
  }

  /**
   * 
   * @param {number} second 
   */
  setSecond = (second = null) => {
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
      if (this.second === 0) {
        this.isFinish = 'yes';
      }
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
    this.isFinish = 'yes';
  }

  // reset kronometer timer
  resetKronometer = () => {
    this.isFinish = 'no';
    this.second = null;
  }

  getFinishKronometerText = () => {
    if (this.isFinish !== 'no') {
      return KRONOMETER_FINISH;
    }
    return this.isFinish;
  }

  isTimerFinish = () => {
    return this.isFinish === 'yes';
  }
}

export default Kronometer;