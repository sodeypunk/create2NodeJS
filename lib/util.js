module.exports.sleep = function(time) {
    let stop = new Date().getTime();
    while(new Date().getTime() < stop + time) {
        ;
    }
}


