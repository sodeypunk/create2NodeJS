var Create2 = require('./lib/create2');
var MyUtil = require('./lib/util');

var robot = new Create2();
robot.init('/dev/tty.usbserial-DN026DMU');

robot.on('ready', () => {
    console.log("Sending turn left command...");
    robot.moveForward(100, -1)
    .then(() => {
        MyUtil.sleep(2000);
        console.log("Sending turn right command...");
        return robot.moveForward(100, 1)
    })
    .then(() => {
        MyUtil.sleep(2000);
        console.log("Closing robot connection...");
        robot.close();
    })
})