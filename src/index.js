module.exports = function reverse (n) {
  Math.sign(n) === 1 ? n : n *= -1
  let str = n.toString();
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  let reverseNumber = Number(reverseStr);
  return reverseNumber;
}
