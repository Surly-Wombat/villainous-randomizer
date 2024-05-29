const button = document.querySelector('button');
const villainSlots = Array.from(document.getElementsByClassName('option'));

const villains = ["Captain Hook", "Maleficent", "Jafar", "Ursula", "Prince John", "Queen of Hearts", "Edgar Balthazar", "Ratigan", "Scar", "Yzma", "Pete", "Cruella de Vil", "Mother Gothel", "Hades", "Dr. Facilier", "Evil Queen", "Lady Tremaine", "Gaston", "Horned King", "Lotso", "Syndrome", "Madam Mim", "Oogie Boogie"];

const selectedIndexes = [];

function randomize() {
    if(villains.length - selectedIndexes.length < 3) return;
    
    const usedIndexes = [];
    villainSlots.forEach((slot) => {
        slot.classList.add('active');

        let randIndex;
        do {
            randIndex = Math.floor(Math.random() * villains.length);
        } while(usedIndexes.includes(randIndex) || selectedIndexes.includes(randIndex));

        slot.id = randIndex;
        usedIndexes.push(randIndex);
        slot.getElementsByTagName('label')[0].innerText = villains[randIndex];
        slot.getElementsByTagName('img')[0].src = nameToImage(villains[randIndex]);
    });
}

function nameToImage(name) {
    return "./images/" + name.toLowerCase().replaceAll(' ','-').replaceAll('.','') + ".jpg";
}

function select(event) {
    let target = event.target;
    while (!target.classList.contains('option')) {
        target = target.parentNode;
    }
    selectedIndexes.push(parseInt(target.id));
    randomize();
}

button.addEventListener("click", randomize);
villainSlots.forEach((slot) => {
    slot.addEventListener("click", event => select(event));
});