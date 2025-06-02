// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   //()()--> first () is used for function definition and the next one is used for function calling and ; is also used when two iffe are written together

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('saravjeet') //passing name to a iffe function