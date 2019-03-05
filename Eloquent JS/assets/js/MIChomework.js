var deviceTimestamp = {
	NS: "DEVICE1", 
    T: 1542315590578.1729, 
    DT: 0.25, 
	DATA: {
		SIGNAL_1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		SIGNAL_2: [1,3,4] 
	}
}

// empty array to push signal timing to
let signalPtTimingArr = [];

// variable to hold timing interval
const timingInterval = deviceTimestamp.DT / deviceTimestamp.DATA.SIGNAL_1.length;

// function to update new timestamp by adding interval to the most recent timestamp
function timestampIntervalCounter() {
    deviceTimestamp.T = deviceTimestamp.T + timingInterval;
};

// loop thru signal_1 array
for (let i = 0; i < deviceTimestamp.DATA.SIGNAL_1.length; i++) {
    // push signal and timestamp to new array
    signalPtTimingArr.push([[deviceTimestamp.DATA.SIGNAL_1[i]], deviceTimestamp.T]);
    // run timestamp interval function in order to increase the timestamp for ea index in the array
    timestampIntervalCounter();
}

console.log("signalPtTimingArr: " + signalPtTimingArr);







