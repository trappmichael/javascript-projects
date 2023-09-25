// Function that makes a line consisting of whatever character is specificed in 'lineChar' and of whatever length is specified in 'sizeLine'
function makeLine(sizeLine, lineChar = "#") {
    let line = '';
    for (i = 0; i < sizeLine; i++) {
        line += lineChar;
    }
    return line;
}

// console.log(makeLine(5));

// Function that makes a square consisting of whatever character is specificed in 'squareChar' and of whatever side length is specified in 'sizeSide1'
function makeSquare1(sizeSide1, squareChar = "#") {
    let square = '';
    for (j = 0; j < sizeSide1; j++) {
        square += (makeLine(sizeSide1, squareChar) + '\n');
    }
    return square.slice(0,-1);
}

// console.log(makeSquare1(5));

// Function that makes a rectangle consisting of whatever character is specificed in 'rectangleChar' and of whatever side length is specified in 'width' and 'height'
function makeRectangle(width, height, rectangleChar = "#") {
    let rectangle = '';
    for (j = 0; j < height; j++) {
        rectangle += (makeLine(width, rectangleChar) + '\n');
    }
    return rectangle.slice(0,-1);
}

// console.log(makeRectangle(5,3));

// Function that makes a square consisting of whatever character is specificed in 'squareChar2' and of whatever side length is specified in 'sizeSide'. Utilizes the makeRectangle function.
function makeSquare2(sizeSide2, squareChar2 = "#") {
    return makeRectangle(sizeSide2, sizeSide2, squareChar2);
}

// console.log(makeSquare2(5));

// Function that makes a downward staircase consisting of whatever character is specificed in 'stairsChar' and of whatever height is specified in 'stairsHeight'
function makeDownwardStairs(stairsHeight, stairsChar = "#") {
    let stairs = '';
    for (j = 0; j < stairsHeight; j++) {
        stairs += (makeLine(j+1, stairsChar) + "\n");
    }
    return stairs.slice(0,-1);
}

// console.log(makeDownwardStairs(5));

// Function that makes a symmetrical line of characters
function makeSymmetricalLine(lineChar1, lengthLineChar1, lineChar2, lengthLineChar2) {
    let char1Line = '';
    let char2Line = '';
    for (i = 0; i < lengthLineChar1; i++) {
        char1Line += lineChar1;
    }
    for (j = 0; j < lengthLineChar2; j++) {
        char2Line += lineChar2;
    }
    return (char1Line + char2Line + char1Line);
}

//Function that makes an Isosceles Triangle
function makeIsoscelesTriangle(heightTriangle, char1Triangle, char2Triangle) {
    let triangle = '';
    for (k = 0; k < heightTriangle; k++) {
        triangle += makeSymmetricalLine(char1Triangle, heightTriangle - k - 1, char2Triangle, (2 * k)+ 1) + "\n";
    }
    return triangle.slice(0,-1);
}

// console.log(makeIsoscelesTriangle(5, " ", "#"));

//Function that reverses a string
function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

//Function that makes a diamond
function makeDiamond(heightDiamond, char1Diamond = " ", char2Diamond = "#") {
    let topDiamond = makeIsoscelesTriangle(heightDiamond, char1Diamond, char2Diamond);
    let bottomDiamond = reverse(topDiamond);
    return (topDiamond + "\n" + bottomDiamond);
}

// console.log(makeDiamond(5));