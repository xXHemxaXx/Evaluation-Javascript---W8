//🧞🧞🧞🧞🧞🧞🧞🧞🧞🧞🧞
// 🧞🧞🧞 Variable 🧞🧞🧞
//🧞🧞🧞🧞🧞🧞🧞🧞🧞🧞🧞

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
let afficheImc = document.querySelector(".my-bmi")
let poidsA_Affiche = document.querySelector(".last-last-weight")

// Les Tableaux
let tabPrenom = JSON.parse(localStorage.getItem('Prenom')) || []
let tabAge = JSON.parse(localStorage.getItem('Age')) || []
let tabPoids = JSON.parse(localStorage.getItem('Poids')) || []
let tabTaille = JSON.parse(localStorage.getItem('Taille')) || []

//🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲
// 🐲🐲🐲 Functionz 🐲🐲🐲
//🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲🐲
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
function calculeIMC(poidsUser, tailleUser) {
    let tailleImcFloat = tailleUser / 100
    let IMC = parseFloat( poidsUser / (tailleImcFloat * tailleImcFloat))
    console.log(IMC);
    return IMC
}

// verifier le statut avec le resultat du IMC
function resultat(IMC) {
    if (IMC < 18.5){
        return textSurLeBmi.innerHTML=`Vous êtes maigre`
    }
    else if (IMC < 24.9){
        return textSurLeBmi.innerHTML=`Vous êtes un poids normal`
    }
    else if (IMC < 29.9){
        return textSurLeBmi.innerHTML=`Vous êtes en surpoids`
    }
    else if (IMC < 39.9){
        return textSurLeBmi.innerHTML=`Vous êtes obèse`
    }
    else if(IMC < 40){
        return textSurLeBmi.innerHTML=`Vous êtes en obésité morbide`
    }
}

// Age (recois l'annee de l'user et le divide avec l'annee d'aujd pour avoir l'age)
function age(valeurdate) {
    // date
    let aujd = new Date()
    let lanneeActu = aujd.getFullYear()
    console.log(aujd);
    console.log(lanneeActu);
    console.log(valeurdate);
    let age = (lanneeActu - valeurdate) - 1
    return age
}

// affiche le IMC dans la page avec les couleur
function compteur(IMC) {
    let total = IMC
    for (let i = 0; i <= total; i++) {
        // change la couleur du IMC
        function intColor(compteur) {
            if (compteur >= 18){
                afficheImc.classList.add('maigeur')
            }
            else if (compteur >= 24){
                afficheImc.classList.remove('maigeur')
                afficheImc.classList.add('normal')
            }
            else if (compteur >= 29){
                afficheImc.classList.remove('normal')
                afficheImc.classList.add('surpoids')
            }
            else if (compteur >= 39){
                afficheImc.classList.remove('surpoids')
                afficheImc.classList.add('obesite')
            }
            else if(compteur >= 40){
                afficheImc.classList.remove('obesite')
                afficheImc.classList.add('obesite-morbide')
            }
        }
        // affiche le IMC
        afficheImc.innerHTML=`${intColor(i)}`
    }
}

// log les tableaux
console.log(tabPrenom);
console.log(age(parseInt(tabAge[0])));
console.log(parseInt(tabPoids[0]));
console.log(parseInt(tabTaille[0]));
console.log(resultat(calculeIMC(tabPoids[0], tabTaille[0])));


//🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼
// 🧚🏼🧚🏼🧚🏼 Eventz 🧚🏼🧚🏼🧚🏼
//🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼🧚🏼

// Recupere la valeur de l'user et verifier si le champs a ete rempli quand on appui su le btn "Enoyer" du POP-UP
btnEnoyerDeUser.addEventListener('click', function() {
    // vide le messageVerifier
    messageVerifier.innerHTML = ``
    // verifier si les 4 inputs sont vide alors il envoie un massega plus lindique avec la class error
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
    // -------------------------------------------------------------------------------------------------------
    if (prenomDeUser.value != "") {
        // r'ajoute la valeur dans le localstoraage
        addInputPrenom(prenomDeUser.value)
        // enleve la classe error
        prenomDeUser.classList.remove('error')
        // affiche le prrenom sur la page
        namePrenom.innerHTML=`${tabPrenom[0]}`
    }
    if (ageDeUser.value != "") {
        addInputAge(ageDeUser.value)
        ageDeUser.classList.remove('error')
        // affiche l'age sur la page  
        supAge.innerHTML=`Vous avez ${age(parseInt(tabAge[0]))} ans`
    }
    if (poidsDeUser.value != "") {
        addInputPoids(poidsDeUser.value)
        poidsDeUser.classList.remove('error')
    }
    if (tailleDeUser.value != "") {
        addInputTaille(tailleDeUser.value)
        tailleDeUser.classList.remove('error')
    }
    if (prenomDeUser.value != "" &&  ageDeUser.value != "" && poidsDeUser.value != "" && tailleDeUser.value != ""){
        // enleve le filtre
        filtrePopup.classList.remove('filter')
        // enleve le POP-UP
        popUp.classList.add('active')
        poidsA_Affiche.innerHTML=`${parseInt(tabPoids[0])}`
        // rajout la categorie dans la page 
        let scoreImc = calculeIMC(tabPoids[0], tabTaille[0])
        resultat(scoreImc)
        // arrondi le IMC
        let arrondiImc = Math.round(scoreImc*1)/1;
        console.log(arrondiImc);
        compteur(arrondiImc)
        // vide le champs du input
        prenomDeUser.value = ""
        ageDeUser.value = ""
        poidsDeUser.value = ""
        tailleDeUser.value = ""
    }
    // log les tableaux
    console.log(tabPrenom[0]);
    console.log(age(parseInt(tabAge[0])));
    console.log(parseInt(tabPoids[0]));
    console.log(parseInt(tabTaille[0]));
    console.log(resultat(calculeIMC(tabPoids[0], tabTaille[0])));
})

// Efface le LocalStorage de l'user et remet le POP-UP
btnReset.addEventListener('click', function () {
    // remove le tableaux localstorage
    localStorage.removeItem('Prenom')
    localStorage.removeItem('Age')
    localStorage.removeItem('Poids')
    localStorage.removeItem('Taille')
    // vide le tableaux
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
