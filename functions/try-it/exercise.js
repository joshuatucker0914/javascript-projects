function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
      line += '#';
    }
    return line;
  }

function makeSquare(width,height){
    let square = "";
    for (let i = 0; i < height; i++) {
      square += (makeLine(width) + '\n');
    }
    return square.slice(0, -1);
}


function makeDownwardStairs(height){
    let stairs = '';
    for (let i = 0; i < height; i++) {
    stairs += (makeLine(i+1) + '\n');
}
  return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars){
    let line = '';
     for (let i = 0; i < numSpaces; i++) {
    line += " ";
  }
  for (let i = 0; i < numChars; i++) {
    line += "#";
  }
    for (let i = 0; i < numSpaces; i++) {
        line += " ";
      }

    return line
}  

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n');
    }
    return triangle.slice(0, -1);
  }


  function makeDiamond(height) {
    if (height % 2 === 0) {
      height++;
    }
    let topTriangle = makeIsoscelesTriangle((height));
    let bottomTriangle = topTriangle.split('\n').reverse().join('\n');
  
    return topTriangle + '\n' + bottomTriangle;
  }
  
  console.log(makeDiamond(5));
  