
const array = [
	1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946,
	17711, 28657, 46368, 75025, 121393, 196418, 317811
];

const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array.reduce(reducer));
//832038


const array2 = [
	"Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.",
	"Warp", "reactor", "core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance",
	"frequencies.", "Resistance", "is", "futile.", "Recommend", "we", "adjust", "shield", "harmonics",
	"to", "the", "upper", "EM", "band", "when", "proceeding.", "These", "appear", "to", "be", "some",
	"kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work", "collectively",
	"as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper",
	"frequency", "band."
];


const reducers = (accumulator, currentValue) => accumulator + " " + currentValue;

console.log(array2.reduce(reducers));


// const array3 = [
// 	1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946,
// 	17711, 28657, 46368, 75025, 121393, 196418, 317811
// ];
//
// let sum = myArray.reduce(function(accumulator, currentValue){
// 	return accumulator + currentValue;
// }
// );
//
// console.log("the sum of the array" + sum);


const array4 = [
	"Deflector", "power", "at", "maximum.", "Energy", "discharge", "in", "six", "seconds.",
	"Warp", "reactor", "core", "primary", "coolant", "failure.", "Fluctuate", "phaser", "resonance",
	"frequencies.", "Resistance", "is", "futile.", "Recommend", "we", "adjust", "shield", "harmonics",
	"to", "the", "upper", "EM", "band", "when", "proceeding.", "These", "appear", "to", "be", "some",
	"kind", "of", "power-wave-guide", "conduits", "which", "allow", "them", "to", "work", "collectively",
	"as", "they", "perform", "ship", "functions.", "Increase", "deflector", "modulation", "to", "upper",
	"frequency", "band."
];

let addWords = (text, currentValue) => text + ' ' + currentValue;

console.log(array4.reduce(addWords));