// ================================================================

// Titanic Dataset challenges!

// Your goal is to write some functions that will extract
// relevant data from the dataset.

// Write your code here in this file.

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant
// piece of information from the data and return it.

// ===============================================================

// ---------------------------------------------------------------
// 1 -------------------------------------------------------------
// Return an array of all the values in data for a given property
// For example if property = 'fare' the output should be a list of
// all fares something like: [7.3125, 15.75, 7.775, 10.5, ...]
// Or if property = 'age' -> [40, 26, 22, 28, 23, 45, 21, ...]

const getAllValuesForProperty = (data, property) => {
	return data.map((each) => each.fields[`${property}`]);
};

// 2 -------------------------------------------------------------
// Return an array where a given property matches the given value
// For example property = 'sex' and value = 'male' returns an
// array of all the male passengers [{...}, {...}, {...}, ...]

const filterByProperty = (data, property, value) => {
	return data.filter(
		(each) =>
			each.fields[`${property}`] === `${value}` &&
			each.fields[`${property}`] !== undefined
	);
};

// 3 -------------------------------------------------------------
// Filter out missing or null values
// Return an array where the objects that have undefined for a
// given property have been removed

const filterNullForProperty = (data, property) => {
	return data.filter((each) => each.fields[`${property}`] !== undefined);
};

// 4 -------------------------------------------------------------
// Abstract the sum by creating a function that returns the sum
// for any (numeric) property
// Return the total of all values for a given property. This

const sumAllProperty = (data, property) => {
	return data
		.filter((each) => each.fields[`${property}`] !== undefined)
		.map((each) => each.fields[`${property}`])
		.reduce((sum, currNum) => sum + currNum, 0);
};

// 5 -------------------------------------------------------------
// Count unique values for property. The goal here is return an
// object with keys equal to the unique values for a property and
// values equal to the number of times that property appears. For
// example the embarked property has three unique values: S, C,
// and Q, and a couple passengers have undefined for this property.
// So the output should be: { S: 644, C: 168, Q: 77, undefined: 2 }
// That is 644 passengers embarked at South Hampton. 168 embarked
// at Cherbourg, 77 emabrked at Queenstown, and 2 are undedfined

const countAllProperty = (data, property) => {
	const tempObject = {};
	data.map((each) => {
		if (each.fields[`${property}`] in tempObject) {
			tempObject[each.fields[`${property}`]]++;
		} else {
			tempObject[each.fields[`${property}`]] = 1;
		}
	});
	return tempObject;
};

// 6 ------------------------------------------------------------
// Make histogram. The goal is to return an array with values
// of properties divided into buckets and counting the number
// of items in each bucket.

// [ , , 1, , 2, , , 1]

//

const makeHistogram = (data, property, step) => {
	const finArr = [];

	// Map the object's property data all into a new array and remove undefined ones.
	const arrOfNums = data
		.filter((each) => each.fields[property] !== undefined)
		.map((each) => parseFloat(each.fields[property]));

	// For every number in the array...
	for (let i = 0; i < arrOfNums.length; i++) {
		// if the index has something in it...
		if (finArr[Math.floor(arrOfNums[i] / step)]) {
			// then add one to that index
			finArr[Math.floor(arrOfNums[i] / step)] += 1;
			// Otherwise...
		} else {
			// Create in instance of that in the index it should be in
			finArr[Math.floor(arrOfNums[i] / step)] = 1;
		}
	}

	for (let j = 0; j < finArr.length; j++) {
		if (finArr[j] === undefined) {
			finArr[j] = 0;
		}
	}
	return finArr;
};

// 7 ------------------------------------------------------------
// normalizeProperty takes data and a property and returns an
// array of normalized values. To normalize the values you need
// to divide each value by the maximum value in the array.

const normalizeProperty = (data, property) => {
	const propertyArr = data
		.map((each) => each.fields[property])
		.filter((each) => each !== undefined);

	return propertyArr.map((each) => each / Math.max(...propertyArr));
};

// 8 ------------------------------------------------------------
// Write a function that gets all unique values for a property.
// Given the array of data and a property string it should return
// an array of all of the unique values under that property.
// For example if the property string were "sex" this function
// would return ['male', 'female']

const getUniqueValues = (data, property) => {
	const propertyArr = data.map((each) => each.fields[property]);
	const finArr = [];
	for (let i = 0; i < propertyArr.length; i++) {
		if (finArr.includes(propertyArr[i])) {
		} else {
			finArr.push(propertyArr[i]);
		}
	}

	return finArr;
};

// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports = {
	getAllValuesForProperty,
	filterByProperty,
	filterNullForProperty,
	sumAllProperty,
	countAllProperty,
	makeHistogram,
	normalizeProperty,
	getUniqueValues,
};
