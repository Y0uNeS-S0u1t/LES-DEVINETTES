const words = ['chien', 'chat', 'maison', 'voiture']; // Liste de mots à deviner
let selectedWord = words[Math.floor(Math.random() * words.length)]; // Choix aléatoire d'un mot
let guessedWord = '_'.repeat(selectedWord.length); // Mot en cours de devinage
let guessesLeft = 6; // Nombre de tentatives restantes

document.getElementById('word-container').innerText = guessedWord;

function checkGuess() {
    const guessInput = document.getElementById('guess').value.toLowerCase();
    document.getElementById('guess').value = ''; // Réinitialiser le champ de saisie

    let newGuessedWord = '';
    let correctGuess = false;

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === guessInput) {
            newGuessedWord += guessInput;
            correctGuess = true;
        } else {
            newGuessedWord += guessedWord[i];
        }
    }

    if (!correctGuess) {
        guessesLeft--;
        document.getElementById('result').innerText = `Mauvaise lettre ! ${guessesLeft} tentatives restantes.`;
        if (guessesLeft === 0) {
            document.getElementById('result').innerText = `Vous avez perdu ! Le mot était "${selectedWord}".`;
            document.getElementById('guess-container').style.display = 'none';
        }
    } else {
        guessedWord = newGuessedWord;
        document.getElementById('word-container').innerText = guessedWord;
        if (guessedWord === selectedWord) {
            document.getElementById('result').innerText = 'Félicitations ! Vous avez deviné le mot !';
            document.getElementById('guess-container').style.display = 'none';
        }
    }
}