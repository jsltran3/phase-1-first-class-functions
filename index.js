// function receivesAFunction (cb = function() {return do something}) {
//     let cb =  fucntion () {return "random message"}; 
// 

function receivesAFunction (cb) {
    cb(); 
}

function returnsANamedFunction () {
    return function cb() {}; 
}

function returnsAnAnonymousFunction() {
    return () => "blah"; 
}

// The returnsANamedFunction function should:

// take no arguments
// return a named function
// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function