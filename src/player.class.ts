import { Player } from "./interfaces";
import { CardValues } from "./interfaces";

export class GamePlayer implements Player{
    name: string;
    permission: boolean;
    attempts: number;
    points: number;
    cardValues: CardValues;
    

    constructor(name:string){
        this.name = name;
        this.permission = false;
        this.attempts = 0;
        this.points = 0;
        this.cardValues= {
            "card1" : 0,
            "card2" : 0
        };
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

    setCardValue1(value:number){
        this.cardValues.card1 = value;
    }

    setCardValue2(value:number){
        this.cardValues.card2 = value;
    }
}