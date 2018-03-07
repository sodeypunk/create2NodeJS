const Create2 = require('./lib/create2');
const myUtil = require('./lib/util');

const robot = new Create2();
robot.init('/dev/tty.usbserial-DN026DMU');

robot.on('ready', () => {
  console.log('Sending turn left command...');
  robot.moveForward(100, 1)
    .then(() => {
      myUtil.sleep(2000);
      console.log('Sending turn right command...');
      return robot.moveForward(100, -1);
    })
    .then(() => {
      myUtil.sleep(2000);
      console.log('Closing robot connection...');
      robot.close();
    });
});
