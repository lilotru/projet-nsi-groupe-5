function entreePrenom() 
{
    nom = document.getElementById('nom').value;
    email = document.getElementById('email').value;
    telephone = document.getElementById('telephone').value;
    date = document.getElementById('date').value;
    heure = document.getElementById('heure').value;
    nombre_personnes = document.getElementById('nombre_personnes').value;

    message = "Merci " + nom + ", votre réservation pour " + nombre_personnes + " personne(s) le " + date + " à " + heure + " a été confirmée.";
  document.getElementById("message").innerHTML = message;
}