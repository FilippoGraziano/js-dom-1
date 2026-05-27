const img = document.querySelector(`img`);
const button = document.querySelector(`button`);

const offLamp = () => {

    img.src = `img/white_lamp.png`
    button.innerHTML = `Accendi`;
    button.removeEventListener(`click`, offLamp);
    console.log(`hai spento`)
};

const onLamp = () => {

    img.src = `img/yellow_lamp.png`;
    button.innerHTML = `Spegni`;
    button.addEventListener(`click`, offLamp);
    console.log(`hai acceso`)
    
};

button.addEventListener(`click`, onLamp);