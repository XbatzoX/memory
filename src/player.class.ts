import { Player } from "./interfaces";
import { CardValues } from "./interfaces";
import { Pickedcards } from "./interfaces";

export class GamePlayer implements Player{
    name: string;
    permission: boolean;
    attempts: number;
    points: number;
    cardValues: CardValues;
    pickedCards: Pickedcards;
    

    constructor(name:string){
        this.name = name;
        this.permission = false;
        this.attempts = 0;
        this.points = 0;
        this.cardValues= {
            "card1" : 0,
            "card2" : 0
        };
        this.pickedCards = {
            "cardPos1" : 0,
            "cardPos2" : 0
        }
    }

    setPermission(state:boolean):void{
        if(state){
            this.permission = true;
            this.setAttempts(2)
        }else{
            this.permission = false;
            this.setAttempts(0);
        }
    }

    setAttempts(amount:number):void{
        this.attempts = amount;
    }

    setCardValue1(value:number):void{
        this.cardValues.card1 = value;
    }

    setCardValue2(value:number):void{
        this.cardValues.card2 = value;
    }

    increasePoints():void{
        this.points += 1;
    }

    setCardPos(card:1 | 2, position:number){
        if(card == 1){this.pickedCards.cardPos1 = position;}
        if(card == 2){this.pickedCards.cardPos2 = position;}
    }
}