import {Card} from './interfaces';
import { Field } from './interfaces';

export class GameCard implements Card{
    frontImage: string;
    backImage: string;
    cardNumber: number;
    colorMatch: string;

    fieldObj: Field = {
        "cardPos1" : '',
        "cardPos2" : '',
        "value" : 0
    };

    constructor(frontImage:string, backImage:string, cardNumber:number, colorMatch:string){
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.cardNumber = cardNumber;
        this.colorMatch = colorMatch;
    }

    setCardNumberToFieldObj(fieldObj:Field):void{
        this.fieldObj = fieldObj;
    }
}