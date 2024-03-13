// 1
// 2 3
// 4 5 6
// 7 8 9 10
const range = 4;
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

console.log();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1
// 2 2
// 3 3 3
// 4 4 4 4

const r = 4;

for (let i = 1; i < r + 1; i++) {
  let x = "";
  for (let j = 0; j < i; j++) {
    //console.log(i+j+1);
    x = x + i + " ";
  }
  console.log(x);
}
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

const m = 5;

for (let i = 1; i < m + 1; i++) {
  let x = "";
  for (let j = 1; j < m + 2 - i; j++) {
    //console.log(i+j+1);
    x = x + j + " ";
  }
  console.log(x);
}

for (let i = 1; i < m; i++) {
  let x = "";
  for (let j = 1; j < i + 2; j++) {
    x = x + j + " ";
  }
  console.log(x);
}
