//Problem Statement: Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

const rateLimiter = (i) =>
  new Promise((resolve, reject) => {
    if (i <= 10) {
      resolve(`promise ran for ${i} requests`);
    } else {
      reject("too many concurrent requests");
    }
  });

for (let i = 1; i < 12; i++) {
  rateLimiter(i)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
