function entreePrenom() {
    // Récupère les différentes données du formulaire
    var nom = document.getElementById('nom').value;
    var email = document.getElementById('email').value;
    var telephone = document.getElementById('telephone').value;
    var date = document.getElementById('date').value;
    var heure = document.getElementById('heure').value;
    var nombre_personnes = document.getElementById('nombre_personnes').value;

    // Crée un message avec toutes les données du formulaire
    var message = "Merci " + nom + ", votre réservation pour " + nombre_personnes + " personne(s) le " + date + " à " + heure + " a été confirmée.";

    // Affiche le message de confirmation dans un élément HTML avec l'ID "message"
    document.getElementById("message1").innerHTML = message;
}

function verifierBouton() {
    alert("Hello\nHow are you?");
}


    // Sélectionne tous les formulaires avec la classe "form-step"
    const forms = document.querySelectorAll('.form-step');
    // Sélectionne l'élément qui affichera le message de confirmation

 const message = document.getElementById('message');
    var x=0;
  
        //vérifie s'il y a un clic d'effectué
        document.addEventListener('click', function() {
            // Cache le formulaire actuel
            forms[x].style.display = 'none';
            // Vérifie s'il y a un formulaire suivant
            if (forms[x+1]) {
                // Affiche le formulaire suivant
                forms[x+1].style.display = 'block';
                x++;
            } else {
                // Affiche un message de confirmation lorsque toutes les étapes sont terminées
                document.getElementById('message').style.display = 'block';
            }
        });
    


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const imageContainer = document.getElementById('image-container');

// Fonction pour afficher une image
function afficherImage(src) {
  const img = document.createElement('img');
  img.src = src;
  imageContainer.innerHTML = ''; // Effacer le contenu précédent
  imageContainer.appendChild(img);
}

// Événements de clic pour chaque bouton
btn1.addEventListener('click', function() {
  afficherImage('img linguine.jpeg');
});

btn2.addEventListener('click', function() {
  afficherImage('img poulet.jpeg');
});

btn3.addEventListener('click', function() {
  afficherImage('img saumon.jpeg');
});
btn4.addEventListener('click', function() {
  afficherImage('img risotto.jpeg');
});
btn5.addEventListener('click', function() {
  afficherImage('img rossini.jpeg');
});
btn6.addEventListener('click', function() {
  afficherImage('img_saumon.jpeg');
});
btn7.addEventListener('click', function() {
  afficherImage('img volaille.jpeg');
});
btn8.addEventListener('click', function() {
  afficherImage('img langouste.jpeg');
});
