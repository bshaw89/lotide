# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @bshaw89/lotide`

**Require it:**

`const _ = require('@bshaw89/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: compares two arrays and asserts a positive or negative message if they are/are not equal
* `assertEqual(actual, expected)`: compares two arguments and asserts a positive or negative message if they are/are not equal
* `assertObjectsEqual(object1, object2)`: compares two objects and asserts a positive or negative message if they are/are not equal
* `countLetters(letters)`: returns the number of times each letter in the argument appears
* `countOnly(allItems, itemsToCount)`: returns the number of times the itemsToCount appear in allItems
* `eqArrays(arr1, arr2)`: compares two arrays to see if they are equal
* `eqObjects(object1, object2)`: compares two objects to see if they are equal
* `findKey(object, callback)`: searches for a key within the object and executes the callback function on the key
* `findKeyByValue(object, value)`: returns the object keys that match the value
* `head(arrFirst)`: returns the first element in an array
* `letterPositions(sentence)`: returns the index positions of each letter in a sentence
* `map(array, callback)`: returns the first element of each item in an array
* `middle(array)`: returns the middle element in an array
* `tail(arrLast)`: returns the last element in an array
* `takeUntil(array, callback)`: returns a new array of each item in the original array up until a stopping condition define in the callback
* `without(source, itemsToRemove)`: returns an array without the itemsToRemove