// "use strict"

let myName

function setName(newName) {
    myNam = newName
}

setName("Walter") // Error!!!
console.log("myName: " + myName);
console.log("myNam: " + myNam);

// shadowing





// Linguaggi dinamici 





// Annotazioni di tipo

// bool -> bool




// Tipi generici

function test(testDescription, body) {
    if (body()) {
        console.log(`TEST SUCCEEDED: ${testDescription}`);
        
    }else {
        console.log(`TEST FAILED: ${testDescription}`);   
    }
    
}

test("picking first element of array of strings", function(){
    return 
})