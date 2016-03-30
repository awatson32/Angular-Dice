/// <reference path="typings/browser.d.ts" />

class Vehicle {
    damagePoints: number = 0;
    damageTolerance: number;
    speed: number;
    vehicleElement: HTMLDivElement;
    
    constructor(damageTolerance: number, speed:number) {
        
    }
    
    moveRight()  {
        $(this.vehicleElement).animate({
            left: -50
        })
    }
}