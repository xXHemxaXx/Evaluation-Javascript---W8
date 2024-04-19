// 🧞🧞🧞 Variable 🧞🧞🧞

// les inputs
let prenomDeUser = document.querySelector("#prenom")
let ageDeUser = document.querySelector("#age")
let poidsDeUser = document.querySelector("#poids")
let tailleDeUser = document.querySelector("#taille")

// Btns
let btnEnoyerDeUser = document.querySelector(".launch")
let btnReset = document.querySelector(".reset")

// Autres
let messageVerifier = document.querySelector(".message")
let filtrePopup = document.querySelector("#filtrePopup")
let popUp = document.querySelector(".welcome")
let textSurLeBmi = document.querySelector(".bmi-sentences")
let namePrenom = document.querySelector(".name")
let supAge = document.querySelector(".age")

// date

let aujd = new Date()
let lanneeActu = aujd.getFullYear()
console.log(aujd);
console.log(lanneeActu);



// Les Tableaux
let tabPrenom = JSON.parse(localStorage.getItem('Prenom')) || []
let tabAge = JSON.parse(localStorage.getItem('Age')) || []
let tabPoids = JSON.parse(localStorage.getItem('Poids')) || []
let tabTaille = JSON.parse(localStorage.getItem('Taille')) || []

// 🐲🐲🐲 Functionz 🐲🐲🐲

// j'ajoute les valeur dans les tableaux du localstorage
function addInputPrenom(Prenom) {
    tabPrenom.push(Prenom)
    localStorage.setItem('Prenom', JSON.stringify(tabPrenom))
}
function addInputAge(Age) {
    tabAge.push(Age)
    localStorage.setItem('Age', JSON.stringify(tabAge))
}
function addInputPoids(Poids) {
    tabPoids.push(Poids)
    localStorage.setItem('Poids', JSON.stringify(tabPoids))
}
function addInputTaille(Taille) {
    tabTaille.push(Taille)
    localStorage.setItem('Taille', JSON.stringify(tabTaille))
}

// Formule IMC
function calculeIMC(a, p) {
    return a / (p * p)
}

// verifier le statut avec  le resultat du IMC
function resultat(IMC) {
    if (IMC > 18.5){
        textSurLeBmi.innerHTML=`Vous êtes maigre`
    }
    else if (IMC > 24.9){
        textSurLeBmi.innerHTML=`Vous êtes un poids normal`
    }
    else if (IMC > 29.9){
        textSurLeBmi.innerHTML=`Vous êtes en surpoids`
    }
    else if (IMC > 39.9){
        textSurLeBmi.innerHTML=`Vous êtes obèse`
    }
    else if(IMC > 40){
        textSurLeBmi.innerHTML=`Vous êtes en obésité morbide`
    }
}

// log les tableaux
console.log(tabPrenom[0]);
console.log(tabAge[0]);
console.log(tabPoids[0]);
console.log(tabTaille[0]);



// 🧚🏼🧚🏼🧚🏼 Eventz 🧚🏼🧚🏼🧚🏼

// Recupere la valeur de l'user et verifier si le champs a ete rempli quand on appui su le btn "Enoyer" du POP-UP
btnEnoyerDeUser.addEventListener('click', function() {
    // vide le messageVerifier
    messageVerifier.innerHTML = ``
    // verifier si les 4 inputs on bien etait rempli
    if (prenomDeUser.value == "") {
        // r'ajoute la classe error sur le input 
        prenomDeUser.classList.add('error')
        // r'ajoute un message d'erreur
        messageVerifier.innerHTML += `
        merci de renseigner votre prenom,
        `
    }
    if (ageDeUser.value == "") {
        ageDeUser.classList.add('error')
        messageVerifier.innerHTML += `
        merci de renseigner votre date de naissance,
        `
    }
    if (poidsDeUser.value == "") {
        poidsDeUser.classList.add('error')
        messageVerifier.innerHTML += `
        merci de renseigner votre poids,
        `
    }
    if (tailleDeUser.value == "") {
        tailleDeUser.classList.add('error')
        messageVerifier.innerHTML += `
        merci de renseigner votre taille,
        `
    }
    // -------------------------------------------
    if (prenomDeUser.value) {
        // r'ajoute la valeur dans le localstoraage
        addInputPrenom(prenomDeUser.value)
        // enleve la classe error
        prenomDeUser.classList.remove('error')
        namePrenom.innerHTML=`${tabPrenom[0]}`
    }
    if (ageDeUser.value) {
        addInputAge(ageDeUser.value)
        ageDeUser.classList.remove('error')
        supAge.innerHTML=`Vous avez ${tabAge[0]} ans`
    }
    if (poidsDeUser.value) {
        addInputPoids(poidsDeUser.value)
        poidsDeUser.classList.remove('error')
    }
    if (tailleDeUser.value) {
        addInputTaille(tailleDeUser.value)
        tailleDeUser.classList.remove('error')
    }
    else {
        // // r'ajoute le filtre
        // filtrePopup.classList.remove('filter')
        // // r'ajoute le POP-UP
        // popUp.classList.add('active')
        // // vide le champs du input
        // prenomDeUser.value = ""
        // ageDeUser.value = ""
        // poidsDeUser.value = ""
        // tailleDeUser.value = ""
    }
    // log les tableaux
    console.log(tabPrenom[0]);
    console.log(parseInt(tabAge[0]));
    console.log(tabPoids[0].typeof);
    console.log(tabTaille[0]);
    console.log(resultat(tabPoids[0], tabTaille[0]));
})

// Efface le LocalStorage de l'user et remet le POP-UP
btnReset.addEventListener('click', function () {
    localStorage.removeItem('Prenom')
    localStorage.removeItem('Age')
    localStorage.removeItem('Poids')
    localStorage.removeItem('Taille')
    tabPrenom = []
    tabAge = []
    tabPoids = []
    tabTaille = []
    // r'ajoute le filtre
    filtrePopup.classList.add('filter')
    // r'ajoute le POP-UP
    popUp.classList.remove('active')
    // log les tableaux
    console.log(tabPrenom);
    console.log(tabAge);
    console.log(tabPoids);
    console.log(tabTaille);
})
