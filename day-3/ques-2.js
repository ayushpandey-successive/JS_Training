// 1
// 2 3
// 4 5 6
// 7 8 9 10

const numberPattern = (range) => {
  let z = 1;
  for (let i = 0; i < range; i++) {
    let x = "";
    for (let j = 0; j < i + 1; j++) {
      //console.log(i+j+1);
      x = x + z + " ";
      z++;
    }
    console.log(x);
  }
};
numberPattern(4);

console.log();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1
// 2 2
// 3 3 3
// 4 4 4 4

const numberPattern2 = (range) => {
  for (let i = 1; i < range + 1; i++) {
    let x = "";
    for (let j = 0; j < i; j++) {
      //console.log(i+j+1);
      x = x + i + " ";
    }
    console.log(x);
  }
};
numberPattern2(4);
console.log();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

const numberPattern3 = (range) => {
  for (let i = 1; i < range + 1; i++) {
    let x = "";
    for (let j = 1; j < range + 2 - i; j++) {
      //console.log(i+j+1);
      x = x + j + " ";
    }
    console.log(x);
  }

  for (let i = 1; i < range; i++) {
    let x = "";
    for (let j = 1; j < i + 2; j++) {
      x = x + j + " ";
    }
    console.log(x);
  }
};
numberPattern3(4);
