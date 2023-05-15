var wordList;

//Fetch the word list from the server and format it to an array
fetch('https://gwc-wordle-w-backend.audreybunn.repl.co/words')
.then(response => response.text())
.then(words => {
  window.wordList = words.replaceAll('"', '').toString().split(',');
});

function buttonClick() {
  var element = document.getElementById('test-box');
  element.innerHTML = wordList;
}
