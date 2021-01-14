const getRegisterValue = (multiplier) => [...Array(multiplier)].map(() => Math.floor(Math.random() * 2));

const rejestrID = {};
//rozbicie rejestrów *x -> na 2 osobne 8 bitowe *l i *h  
["AL", "BL", "CL", "DL", "AH", "BH", "CH", "DH"].map(code => rejestrID[code] = getRegisterValue(8));
["BP", "SP", "SI", "DI"].map(code => rejestrID[code] = getRegisterValue(16));

rejestrID.AX = rejestrID["AH"].concat(rejestrID["AL"]);
rejestrID.BX = rejestrID["BH"].concat(rejestrID["BL"]);
rejestrID.CX = rejestrID["CH"].concat(rejestrID["CL"]);
rejestrID.DX = rejestrID["DH"].concat(rejestrID["DL"]);

const rejestr = [...document.querySelectorAll('.osemkowy')];
const szesnastkowyrejestr = document.querySelectorAll('.szesnastkowy');

rejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
szesnastkowyrejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));



const nowyWiersz = () =>  {
    const ostatniWiersz = document.querySelector('.aktualnyWiersz');
    const wiersz = document.querySelector('.konsola');
    const ostatniWierszwpisz = ostatniWiersz.querySelector('wpisz');

    ostatniWiersz.classList.remove('aktualnyWiersz');
    ostatniWierszwpisz.disabled = true;
    ostatniWierszwpisz.id = "";

    let linia = document.createElement("div");
    linia.className = "Wiersz aktualnyWiersz";
    linia.innerHTML = `<wpisz type="text" id="adres"></wpisz>`;
    wiersz.appendChild(linia);
}

document.addEventListener('keypress', e => {
    if (e.keyCode == 13) {
        const dane = document.querySelector('#adres');
        const wpisz = dane.value.toUpperCase();
        const commands = wpisz.replace(',', ' ').split(' ').filter(el => el != "");

        if (commands[0].toUpperCase() == "MOV" && rejestrID[commands[2]].length == rejestrID[commands[1]].length) {

            rejestrID[commands[2]] = rejestrID[commands[1]];
            if (commands[2].includes("X") && commands[1].includes("X")) {
                rejestrID[commands[2].replace("X", "H")] = rejestrID[commands[2]].slice(0, 8);
                rejestrID[commands[2].replace("X", "L")] = rejestrID[commands[2]].slice(8, 16);
                rejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
                szesnastkowyrejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
            } else if (commands[2].includes("X")) {
                rejestrID[commands[2].replace("X", "H")] = rejestrID[commands[2]].slice(0, 8);
                rejestrID[commands[2].replace("X", "L")] = rejestrID[commands[2]].slice(8, 16);
                rejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
                szesnastkowyrejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
            } else {
                if (rejestrID[commands[2]].length == 8) {  
                    let regId = commands[2].charAt(0);
                    let regszesnastkowyId = commands[2].replace("H", "X").replace("L", "X");
                    rejestrID[regszesnastkowyId] = rejestrID[`${regId}H`].concat(rejestrID[`${regId}L`]);
                }
                rejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
                szesnastkowyrejestr.forEach(el => el.innerHTML = rejestrID[el.dataset.reg].join(""));
            }
            nowyWiersz();
        } 
    }
});


