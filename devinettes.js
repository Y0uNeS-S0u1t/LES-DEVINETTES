const words = ['chien', 'chat', 'maison', 'voiture']; // Liste de mots à deviner
let selectedWord = ''; // Mot sélectionné
let guessedWord = ''; // Mot en cours de devinage
let guessesLeft = 6; // Nombre de tentatives restantes
let points = 0; // Nombre de points

// Fonction pour choisir un mot aléatoire dans la liste
function selectWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedWord = '_'.repeat(selectedWord.length);
    document.getElementById('word-container').innerText = guessedWord;
}

// Initialiser le jeu
selectWord();

// Fonction pour vérifier la lettre devinée
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
            points += selectedWord.length * 10;
            document.getElementById('points').innerText = `Points : ${points}`;
            document.getElementById('result').innerText = `Félicitations ! Vous avez deviné le mot "${selectedWord}" et avez gagné ${selectedWord.length * 10} points !`;
            document.getElementById('guess-container').style.display = 'none';
            setTimeout(() => {
                selectWord();
                guessesLeft = 6;
                document.getElementById('guess-container').style.display = 'block';
                document.getElementById('result').innerText = '';
            }, 2000); // Attendre 2 secondes avant de choisir un nouveau mot
        }
    }
}
