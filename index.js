function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction(){
    function namedFunction () {

    }
    return  namedFunction;
}
function returnsAnAnonymousFunction(){
    return function() {

    };
}