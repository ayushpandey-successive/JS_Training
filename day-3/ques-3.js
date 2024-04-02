// 3. Write a program to display Diamond Pattern

//         *
//       *  *
//     *  *  *
//   *  *  *  *
// *  *  *  *  *
//   *  *  *  *
//     *  *  *
//      *  *
//        *


function DiamondPattern(size) {
    var ans = "";
    for (var i = 1; i <= size; i++) {
      for (let s = size - 1; s >= i; s--) {
        ans += (" ");
      }
      for (let j = 1; j <= i; j++) {
        ans += ("* ")
      }
      ans += "\n";
    }
    if (i == size + 1) {
      for (let i = 1; i <= size - 1; i++) {
        for (let s = 1; s <= i; s++) {
          ans += (" ");
        }
        for (let j = i; j <= size - 1; j++) {
          ans+= ("* ");
        }
        ans+= "\n";
      }
    }
    console.log(ans);
  }
  DiamondPattern(5);
  
