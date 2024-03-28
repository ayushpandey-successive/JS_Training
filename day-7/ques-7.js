//Problem Statement:Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully from first promise");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully from second promise");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched successfully from third promise");
  }, 3000);
});

const apiCalling = async () => {
  const [a, b, c] = await Promise.all([promise1, promise2, promise3]);

  console.log(a);
  console.log(b);
  console.log(c);
};

apiCalling();
