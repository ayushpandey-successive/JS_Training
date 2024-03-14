//Problem Statement : Find Error in below questions and rectify them

// var promise = new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve("Data received"); }, 1000);
//  });
//  promise.then(function(data) {
//     console.log(data);
//  }, function(error) {
//     console.log(error);
//  });


// also look for catch block

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Data received");
  }, 1000);
});
promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });


  