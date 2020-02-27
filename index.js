// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}



function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.slice(0, string.length) === string)
}