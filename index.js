'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: indentity returns a given value unchanged.
 * 
 * 
 * @param {Any value} value: Given value
 * @return {Any value} value: returns value unchanged. 
 * 
 */

function identity(value) {
    
//return any value unchanged.
return value;
    
}

module.exports.identity = identity;


/**
 * typeOf: typeof will return a given datatype in the form of a string.
 * 
 * 
 * @param {Any value} value : a given value.
 * @return {Any value} value : will return a string. 
 * 
 */


     function typeOf(value) {
    if( value === null) {
        return "null";
    } else if(Array.isArray(value) === true){
        return 'array';
    } else if(typeof value === 'object') {
        return 'object';
    } else if(typeof value === 'undefined') {
        return 'undefined';
    } else if(typeof value === 'number') {
        return 'number';
    } else if(typeof value === 'boolean') {
        return 'boolean';
    } else if(typeof value === 'string') {
        return 'string';
    } else if(typeof value === 'function') {
        return 'function';
    }
}

module.exports.typeOf = typeOf;

/**
 * first: first will loop over the array and return the first given numbers of element
 * 
 * 
 * @param {Array or Object} array: the array over which to iterate.
 * @param {number} number: The given number of elements to return from array.
 * @return {array}: An array containing the first number of elemnts from the given array.
 */

         function first(array, number) {
     //if array is not  an array, return array literal.
     if(Array.isArray(array) === false) {
         return [];
     } else if (isNaN(number) === true ) {
         return array[0];
     } else if (number > array.length) {
         return array;
         
     } else {
         const result = [];
         for(let index = 0; index < number; index++) {
             result.push(array[index]);
         }
         return result;
     }
         
     
 }
 module.exports.first = first;
 
 /**
 * last: last will loops over an array and return the last element in the array.
 * 
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {number} number: The given number of elements to return from array. 
 * @return [array]: returns the last element from the given array.
 */
 
 
 
  function last(array, number) {
    if(!Array.isArray(array) || number <= 0) {
      return [];
    } else if (typeOf(number) !== 'number') {
        return array[array.length - 1];
    } else if (number > array.length) {
        return array;
    } else {
        return array.slice(array.length - number);
    }
}


module.exports.last = last;

/**
 * indexOf: Designed to loop over an array and return the index of the first occurrance value.
 *          If the value isn't found in the array, then the function will return -1 
 * 
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {any value} value: The Function to be applied to each value in the 
 * @return {number} A number representing the index of the first occurrance of the given value.
 */


      function indexOf (array, value) {
    for(var index = 0; index < array.length; index++) {
        if(value === array[index]) {
            return index;
        }
    }
    return -1;
    
} 
module.exports.indexOf = indexOf;

/**
 * contains: Designed to check if a specified value is in the list.
 *           Returns true if the value is present in the list. 
 * 
 * @param {Array or Object} array: The array in which to check the value from. 
 * @param {Any} value: value: The given value in which to check for. 
 * @return {Boolean}: True if value is present. False if value is not present.  
 */
 

 function contains(array, value) {
    
    return value === null ? false : array.includes(value) === true ? true : false;
    
};


module.exports.contains = contains;

/**
 * unique: Designed to loop over an array and return a new array that does not contain duplicated elements. 
 * 
 * @param {Array} array: The array over which to iterate.
 * @return {Array}: Returns an array of non duplicated elements. 
 */

   function unique(array) {
    //create in emty array
    let thisArray = [];
    //loop over array
    for(let index = 0; index < array.length; index++) {
    //if duplicates exist, removed 
    if(thisArray.indexOf(array[index]) === -1) {
    //save new array
    thisArray.push(array[index]);
        
    }    
  }
    
    return thisArray;
}

module.exports.unique = unique;

/**
 * filter: Designed to loop over an array and return a new array with elements that pass the (func) test. 
 *         
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array. Returns a boolean.
 * @return {Array}: An array containing the values that pass the (func) test.
 */

      function filter(array, func) {
    let thisArray = [];
    each(array, function(element, index, array){
        if(func(element, index, array)) {
            thisArray.push(element);
        }
    });
    return thisArray;
}
 module.exports.filter = filter;
 
 
