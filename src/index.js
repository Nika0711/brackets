module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketForPair = {};
  const openBracket = [];

  for (let j = 0; j < bracketsConfig.length; j++) {
    bracketForPair[bracketsConfig[j][1]] = bracketsConfig[j][0]
    openBracket.push(bracketsConfig[j][0])
    // console.log(openBracket)
  }


  for (let i = 0; i < str.length; i++) {
    let currentElement = str[i];
    if (openBracket.includes(currentElement)) {
      stack.push(currentElement)
      if ((stack.includes('|') && currentElement === "|")) {
        stack.pop();
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      let topElement = stack[stack.length - 1]
      if (bracketForPair[currentElement] === topElement) {
        stack.pop();
      } else {
        return str.length === 0;
      }
    }

  } return stack.length === 0;
}
