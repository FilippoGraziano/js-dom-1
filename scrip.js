const img = document.querySelector(`img`);
const button = document.querySelector(`button`);

let onLamp = false;

const onOffLamp = () => {
    
    if (!onLamp) {
        //r Accendi la lampadina
        img.src = `img/yellow_lamp.png`;
        button.innerHTML = `Spegni`;
        console.log(`hai acceso`)
        onLamp = true
    } else {
        //r Spegni la lampadina
        img.src = `img/white_lamp.png`
        button.innerHTML = `Accendi`;
        console.log(`hai spento`)
        onLamp = false
    };
};

button.addEventListener(`click`, onOffLamp);