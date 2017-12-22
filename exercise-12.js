function balikString(str) {
  var newString="";
  for (var i = str.length - 1; i >= 0; i--) {
       newString += str[i];
  }
  return newString;
}

balikString("hello world!")
// in console,
// input: balikString("hello world!")
// output: "!dlrow olleh"
