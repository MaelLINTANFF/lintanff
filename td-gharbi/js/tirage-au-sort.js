function tirage() {
    // Tableau contenant les mangas à tirer au sort
    let mangas = ["Naruto", "One Piece", "DBZ", "Bleach", "HxH", "JJK", 
                  "Spy x Family", "Sakamoto Days", "JJBA", "HnK", "Boruto"];

    // Génération d'un index aléatoire basé sur la taille du tableau
    const indexAleatoire = Math.floor(Math.random() * mangas.length);

    // Récupération de l'élément aléatoire
    const mangaTire = mangas[indexAleatoire];

    // Affichage de l'élément tiré au sort sur la page
    document.getElementById('affichage').textContent = "Manga tiré au sort : " + mangaTire;
}