// Function qui recupere le choix du joueur et qui ouvre la page arene de combat

function personnage_choice(perso_choice) {

    if (perso_choice == 1) {
        turn_naruto.setAttribute('class', 'rotate-vert-center');

        localStorage.setItem('Manga_fight', 'Naruto');
        window.location.href = "arene.html";
    }
    else if (perso_choice == 2) {
        turn_sakura.setAttribute('class', 'rotate-vert-center');

        localStorage.setItem('Manga_fight', 'Sakura');
        window.location.href = "arene.html";
    }
    else if (perso_choice == 3) {
        turn_tanjiro.setAttribute('class', 'rotate-vert-center');

        localStorage.setItem('Manga_fight', 'Tanjiro');
        window.location.href = "arene.html";
    }
    else if (perso_choice == 4) {
        turn_nezuko.setAttribute('class', 'rotate-vert-center');

        localStorage.setItem('Manga_fight', 'Nezuko');
        window.location.href = "arene.html";
    }
    else {
        console.log("Erreur");
    }

}

choice_naruto.addEventListener('click', (e) => {
    e.preventDefault();
    personnage_choice(1);
})

choice_sakura.addEventListener('click', (e) => {
    e.preventDefault();
    personnage_choice(2);
})

choice_tanjiro.addEventListener('click', (e) => {
    e.preventDefault();
    personnage_choice(3);
})

choice_nezuko.addEventListener('click', (e) => {
    e.preventDefault();
    personnage_choice(4);
})

