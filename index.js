const returnFirstTwoDrivers = (arrayOfDrivers) => {
    let newArrayOfDriversFirst = arrayOfDrivers.slice(0,2);
    return newArrayOfDriversFirst;
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    let newArrayOfDriversLast = arrayOfDrivers.slice(-2); 
    return newArrayOfDriversLast;
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (argumentOne) => {
    return function (fare) {
        return argumentOne * fare;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, driversToReturn) => {
    return driversToReturn (drivers);
}