/**
 * reject: Designed to loop over an array and return a new array with elements that did not pass the (func) test.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} action: The function in which to be applied to each value in the array. Returns a boolean.
 * @return {Array} array: An array containing the values that did not pass the (func) test. 
 */


      function  reject(array, action) {
    return filter(array, function(element, index, array){
        return !action(element, index, array) === true
    });
}

module.exports.reject = reject;

/**
 * partition: Designed to loop over an array and return a new array containing two new arrays. 
 *            One array with elements that passed the (func) test.
 *            Another array with elements that did not pass the (func) test.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @return {Array}: An array containing two arrays. One that pass the test and another that did not pass the test. 
 */

        function  partition(array, func){
    let myArr = [[], []];
    for(let index = 0; index < array.length; index++) {
        if(array[index], array) {
            func(array[index], index, array);
            let result = func(array[index], index, array);
            if(result) {
                myArr[0].push(array[index]);
            } else {
                myArr[1].push(array[index]);
            }
        }
    }
    return myArr;
}

module.exports.partition = partition;

/**
 * map: Designed to loop over an array and does some operation to every element in the given array.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @return {Array}: An array containing the elements which were operated on.
 */

    function  map(collection, func) {
    const result = [];
    if(Array.isArray(collection) === true) {
        for(let index = 0; index < collection.length; index++) {
            func(collection[index], index, collection);
            result.push(func(collection[index], index, collection));
        }
    } else {
        for(let key in collection) {
            func(collection[key], key, collection)
            result.push(func(collection[key], key, collection));
        }
    }
    return result;
}

module.exports.map = map;

/**
 * pluck: Designed to take each object extract values from the given propety and put the extracted values in a new array.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Property} property: The property to extract from. 
 * @return {Array}: An array containing the extracted values from the given property.
 */

     function pluck(array, property) {
    return map(array, function (element, index, array) {
        return element[property];
    });
}

module.exports.pluck = pluck;

/**
 * every: Designed to loop over an array and checks if each element in the given array satisfies the condition.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @return {Boolean}: True if all elements satisfy the condition. False if one of the elements fail.  
 */

      function every(collection, func) {
    if(func === undefined) {
        let y = true;
        each(collection, function(element, index, array){
            if(!element) {
                y = false;
            }
        });
        return y;
    }
    if(reject(collection, func).length !== 0) {
        return false;
    } else {
        return true;
    }
    
}

module.exports.every = every;

/**
 * some: Designed to loop over an array and checks the elements in the given array that satisfies the condition.
 * 
 * @param {Array or Object} collection: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array. 
 * @return {Boolean}: True if at least one element in the array satisfies the condition. False is non satisfies the condition.
 */

     function some(collection, func) {
    if(func === undefined) {
        let y = false;
        each(collection, function(element, index, array){
            if(element) {
                y = true;
            }
        })
        return y;
    }
    if(filter(collection, func).length !== 0) {
        return true;
    } else {
        return false;
    }
}

module.exports.some = some;

/**
 * reduce: Designed to loop over an array and takes the array and reduce the array into a single value. 
 *         Executes a given function for each value of the array.
 * 
 * @param {Array or Object} array: The array over which to iterate.
 * @param {Function} func: The function in which to be applied to each value in the array.
 * @param {Seed} seed: The container in which to seed the value. 
 * @return {Value}: A single value.
 */

      function reduce(array, func, seed) {
    let accumulator;
    if (seed === undefined) {
        accumulator = array[0];
        let arr = array.slice(1);
        each(arr, function(element, index){
            accumulator = func(accumulator, element, index + 1);
        })
    } else {
        accumulator = seed;
        each(array, function(element, index){
            accumulator = func(accumulator, element, index);
        })
    }
    return accumulator;
}

module.exports.reduce = reduce;

/**
 * extend: Designed to copy all the properties from an object over to a chosen object.
 * 
 * @param {Object} object1: The chosen object in which to store the copied properties in. 
 * @param {Object} ...etc: The array of objects in which to copy the properties from.
 * @return {Object}: An object of shallowly copied properties. 
 */



      function extend(object1, ...etc) {
    each(etc, function(object, index, array){
        each(object, function(value, key, object) {
            object1[key] = value;
        });
    });
    return object1;
};

module.exports.extend = extend;