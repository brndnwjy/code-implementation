const check = (phrase) => {
  if (typeof phrase == "string") {
    return true;
  } else {
    return false;
  }
};

const reverse = (phrase) => {
  if (!check(phrase)) {
    return console.log("Pastikan input berupa string");
  }

  phrase = phrase.trim().split(" ");
  let reversePhrase = [];

  for (let i = phrase.length - 1; i >= 0; i--) {
    reversePhrase.push(phrase[i]);
  }

  return console.log(reversePhrase.join(" "));
};

const phrase = "Saya belajar Javascript";

reverse(phrase);
