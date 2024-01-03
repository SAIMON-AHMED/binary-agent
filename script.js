function binaryAgent(str) {
  let array = str.split(" ");
  let string = "";

  for (let i = 0; i < array.length; i++) {
    string += String.fromCharCode(parseInt(array[i], 2));
  }
  return string;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));

// prints  "Aren't bonfires fun!?"
