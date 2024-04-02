//Problem Statement : Find Error in below questions and rectify them

// async function getData() {
//   setTimeout(function () {
//     return [1, 2, 3, 4, 5];
//   }, 1000);
// }
// getData().then(function (data) {
//   console.log(data);
// });

// wrap the set timeout in a promise so that the array is returned in a defined time frame.
async function getData() {
  return await new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}
getData().then(function (data) {
  console.log(data);
});
