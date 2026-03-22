const Controleur = {
    // Initialisation au lancement du site
    init: function() {
        this.naviguer('accueil');
    },

    // Fonction de routage (gère le changement de page)
    naviguer: function(route, parametre = null) {
        const appDiv = document.getElementById('app');
        const navbar = document.getElementById('navbar');
        
        // Petite animation de fondu
        appDiv.classList.remove('fade-in');
        void appDiv.offsetWidth; // Force le redessin du navigateur
        appDiv.classList.add('fade-in');

        if (route === 'accueil') {
            // Demande à la vue de générer l'accueil avec tout le modèle
            appDiv.innerHTML = Vue.renderAccueil(Modele);
            navbar.classList.add('hidden'); // Cache le bouton retour
        } 
        else if (route === 'projet') {
            // Cherche le projet spécifique dans le modèle
            const projetData = Modele.getProjetById(parametre);
            if(projetData) {
                // Demande à la vue de générer la page de détail
                appDiv.innerHTML = Vue.renderProjetDetail(projetData);
                navbar.classList.remove('hidden'); // Affiche le bouton retour
            }
        }
        
        // Remonte en haut de la page à chaque changement
        window.scrollTo(0, 0);
    }
};

// Lancement de l'application une fois que la page est chargée
document.addEventListener('DOMContentLoaded', () => {
    Controleur.init();
});