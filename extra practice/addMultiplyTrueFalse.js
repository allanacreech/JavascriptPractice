//make a function called addition to test user input to add (x,y,z)

function addition(x,y,z){
    console.log("addition: " + (x + y + z));
};

//make a function called multiply to test user input to multiple (x,y,z)

function multiply (x , y, z){
    console.log("multiply: " + (x * y * z));
};
//make a function called stringify to test user input (x,y,z) to see if string

function stringify (x, y, z){
    var stringify = false;//default to false
    if( typeof(x) === 'string' && typeof(y) === 'string' && typeof(z) === 'string'){
        stringify = true;
        console.log("You have typed a string!");
    } else {
        stringify = false;
        console.log("You hare a ninny ninny boo boo.");
    }
};
//make a function called vowel to test user input (x) to see if vowel
//Since we are using toLowerCase as a method it is toLowerCase()
function vowel( x){
    if (x.toLowerCase() === "a" || x.toLowerCase() === "e" || x.toLowerCase() === "i" || x.toLowerCase() === "o" || x.toLowerCase ==="u"){
        console.log("Yes " + x + " is a vowel");
    } else {
        console.log("No " + x + " is not a vowel");
    };
}


///call function addition of any three numbers
addition(10,12,5);
//call function multiply of any three numbers
multiply(100,50,67);
//call function stringify three items
stringify("bird","bat", "hat");
stringify(1,"dog", "peter");
//call function vowel
vowel("o");
vowel("t");