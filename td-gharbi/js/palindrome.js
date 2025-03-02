
document.getElementById('reverseButton').addEventListener('click', function() {
    
    // Récupère la valeur saisie dans l'input avec l'ID 'inputText'
    let text = document.getElementById('inputText').value;
    
    // Inverse le texte en le divisant en un tableau de caractères, puis en inversant et rejoignant les caractères
    let reversedText = text.split('').reverse().join('');
    
    // Met à jour l'élément avec l'ID 'outputText' pour afficher le texte inversé
    document.getElementById('outputText').textContent = reversedText;

    // Vérifie si le texte original est le même que le texte inversé
    // Si oui, c'est un palindrome
    if (text === reversedText) {
        // Affiche un message indiquant que c'est un palindrome
        document.getElementById('palindromeMessage').textContent = "Ceci est un palindrome.";
    } else {
        // Si ce n'est pas un palindrome, affiche ce message
        document.getElementById('palindromeMessage').textContent = "Ceci n'est pas un palindrome.";
    }
});

