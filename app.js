var word = prompt("Enter Your Word");
var check = "";
for (var i = word.length - 1; i >= 0; i--) {
  check += word[i];
}

if (word === check) {
  document.write(word + " is palindrome word");
} else {
  document.write(word + " is not a polidrome word");
}
