// Code your solution here
function findMatching(arr, string){
   const results = arr.filter( (driver) => driver.toUpperCase() === string.toUpperCase());
    return results;
}

function fuzzyMatch(arr, string){
    const results = arr.filter( (name) => name.substring(0, string.length).toUpperCase() === string.toUpperCase() );
    return results;
}

function matchName(drivers, name){
    const results = drivers.filter( driver => driver.name === name);
    return results;
}