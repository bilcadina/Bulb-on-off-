var bulbs = ['room1', 'room2', 'room3'];

function bulbOff(bulbName){
    bulbName.querySelector('img').src='bulboff.gif';
}

function bulbOn(bulbName){
    bulbName.querySelector('img').src='bulbon.gif';
}

function insertBulbs() {
    var bulbsCollection = document.getElementById('bulbs');
    var bulbsHTML = bulbs.map(bulb => insertBulb(bulb));
    bulbsCollection.innerHTML = bulbsHTML.join('');
}

function insertBulb(bulbName) {
    return `
        <h1>${bulbName}</h1>
        <div id=${bulbName}>
            <button onclick="bulbOn(${bulbName})">turn on</button>
            <img id="myImage${bulbName}" src="bulbon.gif" style="width: 100px;">
            <button onclick="bulbOff(${bulbName})">turn off</button>
        </div>
    `;
}

insertBulbs();


