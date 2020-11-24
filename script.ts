const list: string[] = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];

const img: HTMLElement = document.getElementById('img');

const step: number = 75;





function fly(direction:string){ 
    console.log(direction)
    var x: string = window.getComputedStyle(img).left.replace('px', '');
    var y: string = window.getComputedStyle(img).top.replace('px','');
    var valueX:number = parseInt(x);
    var valueY:number = parseInt(y);
}