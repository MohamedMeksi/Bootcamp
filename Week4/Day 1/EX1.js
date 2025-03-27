// #1

function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne()
// !rep ==> 3

// #1.2 What will happen if the variable is declared with const instead of let ?

// ! TypeError: Assignment to constant variable.

//#2
let b = 0;
function funcTwo() {
    b = 5;
    console.log(`inside the funcTwo function ${b}`);
}

function funcThree() {
    console.log(`inside the funcThree function ${b}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// !rep ==> 0, 5, 5

// #2.2 What will happen if the variable is declared with const instead of let ?

// !TypeError: Assignment to constant variable.

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    console.log(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

// !ReferenceError: window is not defined

// ! en suprime window
// ! affiché hello

//#4
let c = 1;
function funcSix() {
    let c = "test";
    console.log(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix()
// !inside the funcSix function test

// #4.2 What will happen if the variable is declared with const instead of let ?

// !TypeError: Assignment to constant variable.

//#5
let d = 2;
if (true) {
    let d = 5;
    console.log(`in the if block ${d}`);
}
console.log(`outside of the if block ${d}`);

// #5.1 - run the code in the console
// ! rep ==> 5, 2

// #5.2 What will happen if the variable is declared with const instead of let ?

// ! TypeError: Assignment to constant variable.