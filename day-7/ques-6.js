//Problem Statement:Implement a function that returns a resolved Promise after a specified delay using async/await.

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved Successfully");
  }, 2000);
});

const apiData = async () => {
  const promiseData = await p1;
  console.log(promiseData);
};
apiData();
