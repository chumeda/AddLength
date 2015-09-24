
function addLength(data) {

    return _.map(data, function(string) {return string + ' ' + string.length});
}

console.log(addLength(["apple", "pear"]));
console.log(addLength(["you", "can", "win"]));