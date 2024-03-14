//Problem Statement: Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

const taskQueue = (i, limit) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (i <= limit) {
        resolve(`Task ${i} exexuted successfully`);
      } else {
        reject("too many concurrent requests");
      }
    }, i * 1000);
  });

const limit = 10;
for (let i = 1; i <= limit + 1; i++) {
  taskQueue(i, limit)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
