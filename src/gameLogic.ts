import {myGameObj} from './game';
import * as data from './dataObj';
import { GameCard } from './card.class';

let imagesCodeVibes = data.codeVibesImageArr;
let backSideCodeVibes = '/assets/icons/code_theme/card_bg_code_theme.svg';
let cardsArr:GameCard[];

export function createLogicData():void{
    let amountImages = myGameObj.boardSize / 2;
    createCodeVibesData(amountImages);
    fieldAssignment();
}

function createCodeVibesData(amountImages:number):void{
    if(myGameObj.theme == 'code_vibes'){
        cardsArr = [];
        for (let index = 0; index < amountImages; index++) {
           cardsArr[index] = new GameCard(imagesCodeVibes[index], backSideCodeVibes, (index + 1), '#86E9D6'); 
        }
        console.log(cardsArr);
    }
}

function fieldAssignment():void{
    let boardArr = createBoardArr();
    getRandomFieldAndRemove(boardArr);
}

function createBoardArr():number[]{
    let boardArr:number[] = [];
    for (let index = 1; index <= myGameObj.boardSize; index++) {
        boardArr.push(index);
    }
    return boardArr;
}

function getRandomFieldAndRemove(boardArr:number[]):void{
    for (let index = 0; index < cardsArr.length; index++) {
        let field = Math.floor(Math.random() * boardArr.length);
        let valueArr = boardArr.splice(field, 1)[0];
        setFieldOnBoard(index, valueArr);
        field = Math.floor(Math.random() * boardArr.length);
        valueArr = boardArr.splice(field, 1)[0];
        setFieldOnBoard(index, valueArr);
    }
}

function setFieldOnBoard(cardNumber:number, fieldValue:number):void{
    const contentFrontRef = document.getElementById('cardFace_' + fieldValue) as HTMLImageElement;
    const contentBackRef = document.getElementById('cardBack_' + fieldValue) as HTMLImageElement;
    if(contentFrontRef){contentFrontRef.src = cardsArr[cardNumber].frontImage;}
    if(contentBackRef){contentBackRef.src = cardsArr[cardNumber].backImage;}
}
 