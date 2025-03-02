"use strict";

// Récupère le texte de l'élément avec l'ID 'citation'
let mots = document.getElementById('citation').textContent;
console.log(mots); // Affiche le texte dans la console pour vérification

// Enlève toute la ponctuation du texte
mots = mots.replace(/[^\w\s]/g, "");
console.log(mots); // Affiche le texte sans ponctuation

// Transforme le texte en un tableau de mots, en séparant par les espaces
mots = mots.split(" ");
console.log(mots); // Affiche le tableau de mots dans la console

let longueurMax = 0; // Variable pour stocker la longueur du mot le plus long
let motsLongs = []; // Tableau pour stocker les mots les plus longs

// Parcourt chaque mot du tableau pour trouver les mots les plus longs
for (let parcourir = 0; parcourir < mots.length; parcourir++) {
    let mot = mots[parcourir];
    
    // Si un mot est plus long que le précédent, on réinitialise le tableau avec ce mot
    if (mot.length > longueurMax) {
        longueurMax = mot.length;
        motsLongs = [mot]; // Réinitialise avec le nouveau mot le plus long
    } 
    // Si un mot a la même longueur que le plus long, on l'ajoute au tableau des mots longs
    else if (mot.length === longueurMax) {
        motsLongs.push(mot); // Ajoute un autre mot de même longueur
    }
}

console.log("Longueur max :", longueurMax); // Affiche la longueur du mot le plus long
console.log("Mots les plus longs :", motsLongs); // Affiche les mots les plus longs

// Met à jour le contenu de l'élément avec l'ID 'motPlusLong' avec les mots les plus longs
document.getElementById("motPlusLong").textContent = `Le mot le plus long est : ${motsLongs.join(" et ")}`;
