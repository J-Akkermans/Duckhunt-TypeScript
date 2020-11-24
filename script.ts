const list: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

const img: HTMLElement = document.getElementById('img');

const step: number = 75;





function fly(direction:string){ 
    console.log(direction)

    var x: string = window.getComputedStyle(img).left.replace('px', '');
    var y: string = window.getComputedStyle(img).top.replace('px','');
    var valueX:number = parseInt(x);
    var valueY:number = parseInt(y);

    var moveXUP:number = valueY - step;
    var moveXDOWN:number = valueY + step;

    var moveYLEFT:number = valueX - step;
    var moveYRIGHT:number = valueX + step;

    switch (direction) {
        case "n":
            img.setAttribute("style", "top:"+ moveXUP +"px");
            break;
        case "e":
            img.setAttribute("style", "left:"+ moveYRIGHT +"px");
            break;
        case "s":
            img.setAttribute("style", "top:"+ moveXDOWN +"px");
            break;
        case "w":
            img.setAttribute("style", "left:"+ moveYLEFT +"px");
            break;
    }

    
}
