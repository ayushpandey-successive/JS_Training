//Problem Statement: Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const func1 = async (print) => {
  setTimeout(async () => {
    const res = await fetch(
      "https://currency-exchange.p.rapidapi.com/listquotes",
      {
        headers: {
          "X-RapidAPI-Key":
            "5f4516e06cmshfd4c3e5f19ad444p1ce5fbjsna35db917957a",
          "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
        },
      }
    );
    const data = await res.json();
    print(data);
  }, 1000);
};
const print = (data) => {
  console.log(data);
};

func1(print);
