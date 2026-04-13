import { myGameObj } from './game';
import * as data from './dataObj';
import { GameCard } from './card.class';
import { GamePlayer } from './player.class';
import { Field } from './interfaces';

let imagesCodeVibes = data.codeVibesImageArr;
let backSideCodeVibes = '/assets/icons/code_theme/card_bg_code_theme.svg';
let imagesFoodTheme = data.foodThemeImageArr;
let backSideFoodTheme = '/assets/icons/food_theme/bg_food_theme.svg';
export let cardsArr:GameCard[];
export let playerArr:GamePlayer[];
let currentPlayer:string = '';


export function createLogicData():void{
    let amountImages = myGameObj.boardSize / 2;
    createCodeVibesData(amountImages);
    createFoodThemeData(amountImages);
    fieldAssignment();
    initializePlayer();
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
            "cardPos1": {
                "fieldPos": '',
                "flipPermission": true
            },
            "cardPos2": {
                "fieldPos": '',
                "flipPermission": true
            },
            "value": 0
        };
        let field = Math.floor(Math.random() * boardArr.length);
        let valueArr = boardArr.splice(field, 1)[0];
        fieldObj.cardPos1.fieldPos = `${valueArr}`;
        fieldObj.value = cardsArr[index].cardNumber;
        setFieldOnBoard(index, valueArr, fieldObj);

        field = Math.floor(Math.random() * boardArr.length);
        valueArr = boardArr.splice(field, 1)[0];
        fieldObj.cardPos2.fieldPos = `${valueArr}`;
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

function initializePlayer():void{
    playerArr = [];
    playerArr.push(new GamePlayer('blue'));
    playerArr.push(new GamePlayer('orange'));
    if(myGameObj.player == 'blue'){
        playerArr[0].setPermission(true);
        setCurrentPlayer('blue');
    }else{
        playerArr[1].setPermission(true);
        setCurrentPlayer('orange');
    }
    console.log(playerArr);
}

function setCurrentPlayer(player:string):void{
    let contentImgRef = document.getElementById('current_player_indication') as HTMLImageElement;
    let contentDivRef = document.getElementById('cp_indication_container') as HTMLDivElement;
    if(player == 'blue'){
        if(myGameObj.theme == 'code_vibes' && contentImgRef){contentImgRef.src = '/assets/icons/current_player_blue_code_theme.svg';}
        if(myGameObj.theme == 'food_theme' && contentDivRef){contentDivRef.style.backgroundColor = "#2BB1FF";}
        currentPlayer = 'blue';
    }
    if(player == 'orange'){
        if(myGameObj.theme == 'code_vibes' && contentImgRef){contentImgRef.src = '/assets/icons/current_player_orange_code_theme.svg';}
        if(myGameObj.theme == 'food_theme' && contentDivRef){contentDivRef.style.backgroundColor = "#F58E39";}
        currentPlayer = 'orange';
    }
}

export function setDataAfterFlip(i:number){
    for (let index = 0; index < playerArr.length; index++) {
        if(playerArr[index].name == currentPlayer){
            removeFlipPermissionFromCard(i);
            putValueOfCardToPlayerStorage(playerArr[index].attempts, i);
            playerArr[index].attempts -= 1;
            if(playerArr[index].attempts <= 0){
                changePlayer();
                setCurrentPlayer(currentPlayer);
            }
            break;
        }
    }
}

function removeFlipPermissionFromCard(i:number):void{
    let card = '';
    for (let index = 0; index < cardsArr.length; index++) {
        card = cardsArr[index].fieldObj.cardPos1.fieldPos;
        if(card == `${i}`){cardsArr[index].fieldObj.cardPos1.flipPermission = false;}

        card = cardsArr[index].fieldObj.cardPos2.fieldPos;
        if(card == `${i}`){cardsArr[index].fieldObj.cardPos2.flipPermission = false;}
    }
}

function putValueOfCardToPlayerStorage(attempts:number, i:number):void{
    let card = '';
    let cardNumber = 0;
    if(attempts == 2){
        for (let index = 0; index < cardsArr.length; index++) {
            card = cardsArr[index].fieldObj.cardPos1.fieldPos;
            if(card == `${i}`){
                cardNumber = cardsArr[index].cardNumber;
                for (let index = 0; index < playerArr.length; index++) {
                    if(playerArr[index].name == currentPlayer){playerArr[index].setCardValue1(cardNumber);}
                }
                break;
            }
            card = cardsArr[index].fieldObj.cardPos2.fieldPos;
            if(card == `${i}`){
                cardNumber = cardsArr[index].cardNumber;
                for (let index = 0; index < playerArr.length; index++) {
                    if(playerArr[index].name == currentPlayer){playerArr[index].setCardValue1(cardNumber);}
                }
                break;
            }
        }
    }

    if(attempts == 1){
        for (let index = 0; index < cardsArr.length; index++) {
            card = cardsArr[index].fieldObj.cardPos1.fieldPos;
            if(card == `${i}`){
                cardNumber = cardsArr[index].cardNumber;
                for (let index = 0; index < playerArr.length; index++) {
                    if(playerArr[index].name == currentPlayer){playerArr[index].setCardValue2(cardNumber);}
                }
                break;
            }
            card = cardsArr[index].fieldObj.cardPos2.fieldPos;
            if(card == `${i}`){
                cardNumber = cardsArr[index].cardNumber;
                for (let index = 0; index < playerArr.length; index++) {
                    if(playerArr[index].name == currentPlayer){playerArr[index].setCardValue2(cardNumber);}
                }
                break;
            }
        }
    }
}

function changePlayer():void{
    let changed = false;
    if(currentPlayer == 'blue' && !changed){
        for (let index = 0; index < playerArr.length; index++) {
            if(playerArr[index].name == currentPlayer){
                playerArr[index].permission = false;
                playerArr[index].cardValues.card1 = 0;
                playerArr[index].cardValues.card2 = 0;
                currentPlayer = 'orange';
            }
            if(currentPlayer == 'orange'){
                for (let index = 0; index < playerArr.length; index++) {
                    if(playerArr[index].name == currentPlayer){
                        playerArr[index].attempts = 2;
                        playerArr[index].permission = true;
                    }
                }
                changed = true;
                break;
            }
        }
    }

    if(currentPlayer == 'orange' && !changed){
        for (let index = 0; index < playerArr.length; index++) {
            if(playerArr[index].name == currentPlayer){
                playerArr[index].permission = false;
                playerArr[index].cardValues.card1 = 0;
                playerArr[index].cardValues.card2 = 0;
                currentPlayer = 'blue';
            }
            if(currentPlayer == 'blue'){
                for (let index = 0; index < playerArr.length; index++) {
                    if(playerArr[index].name == currentPlayer){
                        playerArr[index].attempts = 2;
                        playerArr[index].permission = true;
                    }
                }
                changed = true;
                break;
            }
        }
    }
}
