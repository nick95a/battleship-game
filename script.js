/*
Переменные: 

З переменных для букв загаданного слова
Булево значение (отгадано слово или нет)
Счетчик отгадываний
Размер зоны для отгадываний
Слово
*/


let secondLetterPosition = Math.floor(Math.random() * 8) + 1;
let firstLetterPosition = secondLetterPosition - 1;
let thirdLetterPosition = secondLetterPosition + 1;

let isFound = false;
let areaSize = 10;
let guesses = 5;
let lettersGuessed = 0;
let word = "мир";
let guess;
let hasGuessesLeft = true;

confirm("Ready to start the game?\nPress OK to start");
alert("У вас 5 попыток");

while (!isFound && hasGuessesLeft) {
    guess = prompt("Введите номер ячейки от 0 до 9, в котором, по вашему мнению, находится одна из букв слова:");
    if(guess > 9 || guess < 0) {
        alert("Введите новое валидное значение от 0 до 9");
    }
    else {
        guesses -= 1;
        if(guess == firstLetterPosition || guess == secondLetterPosition || guess == thirdLetterPosition) {
            lettersGuessed += 1;
            if(lettersGuessed == 3) {
                alert("Поздравляю, вы победили!");
                isFound = true;
            }
            else {
                alert("Угадали, вводите дальше");
            }
            //guess = prompt("Введите номер ячейки от 0 до 9, в котором, по вашему мнению, находится одна из букв слова:");
        }
        else {
            alert("Не угадали, вводите дальше");
        }
    }
    if(guesses == 1 && lettersGuessed != 3) {
        alert("Осталась одна попытка");
    }
    else if((guesses < 5 || guesses >= 2) && lettersGuessed != 3) {
        alert("Осталось " + guesses + " попытки");
    }
    else if (guesses == 0 && lettersGuessed != 3) {
        alert("К сожалению, вы проиграли и не смогли разгадать слово. Можете попробовать еще раз");
        hasGuessesLeft = false;
    }
}

