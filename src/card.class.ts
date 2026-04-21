import {Card} from './interfaces';
import { Field } from './interfaces';

export class GameCard implements Card{
    frontImage: string;
    backImage: string;
    cardNumber: number;
    colorMatch: string;

    fieldObj: Field = {
        "cardPos1" : {
            "fieldPos": '',
            "flipPermission": true
        },
        "cardPos2" : {
            "fieldPos": '',
            "flipPermission": true
        },
        "value" : 0
    };

    /**
     * The constructor loads the choosen images of theme and implements the color if one pair is match
     * 
     * @param frontImage - includes the path of front icon from game card
     * @param backImage - includes the path of background image from theme
     * @param cardNumber - includes the card number to identfy a match
     * @param colorMatch  - includes the color of match status as border
     */
    constructor(frontImage:string, backImage:string, cardNumber:number, colorMatch:string){
        this.frontImage = frontImage;
        this.backImage = backImage;
        this.cardNumber = cardNumber;
        this.colorMatch = colorMatch;
    }

    /**
     * This function is used set the card data information into object
     * 
     * @param fieldObj 
     */
    setCardNumberToFieldObj(fieldObj:Field):void{
        this.fieldObj = fieldObj;
    }
}