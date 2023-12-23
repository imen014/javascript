/**1. **Changer le texte d'un élément :**
   - Sélectionnez un élément HTML par son ID, sa classe ou sa balise.
   - Utilisez JavaScript pour changer le texte de cet élément.
 */

   let element1 = document.getElementById("p1");
   element1.innerHTML = "modification 1";

   /**2. **Modifier les attributs :**
   - Sélectionnez un élément HTML.
   - Utilisez JavaScript pour changer la valeur d'un attribut 
   de cet élément, comme son `src`, `href`,
 ou `alt`.
 */

 let img1 = document.getElementById("img1");
 img1.alt = "image 1 traité sous js : alt ";

 /**3. **Ajouter et supprimer des éléments :**
   - Créez un nouvel élément HTML avec JavaScript.
   - Ajoutez ce nouvel élément à un élément existant sur la page.
   - Supprimez un élément de la page. */

   let h1 = document.createElement("h1");
   h1.textContent = "premier element ajouté avec js";

   let div = document.querySelector(".div1");
   div.appendChild(h1);

   let element_a_supprimer = document.getElementById("p2");
  element_a_supprimer.remove();

  /**4. **Manipuler les classes CSS :**
   - Sélectionnez un élément HTML.
   - Ajoutez, supprimez ou basculez des classes CSS sur cet élément 
   pour changer son style.
 */

p1.classList.add("c1");
p1.classList.remove("c1");

/**5. **Gestionnaires d'événements :**
   - Ajoutez un gestionnaire d'événements à un élément 
   (par exemple, un bouton).
   - Répondez à un événement (comme un clic) en modifiant 
   le DOM (par exemple, en ajoutant un élément).
 */

let bouton1 = document.querySelector("#bouton1");
bouton1.addEventListener("click", function(){

    let bouton2 = document.createElement("button");
    bouton2.textContent = "bouton au hasard !";

    let div1 = document.getElementById("div1");
    div1.appendChild(bouton2);
})

/**6. **Création d'une liste dynamique :**
   - Créez une liste vide (par exemple, une liste `<ul>`).
   - À l'aide d'un formulaire, permettez aux utilisateurs d'ajouter 
   des éléments à cette liste
 et de les supprimer. */
let valider = document.getElementById("valider");
valider.addEventListener('click', function (){
let username = document.getElementById("usernema");
let liste = document.getElementById("liste");
liste.appendChild(username);


 })