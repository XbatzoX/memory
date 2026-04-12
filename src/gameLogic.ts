import {myGameObj} from './game';
import * as data from './dataObj';
import { GameCard } from './card.class';
import { Field } from './interfaces';

let imagesCodeVibes = data.codeVibesImageArr;
let backSideCodeVibes = '/assets/icons/code_theme/card_bg_code_theme.svg';
let imagesFoodTheme = data.foodThemeImageArr;
let backSideFoodTheme = '/assets/icons/food_theme/bg_food_theme.svg';
let cardsArr:GameCard[];


export function createLogicData():void{
    let amountImages = myGameObj.boardSize / 2;
    createCodeVibesData(amountImages);
    createFoodThemeData(amountImages);
    fieldAssignment();
    console.log(cardsArr);
}

function createCodeVibesData(amountImages:number):void{
    if(myGameObj.theme == 'code_vibes'){
        cardsArr = [];
        for (let index = 0; index < amountImages; index++) {
           cardsArr[index] = new GameCard(imagesCodeVibes[index], backSideCodeVibes, (index + 1), '#86E9D6'); 
        }
    }
}

function createFoodThemeData(amountImages:number):void{
    if(myGameObj.theme == 'food_theme'){
        cardsArr = [];
        for (let index = 0; index < amountImages; index++) {
            cardsArr[index] = new GameCard(imagesFoodTheme[index], backSideFoodTheme, (index + 1), '#F58E39');
        }
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
        let fieldObj:Field = {
            "cardPos1": '',
            "cardPos2": '',
            "value": 0
        };
        let field = Math.floor(Math.random() * boardArr.length);
        let valueArr = boardArr.splice(field, 1)[0];
        fieldObj.cardPos1 = `${valueArr}`;
        fieldObj.value = cardsArr[index].cardNumber;
        setFieldOnBoard(index, valueArr, fieldObj);

        field = Math.floor(Math.random() * boardArr.length);
        valueArr = boardArr.splice(field, 1)[0];
        fieldObj.cardPos2 = `${valueArr}`;
        fieldObj.value = cardsArr[index].cardNumber;
        setFieldOnBoard(index, valueArr, fieldObj);
    }
}


function setFieldOnBoard(cardNumber:number, fieldValue:number, fielObj:Field):void{
    const contentFrontRef = document.getElementById('cardFace_' + fieldValue) as HTMLImageElement;
    const contentBackRef = document.getElementById('cardBack_' + fieldValue) as HTMLImageElement;
    if(contentFrontRef){contentFrontRef.src = cardsArr[cardNumber].frontImage;}
    if(contentBackRef){
        contentBackRef.src = cardsArr[cardNumber].backImage;
        cardsArr[cardNumber].setCardNumberToFieldObj(fielObj);
    }
}
 