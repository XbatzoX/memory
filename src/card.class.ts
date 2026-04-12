import {Card} from './interfaces';

export class GameCard implements Card{
    frontImage: string;
    backImage: string;
    cardNumber: number;
    colorMatch: string;

    constructor(frontImage:string, backImage:string, cardNumber:number, colorMatch:string){
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.cardNumber = cardNumber;
        this.colorMatch = colorMatch;
    }
}