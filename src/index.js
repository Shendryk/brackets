module.exports = function check(str, bracketsConfig) {
  
  let arrayBrackets = [];
  let pairBrackets = {};
  for(let i = 0; i < bracketsConfig.length; i++) {
    pairBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  let strArray = str.split('');
  for(let i = 0; i < strArray.length; i++) {
    if(strArray[i] === (arrayBrackets[arrayBrackets.length - 1] || 0)) {
      arrayBrackets.pop();
    } else {
      arrayBrackets.push(pairBrackets[strArray[i]]);
    }
  }
  return arrayBrackets.length == 0 ? true : false;
}
