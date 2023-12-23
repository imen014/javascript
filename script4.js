let baliseImage = document.getElementById("premiereImage");
baliseImage.setAttribute("alt", "Ceci est une image de test modifiée");
baliseImage.src = "cheminImage.jpg";
baliseImage.classList.add("nouvelleClasse")
baliseImage.classList.remove("photo")

let monBouton = document.getElementById("monBouton");
monBouton.addEventListener("click", function () {
    console.log("Vous avez cliqué sur le bouton")
});

document.addEventListener('keypress', (event) => {
    console.log(event.key);
});