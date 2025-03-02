function construirePyramide() {
    // Récupère la valeur saisie dans le champ "ligne-pyramide" et la convertit en nombre entier
    let lignes = parseInt(document.getElementById("ligne-pyramide").value);

    // Initialise une variable pour stocker la pyramide sous forme de chaîne de caractères
    let pyramide = "";

    // Boucle pour construire chaque ligne de la pyramide
    for (let i = 1; i <= lignes; i++) {
        // Ajoute des espaces pour centrer les étoiles, puis ajoute les étoiles, le nombre d'étoiles étant 2 * i - 1
        pyramide += " ".repeat(lignes - i) + "*".repeat(2 * i - 1) + "\n";
    }

    // Utilise .slice(0, pyramide.length) pour éviter d'ajouter un saut de ligne en trop
    document.getElementById("pyramide").textContent = pyramide.slice(0, pyramide.length);
}
