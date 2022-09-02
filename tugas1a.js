const check = (word) => {
  if (typeof word == "string") {
    return true;
  } else {
    return false;
  }
};

const palindrome = (word) => {
  if (!check(word)) {
    return console.log("Pastikan input berupa string");
  }

  word = word.trim().toLowerCase();

  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }

  if (word == reverseWord) {
    return console.log("Palindrom");
  } else {
    return console.log("Bukan Palindrom");
  }
};

const word = "MaLam malam";

palindrome(word);
