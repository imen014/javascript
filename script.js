 /**1. **Affichage en console** :
   - Utilisez `console.log()` pour afficher "Hello, World!" dans
    la console.
 */
console.log("hello, Sahar")

/**2. **Variables et Opérations de Base** :
   - Créez une variable `nom` et attribuez-lui votre prénom. 
   Affichez-la ensuite dans la console.
   - Déclarez deux variables `nombre1` et `nombre2`, 
   attribuez-leur des valeurs numériques, puis affichez
 leur somme dans la console. */

 nom = "Rezgui"
 console.log(nom)
 nombre1 = 5
 nombre2 = 6
 console.log("la resultat est", nombre1 + nombre2)

 /**3. **Conditions et Boucles** :
   - Écrivez une condition qui vérifie si un nombre est supérieur 
   ou égal à 10, et affichez un message 
approprié dans la console.
   - Utilisez une boucle `for` pour afficher les nombres de 1 à 5 
   dans la console.
 */

function comparaisonNombreA10(nombre){
    if(nombre >= 10){
        console.log("le nombre adéquant avec 10")
    }
}
comparaisonNombreA10(50)
for(let i = 0; i <= 5; i++){
    console.log(i)
}

/**4. **Tableaux Simples** :
   - Créez un tableau de fruits contenant des éléments tels que "pomme",
    "banane", et "cerise". 
Affichez ces éléments un par un dans la console en utilisant une boucle 
`for` ou `forEach`.
 */

fruits = ["pomme","banane","cerise"]
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

/**. **Fonctions Simples** :
   - Créez une fonction nommée `multiplier` qui prend 
   deux arguments (deux nombres) et retourne
 leur produit.
   - Appelez cette fonction avec différents jeux de nombres 
   et affichez les résultats dans la console.
 */

function multiplier(a,b){
    return a * b
}
console.log(multiplier(1,2))
console.log(multiplier(4,4))
console.log(multiplier(5,2))

/**6. **Manipulation du DOM Basique** :
   - Créez une page HTML vide avec un bouton. Utilisez JavaScript 
   pour ajouter un gestionnaire d'événements
 qui affiche un message dans la console lorsque le bouton est cliqué.
 */

 function func_button1()  {
    console.log("le button est cliqué")
 }

 /**7. **Validation de Formulaire** :
   - Créez un formulaire HTML simple avec un champ de texte et un bouton 
   de soumission.
   - Utilisez JavaScript pour vérifier si le champ de texte est vide
    lorsque le bouton est cliqué, 
et affichez un message d'erreur si c'est le cas.
 */
/*
document.addEventListener("DOMContentLoaded", function() {
    

    let text = document.getElementById("b1").value;

    if(text.length === 0) {
        console.log("text vide !");
    }
    else {
        console.log("text bien saisi !" + text);
    }
    
});
*/
/**
8. **Mini-Projet - Liste de Tâches** :
   - Créez une liste de tâches où l'utilisateur peut ajouter des tâches 
   à faire.
   - Utilisez JavaScript pour ajouter des tâches à la liste, les marquer 
   comme terminées et les supprimer.
 */

function lister_taches(){
listes_taches = []
tache = document.getElementById("tache").value;
listes_taches.append(tache)
console.log(listes_taches)
return listes_taches
}




