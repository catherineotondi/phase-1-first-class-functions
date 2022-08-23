

function receivesAFunction(myfunc){
    return myfunc() ;
}

function returnsANamedFunction(){
    return function named(){
        return "Hello World";
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "Hello world"
    }
}