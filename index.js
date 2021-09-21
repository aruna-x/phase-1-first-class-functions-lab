const returnFirstTwoDrivers = function(myArray) {
    return myArray.slice(0,2);
}

const returnLastTwoDrivers = function(myArray) {
    // return [myArray[myArray.length-2],myArray[myArray.length-1]];
    return myArray.slice(myArray.length-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return (fare) => {
        return int*fare;
    }
}

