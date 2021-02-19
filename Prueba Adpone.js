// Escribe una función que dado un input "aaaabbbbbcca" devuelva un output: [["a", 4], ["b", 5], ["c", 2], ["a", 1]]

const consecutiveLetters = (string) => {
  let stringLetterCount = string.match(/([a-zA-Z])\1*/g) || [];
  return stringLetterCount.map((letter)=>{
    return [letter.charAt(0), letter.length];
  });
}


const string = "aaaabbbbbcca"
console.log(adpone(string))