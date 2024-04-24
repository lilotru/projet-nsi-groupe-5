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




document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.form-step');
    const message = document.getElementById('message');
  
    // Fonction pour afficher le formulaire suivant
    function showNextForm(currentStep) {
        const nextStep = currentStep.dataset.step;
        const nextForm = document.querySelector(`.form-step[data-step="${parseInt(nextStep) + 1}"]`);
  
        if (nextForm) {
            currentStep.style.display = 'none';
            nextForm.style.display = 'block';
        } else {
            // Afficher un message de confirmation lorsque toutes les étapes sont terminées
            
            document.getElementById('message').style.display = 'block';
            currentStep.style.display = 'none';
        }
    }
  
    // Détecte si on appui sur un bouton "Suivant"
    const nextButtons = document.querySelectorAll('.next-step');
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const currentForm = this.parentElement;
            showNextForm(currentForm);
        });
    });
  });
  





var monbouton=document.getElementById("bouton");
function maFonction()
{
    alert("en cours de procédure");
}
monbouton.onclick=maFonction;

 var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse1.mm.bing.net/th?id=OIP.whrWTKNx-P5bH6ZTdrt9KgHaE8&pid=Api&P=0&h=180"
 
var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse1.mm.bing.net/th?id=OIP.wO1cwBP-BCb6QK28NfaI2gHaHa&pid=Api&P=0&h=180"

var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse4.mm.bing.net/th?id=OIP.6NBhir9iyW19YIlcXn8tmAHaD4&pid=Api&P=0&h=180"

var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse3.mm.bing.net/th?id=OIP.mkwvc4IRQRXNvw24UA-mOAHaFj&pid=Api&P=0&h=180"

var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse3.mm.bing.net/th?id=OIP.-HOmGCoCCk_agw7zfMvobgHaE7&pid=Api&P=0&h=180"

var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse1.mm.bing.net/th?id=OIP.tb6bhXOWM1cUepocTKX2qgHaFm&pid=Api&P=0&h=180"

var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse2.mm.bing.net/th?id=OIP.AKMdmQkF6ai2BPC8So_r7QHaEK&pid=Api&P=0&h=180"

var imagejavascript = document.createElement("img")

 imagejavascript.src = "https://tse3.mm.bing.net/th?id=OIP.HcvF8ebcFYuFTv0zYGEf7QHaFE&pid=Api&P=0&h=180"

 
 document.getElementById("bouton").addEventListener("click", function() {
    // Lorsque le bouton est cliqué, affiche la nouvelle fenetre avecc l'image
    var imageURL = "https://tse1.mm.bing.net/th?id=OIP.whrWTKNx-P5bH6ZTdrt9KgHaE8&pid=Api&P=0&h=180;"
// pour change l'image, il faut changer le lien ci-dessus avec les autres liens dans le java scipt du menu
    var modal = document.getElementById("modal");
    var image = document.getElementById("image");

    // Affiche l'image dans la nouvelle fenetre 
    image.src = imageURL;
    modal.style.display = "block";

    // Ferme la boîte modale quand le client appuye sur le bouton
    var closeButton = document.getElementById("close");
    closeButton.onclick = function() {
        modal.style.display = "none";
    }
});

 