export default function initChoiser(yes: HTMLButtonElement, no: HTMLButtonElement){

    let current_x: null | number = null;
    let current_y: null | number = null;

    const m = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 800, 100];

    const min_diff = 200;

    const getRandomX = (): number => {
        const choise = Math.floor(Math.random() * m[Math.floor(Math.random() * m.length)]);
        
        if(!current_x) current_x = choise;

        if(current_x > window.screen.width){
            return getRandomX();
        }

        if(Math.abs(choise - current_x) > min_diff){
            return getRandomX();
        }

        return choise;
    }

    const getRandomY = (): number => {
        const choise = Math.floor(Math.random() * m[Math.floor(Math.random() * m.length)]);
        
        if(!current_y) current_y = choise;

        if(current_y > window.screen.height){
            return getRandomY();
        }

        if(Math.abs(choise - current_y) > min_diff){
            return getRandomY();
        }

        return choise;
    }

    yes.addEventListener("click", function(){
        alert("Sabía que si 😁");
    });

    no.addEventListener("click", function(){
        alert("¿Como apretaste este boton? >:(");
    });

    no.addEventListener("mouseenter", function(){

        no.style.position = "absolute";
        no.style.top = `${getRandomY()}px`;
        no.style.left = `${getRandomX()}px`;
    });

}