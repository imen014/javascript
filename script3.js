/**1. **Affichage de Messages** :
   - Créez un programme qui affiche trois messages différents 
   dans la console.
 */

function message_console(){
    messages = ["il fait beau !", "le meteo est incroyable !", "c'est bien de danser"]
    for(let i = 0; i < messages.length; i++){
        console.log(messages[i])
    }
}

message_console()

/**2. **Opérations Mathématiques** :
   - Déclarez deux variables, `nombre1` et `nombre2`, avec des valeurs
    numériques. Ensuite, effectuez 
une opération mathématique de votre choix (addition, soustraction, 
    multiplication, division) entre elles
 et affichez le résultat. */

 function calculateur(){
    nombre1 = Number(prompt("entrer nombre1"))
    nombre2 = Number(prompt("entrer nombre2"))
    operateur = prompt("entre l'operateur voulues !")

    switch (operateur){
        case "+":
            result = nombre1 + nombre2;
            break;
        case "-":
            result = nombre1 - nombre2
            break;
        case "*":
            result = nombre1 * nombre2
            break;
        case "/":
            result = nombre1 / nombre2;
            break;
        default:
            alert("verifier l'operateur")

    }
    alert("la resultat de " + nombre1 + operateur + nombre2 + " = " + result)
    return result
 }

 //calculateur()

 /**3. **Concaténation de Chaînes** :
   - Créez deux variables, `prenom` et `nom`, et attribuez-leur 
   vos prénoms respectifs. 
Concaténez-les pour former une phrase comme "Prénom Nom" 
et affichez-la dans la console.
 */

function make_username(){
    prenom = "Rezgui"
    Nom = "Imen"
    console.log(prenom +" "+ Nom)
}
//make_username()

/**4. **Calcul de l'Âge** :
   - Demandez à l'utilisateur d'entrer son année de naissance
    à l'aide de la fonction `prompt()`. 
Ensuite, calculez et affichez son âge dans la console.
 */

function anniversaire_reste(){
    mois_naissance = Number(prompt("entrer votre mois de naissance"))
    reste_sur_anniversaire = 9 - mois_naissance
    alert("reste sur ton anniversaire : " + reste_sur_anniversaire)
    
}
//anniversaire_reste()

/**5. **Validation de Formulaire Simple** :
   - Créez un formulaire HTML avec un champ de texte et un bouton 
   de soumission.
   - Utilisez JavaScript pour vérifier si le champ de texte 
   est vide lorsque le bouton est cliqué,
 et affichez un message d'erreur si c'est le cas.
 */

 function tester_bouton2(){
    soumission = document.getElementById("soumi")
    if(soumission){
        data = document.getElementById("b_test").value;
        if(data.length > 0){
            alert("text bien saisi  " + data)
        }else{
            alert("veuillez remplir le champ texte")
        }
    }
 }

 /**6. **Liste de Courses** :
   - Créez un tableau vide appelé `listeCourses`.
   - Demandez à l'utilisateur d'entrer le nom d'un article à acheter 
   à l'aide de la fonction `prompt()` 
et ajoutez cet article à la liste.
   - Répétez cette étape pour plusieurs articles, puis affichez 
   la liste complète dans la console.
 */

function liste_produits(){
    let liste_de_produits = [];
    let nombre_produits_achetee = Number(prompt("entrer le nombre de produit : "));
    for(let i = 1; i <= nombre_produits_achetee ; i++){
        let produit = prompt("entrer le produit " + i);
        liste_produits.push(produit);
        
    }
    alert("liste de produit total : " + liste_de_produits.join(", "));
}

liste_produits();

/**8. **Gestionnaire de Tâches Simple** :
   - Créez un formulaire HTML avec un champ de texte pour entrer 
   une tâche et un bouton 
pour l'ajouter à une liste.
   - Utilisez JavaScript pour ajouter des tâches à la liste 
   et affichez-les à l'écran.
 */

function new_liste_taches(){
    let liste_new_taches = [];
    let tache = document.getElementById("tache").value;
    if(tache.length > 0){
        liste_new_taches.push(tache)
        alert("tache ajouté : " + tache)
    }else{
        alert("liste de tache vide")

    }

}
new_liste_taches()
