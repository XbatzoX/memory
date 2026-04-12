import { Player } from "./interfaces";

export class GamePlayer implements Player{
    name: string;
    permission: boolean;
    attempts: number;
    points: number;

    constructor(name:string){
        this.name = name;
        this.permission = false;
        this.attempts = 0;
        this.points = 0;
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
}