import { Player } from "./interfaces";

export class GamePlayer implements Player{
    name: string;
    permission: boolean;
    points: number;

    constructor(name:string){
        this.name = name;
        this.permission = false;
        this.points = 0;
    }

    setPermission(state:boolean){
        if(state){
            this.permission = true;
        }else{
            this.permission = false;
        }
    }
}