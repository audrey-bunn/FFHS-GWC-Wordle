var wordList;
var entries = [[],[],[],[],[]];
var currentPosition = [0,0];

//Fetch the word list from the server and format it to an array
fetch('https://gwc-wordle-w-backend.audreybunn.repl.co/words')
.then(response => response.text())
.then(words => {
  window.wordList = words.replaceAll('"', '').toString().split(',');
});

function buttonClick(key){
    if (key != "backspace" && key != "enter" && window.currentPosition[1]<=4){
        entries[window.currentPosition[0]][window.currentPosition[1]] = key;
        var box = document.getElementById(window.currentPosition.join(''));
        box.innerHTML=key;
        if (window.currentPosition[1]<5){
            window.currentPosition[1]=window.currentPosition[1]+1;   
        }
    }
    if (key == "enter" && window.currentPosition[1]==5){
        newLine();
    }
    if (key == "backspace" && window.currentPosition[1]>0){
        window.currentPosition[1]=window.currentPosition[1]-1;
        var box = document.getElementById(window.currentPosition.join(''));
        box.innerHTML='&nbsp';
    }
}
function newLine(){
    if (window.currentPosition[1]==5){
            window.currentPosition[0]=window.currentPosition[0]+1;
            window.currentPosition[1]=0;
        }
        else{
            window.currentPosition[1]=window.currentPosition[1]+1;
        }
}
