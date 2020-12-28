var counter = (function() {
        // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    }());

console.log(counter.getCurrentValue());
console.log(counter.getNextValue());
console.log(counter.getNextValue());

