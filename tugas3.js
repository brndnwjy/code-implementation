const divideAndSort = (num) => {
  num = num.toString();
  let arr = [];
  let res = [];

  for (let i = 0; i <= num.length; i++) {
    if (num[i] === "0") {
      res.push(arr);
      arr = [];
    } else if (i == num.length) {
      res.push(arr);
    } else {
      arr.push(num[i]);
    }
  }

  for (line of res) {
    line = line.sort((a, b) => a - b);
  }

  return console.log(res.flat().join(""));
};

const number = 739281038308201282;

divideAndSort(number);
