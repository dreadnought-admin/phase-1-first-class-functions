function receivesAFunction(callback) {
    callback();
}



function returnsANamedFunction() {
    return function namedFunction() {
        console.log('Something should appear here');
    };
}

function returnsAnAnonymousFunction() {
    return () => console.log('Phantom function!')
}

