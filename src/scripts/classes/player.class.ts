import { Player } from "../dataStructure/interfaces";
import { CardValues } from "../dataStructure/interfaces";
import { Pickedcards } from "../dataStructure/interfaces";

export class GamePlayer implements Player{
    name: string;
    permission: boolean;
    attempts: number;
    points: number;
    cardValues: CardValues;
    pickedCards: Pickedcards;
    
    /**
     * This constructor set the name of player
     * @param name - includes the name of player
     */
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

    /**
     * This function set the permission of player to play
     * @param state - includes info of permission
     */
    setPermission(state:boolean):void{
        if(state){
            this.permission = true;
            this.setAttempts(2)
        }else{
            this.permission = false;
            this.setAttempts(0);
        }
    }

    /**
     * This function sets the amount of attempts of player
     * @param amount - includes the amount of attempts
     */
    setAttempts(amount:number):void{
        this.attempts = amount;
    }

    /**
     * This function is used to set the card value of first card
     * @param value - includes the card value
     */
    setCardValue1(value:number):void{
        this.cardValues.card1 = value;
    }

    /**
     * This function is used to set the card value of second card
     * @param value - includes the card value
     */
    setCardValue2(value:number):void{
        this.cardValues.card2 = value;
    }

    /** This function is used to increase the amount of points after a card match on board */
    increasePoints():void{
        this.points += 1;
    }

    /**
     * This function is used to set both card position into object
     * @param card - includes the card 1 or 2
     * @param position - includes the position on board
     */
    setCardPos(card:1 | 2, position:number){
        if(card == 1){this.pickedCards.cardPos1 = position;}
        if(card == 2){this.pickedCards.cardPos2 = position;}
    }
}