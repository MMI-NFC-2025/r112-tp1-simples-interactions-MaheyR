// TODO
//trouver l'élément d'ID "a-mettre-en-rouge"
aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")

// Changer la couleur du texte de cet élément
aMettreEnRouge.style.color = "red"

//trouver l'élément d'ID "en-rouge-suite-a-click"
enRougeSuiteAClick = document.querySelector ("#en-rouge-suite-a-click")

//écouter les clicks sur lui pour alors le mettre en ruoge.
enRougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red"
});
//Trouvez tous les 'H2'
collH2 = document.querySelectorAll("H2")

//Puis pour chacun, suite à un click,
//mettre la cible de l'événement en rouge.
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red";
    });
});