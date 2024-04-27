


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
    // Sélectionne tous les boutons "Suivant"
    const suivant = document.querySelectorAll('.next-step');
    var x=0;
  
        //à chaque clic, effectue la fonction
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



   
 document.getElementById('showImageButton').addEventListener('click', function() {
    // Sélectionne l'élément contenant l'image
    var imageContainer = document.getElementById('imageContainer');

    // Crée un élément image
    var image = document.createElement('img');

    // Définit la source de l'image (url de l'image que vous avez choisie)
    image.src = "https://tse3.mm.bing.net/th?id=OIP.mkwvc4IRQRXNvw24UA-mOAHaFj&pid=Api&P=0&h=180";

    // Affiche l'image en la rendant visible
    imageContainer.appendChild(image);
    imageContainer.style.display = 'block';
});

document.getElementById('showImageButton2').addEventListener('click', function() {
    // Sélectionne l'élément contenant l'image
    var imageContainer = document.getElementById('imageContainer2');

    // Crée un élément image
    var image = document.createElement('img');

    // Définit la source de l'image (url de l'image que vous avez choisie)
    image.src = "https://tse3.mm.bing.net/th?id=OIP.-HOmGCoCCk_agw7zfMvobgHaE7&pid=Api&P=0&h=180";

    // Affiche l'image en la rendant visible
    imageContainer2.appendChild(image);
    imageContainer2.style.display = 'block';
});

document.getElementById('showImageButton3').addEventListener('click', function() {
    // Sélectionne l'élément contenant l'image
    var imageContainer = document.getElementById('imageContainer3');

    // Crée un élément image
    var image = document.createElement('img');

    // Définit la source de l'image (url de l'image que vous avez choisie)
    image.src = "https://tse1.mm.bing.net/th?id=OIP.tb6bhXOWM1cUepocTKX2qgHaFm&pid=Api&P=0&h=180";

    // Affiche l'image en la rendant visible
    imageContainer3.appendChild(image);
    imageContainer3.style.display = 'block';
});

document.getElementById('showImageButton4').addEventListener('click', function() {
    // Sélectionne l'élément contenant l'image
    var imageContainer4 = document.getElementById('imageContainer4');

    // Crée un élément image
    var image = document.createElement('img');

    // Définit la source de l'image (url de l'image que vous avez choisie)
    image.src = "https://tse1.mm.bing.net/th?id=OIP.whrWTKNx-P5bH6ZTdrt9KgHaE8&pid=Api&P=0&h=180";

    // Affiche l'image en la rendant visible
    imageContainer4.appendChild(image);
    imageContainer4.style.display = 'block';
});

document.getElementById('showImageButton5').addEventListener('click', function() {
    // Sélectionne l'élément contenant l'image
    var imageContainer5 = document.getElementById('imageContainer5');

    // Crée un élément image
    var image = document.createElement('img');

    // Définit la source de l'image (url de l'image que vous avez choisie)
    image.src = "https://tse1.mm.bing.net/th?id=OIP.wO1cwBP-BCb6QK28NfaI2gHaHa&pid=Api&P=0&h=180";

    // Affiche l'image en la rendant visible
    imageContainer5.appendChild(image);
    imageContainer5.style.display = 'block';
});

document.getElementById('showImageButton6').addEventListener('click', function() {
    // Sélectionne l'élément contenant l'image
    var imageContainer6 = document.getElementById('imageContainer6');

    // Crée un élément image
    var image = document.createElement('img');

    // Définit la source de l'image (url de l'image que vous avez choisie)
    image.src = "https://tse4.mm.bing.net/th?id=OIP.6NBhir9iyW19YIlcXn8tmAHaD4&pid=Api&P=0&h=180";

    // Affiche l'image en la rendant visible
    imageContainer6.appendChild(image);
    imageContainer6.style.display = 'block';
});

