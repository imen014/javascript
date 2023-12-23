/**1. **Addition simple** :
   - Créez un programme qui demande à l'utilisateur de saisir 
   deux nombres, puis affiche la somme 
des deux nombres. */

function addition_simple(){
    nombre = prompt("entre un nombre à additionner !")
    nombre2 = prompt("entrer un autre nombre")
    result = Number(nombre) + Number(nombre2)
    alert("le reultat est : " + result)
}

/**2. **Message de Bienvenue** :
   - Créez un programme qui demande le nom de l'utilisateur, 
   puis affiche un message de bienvenue 
personnalisé. */

function bienvenue(){
    nom = prompt("entrer votre nom")
    alert("bienvenue, " + nom)
}
//bienvenue()

/**
3. **Calculatrice d'âge** :
   - Créez un programme qui demande à l'utilisateur son année
    de naissance, calcule son âge et l'affiche
 à l'écran. */

 function calculateur_age(){
    annee_naissance = Number(prompt("entrer votre année de naissance"))
    age = 2023 - annee_naissance
    alert("votre age est : " + age)
 }
 //calculateur_age()

 /**4. **Conversion de Température** :
   - Créez un programme qui demande à l'utilisateur de saisir 
   une température en degrés Celsius, 
puis la convertit en degrés Fahrenheit en utilisant
 la formule : Fahrenheit = (Celsius * 9/5) + 32.
 */

 function convertir_temperature(){
    temperature = Number(prompt("entre une temperature en degré celsus"))
    temperature_fahrenheit = (temperature * 9/5) + 32
    alert("la temperature en fahrenheit est : " + temperature_fahrenheit)
 }
 //convertir_temperature()

 /**5. **Compteur de clics** :
   - Créez une page web avec un bouton et un compteur initialisé à zéro.
   - Écrivez un programme JavaScript pour augmenter le compteur à chaque
    fois que le bouton est cliqué.
 */
let compteur = 0;

function compteur_click(){
    compteur++
    document.getElementById("compteur").textContent = "Clics : " + compteur; // Met à jour l'affichage du compteur
    alert("nombre de clicks:  " + compteur)
    }
  
/**7. **Table de Multiplication** :
   - Créez un programme qui demande à l'utilisateur de saisir un nombre,
    puis affiche la table 
de multiplication de ce nombre (de 1 à 10).
 */

function table_de_multiplication(){
    number = Number(prompt("entrer un nombre à multiplier"))
    for(let i = 1; i <= 10; i++){
        result = number * i
        contenu = "la multiplication de " + number + " * " + i + " = " + result
        alert(contenu)
    }
}
//table_de_multiplication()

/**8. **Vérification de l'Éligibilité au Vote** :
   - Créez un programme qui demande à l'utilisateur son âge, 
   puis indique s'il est éligible pour voter 
ou non (l'âge minimum pour voter varie selon les pays).
 */

function vote_requirements(){
    age = Number(prompt("entrer votre age"))
    pays = prompt("entrer votre pays")
    if(age>18){
        alert("vous pouvez votez en " + pays)
    }
    else {
        alert("non elligible pour votre")
    }
}
//vote_requirements()

/**0. **Quiz de Réponse Oui/Non** :
    - Posez une série de questions à l'utilisateur auxquelles il peut 
    répondre par "Oui" ou "Non". 
Comptez le nombre de réponses correctes et affichez le score à la fin.
 */

function Quizz(){
    let score = 0;
    questions = ["do u remember yesturday?", "are u enjoy playing?", "do u love winter?"]
    for(let i = 0; i < questions.length; i++){
        answer = prompt(questions[i])
        if(answer === true || answer === "yess" || answer === "oui"){
            score++
        }
    }
    contenu = "ton score est : " + score + " / " + questions.length
    alert(contenu)
    return score
}

//Quizz()