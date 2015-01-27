/* 
Problem #1
jsTest will return 0. 
 - The index variable is instantiated with a value of zero.
 - obj.index is set equal to index, which is pointing to a primitive (number)
 - The subroutine func is created, which, if run, would increment the index up to 10.
 - the subroutine is not run, therefore index is still 0.
 - 'this.index++;' is a little interesting. It actually creates a property on the function (the 'this' value applies to the function jsTest in this case. Assuming that there wasn't a property called 'index' already on whatever 'this' points to, it will be created, but will equal NaN (not a number). It's also interesting to note that if you added jsTest as a property on an object, then the 'this' value will point to that object)
    -ex:  var obj = {};
          obj.func = jsTest;
          obj.func() will actually instantiate an 'index' property on obj, because the 'this' referenced in jsTest now refers to obj.
          obj.index now equals NaN
*/
function jsTest() {

    var index = 0;
    var counter = 0;
    var obj = {};

    obj.index = index;

    var func = function () {
        for (index = 0; index < 10; index++) {
            counter += 2;
        }
        obj.index++;    
    };

    obj.func = func;
    this.index++;

    return index;
    
}



/* Problem #2
    Implement an efficient algorithm to find values in a sorted list.  E.g., if I have a large list of integers and want to find the value 345, the algorithm should return either the index of the value in the list, or -1 if it is not present. 

    For this problem, I'm assuming that the list is an array. I'm implementing a function with a logarithmic time complexity. 
*/

var indexFinder = function(sortedArray, value) {
    var result = -1;
    var currentIndex = 0;
    var subroutine = function(array){
        //this if statements prevents infinite loops with only one item in the array that isn't the value we're looking for.
        if (array.length === 1 && array[0] !== value) {
            return;
        }
        //we recursively split the array in half looking for our value.
        var middle = Math.floor(array.length/2);
        if (array[middle] === value) {
            result = currentIndex+middle;
            return;
        }
        else if (array[middle] < value) {
            currentIndex += middle;
            subroutine(array.slice(middle));
        }
        else if (array[middle] > value) {
            subroutine(array.slice(0, middle));
        }
    };

    subroutine(sortedArray, 0);
    return result;

};


/*
    Implement a Set data structure, including an “add” and “intersect” method.
    I'm a little confused by the prompt here. I wish I had some more
    constraints/information to work with, but I'll try my best to create a general set. 
*/
//It's important to note that the storage array is still public.
var set = function(){
    this.storage = [];
};
//pushes to the set's storage array.
set.prototype.add = function(subset){
    this.storage.push(subset);
};
//removes the individual subsets in the storage array, and then pushes a new subset
//comprised of the two subsets to the storage array.
set.prototype.intersect = function(){
    var temp = [];
    var array = this.storage;
    for (var i = 0; i < arguments.length; i++) {
        temp.push(arguments[i]);
        array.splice(array.indexOf(arguments[i]), 1);
    }
    temp.length ? array.push(temp) : void 0;
};









module.exports = {
    indexFinder: indexFinder,
    set: set
};

