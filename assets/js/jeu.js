//Création du personnage aléatoirement pour l'ordinateur
let ordinateur = ['Naruto', 'Sakura', 'Tanjiro', 'Nezuko'];
let convertir = Math.floor(Math.random() * ordinateur.length);
let personnage_ordinateur = ordinateur[convertir];

//Creation de la variable aleatoire shifumi
let shifumi_random = ['pierre', 'feuille', 'ciseau'];

//creation du compteur de point
let point_utilisateur = 0;
let point_ordinateur = 0;

// Function de l'affichage des personnages en fonction du choix de l'utilisateur et attribution aléatoire de l'ordinateur
function affichage_nom(ordinateur) {
    // Partie utilisateur
    if (localStorage.getItem('Manga_fight') == 'Naruto') {
        titre_du_joueur.setAttribute('src', 'assets/img/titre_naruto.png');
        perso_utilisateur_combat.setAttribute('src', 'assets/img/naruto_combat.png');
    }
    else if (localStorage.getItem('Manga_fight') == 'Sakura') {
        titre_du_joueur.setAttribute('src', 'assets/img/titre_sakura.png');
        perso_utilisateur_combat.setAttribute('src', 'assets/img/sakura_combat_utilisateur.png');
    }
    else if (localStorage.getItem('Manga_fight') == 'Tanjiro') {
        titre_du_joueur.setAttribute('src', 'assets/img/titre_tanjiro.png');
        perso_utilisateur_combat.setAttribute('src', 'assets/img/tanjiro_combat_utilisateur.png');
    }
    else if (localStorage.getItem('Manga_fight') == 'Nezuko') {
        titre_du_joueur.setAttribute('src', 'assets/img/titre_nezuko.png');
        perso_utilisateur_combat.setAttribute('src', 'assets/img/nezuko_combat.png');
    }
    else {
        console.log("Une erreur c'est produite");
    }

    // Partie ordinateur
    if (ordinateur == 'Naruto') {
        titre_du_ordinateur.setAttribute('src', 'assets/img/titre_naruto.png');
        perso_ordinateur_combat.setAttribute('src', 'assets/img/naruto_combat_ordinateur.png');
    }
    else if (ordinateur == 'Sakura') {
        titre_du_ordinateur.setAttribute('src', 'assets/img/titre_sakura.png');
        perso_ordinateur_combat.setAttribute('src', 'assets/img/sakura_combat.png');
    }
    else if (ordinateur == 'Tanjiro') {
        titre_du_ordinateur.setAttribute('src', 'assets/img/titre_tanjiro.png');
        perso_ordinateur_combat.setAttribute('src', 'assets/img/tanjiro_combat.png');
    }
    else if (ordinateur == 'Nezuko') {
        titre_du_ordinateur.setAttribute('src', 'assets/img/titre_nezuko.png');
        perso_ordinateur_combat.setAttribute('src', 'assets/img/nezuko_combat.png');
    }
    else {
        console.log("Une erreur dans le choix de l'odinateur c'est produit");
    }
}

function shifumi(utilisateur) {
    let convertir = Math.floor(Math.random() * shifumi_random.length);
    let choix = shifumi_random[convertir];


    if (utilisateur == 1) {

        if (choix == 'pierre') {
            win_or_defeat.setAttribute('src', 'assets/img/egalite.png')
            choix_ia.setAttribute('src', 'assets/img/pierre.png');
        }
        else if (choix == 'feuille') {
            win_or_defeat.setAttribute('src', 'assets/img/perdu.png')
            choix_ia.setAttribute('src', 'assets/img/feuille.png');
            point_ordinateur++;
            compteur_ordinateur();
        }
        else if (choix == 'ciseau') {
            win_or_defeat.setAttribute('src', 'assets/img/gagner.png')
            choix_ia.setAttribute('src', 'assets/img/ciseaux.png');
            point_utilisateur++;
            compteur_utilisateur();
        }
        else {
            alert(`Erreur`);
            console.log(choix)
        }
    }
    else if (utilisateur == 2) {
        if (choix == 'feuille') {
            win_or_defeat.setAttribute('src', 'assets/img/egalite.png');
            choix_ia.setAttribute('src', 'assets/img/feuille.png');
        }
        else if (choix == 'ciseau') {
            win_or_defeat.setAttribute('src', 'assets/img/perdu.png');
            choix_ia.setAttribute('src', 'assets/img/ciseaux.png');
            point_ordinateur++;
            compteur_ordinateur();
        }
        else if (choix == 'pierre') {
            win_or_defeat.setAttribute('src', 'assets/img/gagner.png')
            choix_ia.setAttribute('src', 'assets/img/pierre.png');
            point_utilisateur++;
            compteur_utilisateur();
        }
        else {
            alert(`Erreur`);
        }
    }
    else if (utilisateur == 3) {
        if (choix == 'ciseau') {
            win_or_defeat.setAttribute('src', 'assets/img/egalite.png')
            choix_ia.setAttribute('src', 'assets/img/ciseaux.png');
        }
        else if (choix == 'pierre') {
            win_or_defeat.setAttribute('src', 'assets/img/perdu.png');
            choix_ia.setAttribute('src', 'assets/img/pierre.png');
            point_ordinateur++;
            compteur_ordinateur();
        }
        else if (choix == 'feuille') {
            win_or_defeat.setAttribute('src', 'assets/img/gagner.png');
            choix_ia.setAttribute('src', 'assets/img/feuille.png');
            point_utilisateur++;
            compteur_utilisateur();
        }
        else {
            alert(`Erreur`);
        }
    }
    else {
        console.log('erreur');
    }
}

function compteur_ordinateur() {
    if (point_ordinateur == 1 ) {
        score_ordinateur.setAttribute('src', `assets/img/score_1.png`);
        barre_joueur.setAttribute('style', 'width: 60%');
    }
    else if (point_ordinateur == 2){
        score_ordinateur.setAttribute('src', `assets/img/score_2.png`);
        barre_joueur.setAttribute('style', 'width: 25%');
    }
    else if (point_ordinateur == 3) {
        score_ordinateur.setAttribute('src', `assets/img/score_3.png`);
        barre_joueur.setAttribute('style', 'width: 0%');
        afficher_resultat.setAttribute('src',`assets/img/defaite.png`);
        $('#combat').hide();
        $('#fin').show();
    }
    else {
        console.log("erreur");
    }
}

function compteur_utilisateur() {
    if (point_utilisateur == 1 ) {
        score_joueur.setAttribute('src', `assets/img/score_1.png`);
        barre_ordinateur.setAttribute('style', 'width: 60%');
    }
    else if (point_utilisateur == 2) {
        score_joueur.setAttribute('src', `assets/img/score_2.png`);
        barre_ordinateur.setAttribute('style', 'width: 25%');
    }
    else if (point_utilisateur == 3) {
        score_joueur.setAttribute('src', `assets/img/score_3.png`);
        barre_ordinateur.setAttribute('style', 'width: 0%');
        afficher_resultat.setAttribute('src',`assets/img/victoire.png`);
        $('#combat').hide();
        $('#fin').show();
    }
    else {
        console.log("erreur");
    }
}

pierre.addEventListener('click', () => {
    shifumi(1);
})

feuille.addEventListener('click', () => {
    shifumi(2);
})

ciseaux.addEventListener('click', () => {
    shifumi(3);
})
//Lancement de la fonction pour afficher les personnages utilisateur et ordinateur
affichage_nom(personnage_ordinateur);
$('#fin').hide();









