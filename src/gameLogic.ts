import { myGameObj } from './game';
import * as data from './dataObj';
import { GameCard } from './card.class';
import { GamePlayer } from './player.class';
import { Field } from './interfaces';
import * as actions from './actionsNextPlayer';

let imagesCodeVibes = data.codeVibesImageArr;
let backSideCodeVibes = '/memory/assets/icons/code_theme/card_bg_code_theme.svg';
let imagesFoodTheme = data.foodThemeImageArr;
let backSideFoodTheme = '/memory/assets/icons/food_theme/bg_food_theme.svg';
export let cardsArr:GameCard[];
export let playerArr:GamePlayer[];
export let currentPlayer:string = '';

/** This function initialize the board and player data */
export function createLogicData():void{
    let amountImages = myGameObj.boardSize / 2;
    createCodeVibesData(amountImages);
    createFoodThemeData(amountImages);
    fieldAssignment();
    initializePlayer();
    // console.log(cardsArr);
}

/**
 * This function creates the array of card instances for used code vibes theme
 * @param amountImages - includes the amount of icons depending on board size
 */
function createCodeVibesData(amountImages:number):void{
    if(myGameObj.theme == 'code_vibes'){
        cardsArr = [];
        for (let index = 0; index < amountImages; index++) {
           cardsArr[index] = new GameCard(imagesCodeVibes[index], backSideCodeVibes, (index + 1), '#86E9D6'); 
        }
    }
}

/**
 * This function creates the array of card instances for used food theme
 * @param amountImages - includes the amount of icons depending on board size
 */
function createFoodThemeData(amountImages:number):void{
    if(myGameObj.theme == 'food_theme'){
        cardsArr = [];
        for (let index = 0; index < amountImages; index++) {
            cardsArr[index] = new GameCard(imagesFoodTheme[index], backSideFoodTheme, (index + 1), '#F58E39');
        }
    }
}

/** This function is used to create the field assignment on board */
function fieldAssignment():void{
    let boardArr = createBoardArr();
    getRandomFieldAndRemove(boardArr);
}

/**
 * This function creates an array filled with numbers, depending on board size
 * @returns - an array filled with numbers
 */
function createBoardArr():number[]{
    let boardArr:number[] = [];
    for (let index = 1; index <= myGameObj.boardSize; index++) {
        boardArr.push(index);
    }
    return boardArr;
}

/**
 * This function is used to create a random field number for poistion of cards
 * @param boardArr - includes an array of numbers which represents the fields on stack
 */
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
        findRandomFieldsAndSet(index, fieldObj, boardArr);
    }
}

/**
 * This function gcraetes a random position on field and save the data 
 * @param index - includes card number
 * @param fieldObj - includes the fieldObject
 * @param boardArr - includes array of available positions as number
 */
function findRandomFieldsAndSet(index:number, fieldObj:Field, boardArr:number[]):void{
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

/**
 * This function is used to set the field on board and save the data
 * @param cardNumber - includes the card number
 * @param fieldValue - includes the position on board
 * @param fielObj - includes the field object
 */
function setFieldOnBoard(cardNumber:number, fieldValue:number, fielObj:Field):void{
    const contentFrontRef = document.getElementById('cardFace_' + fieldValue) as HTMLImageElement;
    const contentBackRef = document.getElementById('cardBack_' + fieldValue) as HTMLImageElement;
    if(contentFrontRef){contentFrontRef.src = cardsArr[cardNumber].frontImage;}
    if(contentBackRef){
        contentBackRef.src = cardsArr[cardNumber].backImage;
        cardsArr[cardNumber].setCardNumberToFieldObj(fielObj);
    }
}

/** This function is used to declare the starting player */
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
    // console.log(playerArr);
}

/**
 * This function designs the current player on board
 * @param player - includes the current player as a string
 */
function setCurrentPlayer(player:string):void{
    let contentImgRef = document.getElementById('current_player_indication') as HTMLImageElement;
    let contentDivRef = document.getElementById('cp_indication_container') as HTMLDivElement;
    if(player == 'blue'){
        if(myGameObj.theme == 'code_vibes' && contentImgRef){contentImgRef.src = '/memory/assets/icons/current_player_blue_code_theme.svg';}
        if(myGameObj.theme == 'food_theme' && contentDivRef){contentDivRef.style.backgroundColor = "#2BB1FF";}
        currentPlayer = 'blue';
    }
    if(player == 'orange'){
        if(myGameObj.theme == 'code_vibes' && contentImgRef){contentImgRef.src = '/memory/assets/icons/current_player_orange_code_theme.svg';}
        if(myGameObj.theme == 'food_theme' && contentDivRef){contentDivRef.style.backgroundColor = "#F58E39";}
        currentPlayer = 'orange';
    }
}

/**
 * This function checks if match exist after flipping of card
 * @param i - includes the card number
 * @returns - a boolean with match information
 */
export function setDataAfterFlip(i:number):boolean{
    let match = false;
    for (let index = 0; index < playerArr.length; index++) {
        if(playerArr[index].name == currentPlayer){
            removeFlipPermissionFromCard(i);
            putValueOfCardToPlayerStorage(playerArr[index].attempts, i);
            playerArr[index].attempts -= 1;
            if(playerArr[index].attempts <= 0){
                match = checkMatch();
                if(!match){setCurrentPlayer(currentPlayer);}
            }
            break;
        }
    }
    return match;
}

/** This function checks if a player found a match and changed current player if not */
function checkMatch():boolean{
    let match = false;
    for (let index = 0; index < playerArr.length; index++) {
        if(playerArr[index].name == currentPlayer){
            if(playerArr[index].cardValues.card1 == playerArr[index].cardValues.card2){
                playerArr[index].increasePoints();
                playerArr[index].setAttempts(2);
                match = true;
            }else{
                actions.flipBackWithoutMatch();
                actions.changePlayer();
            }
            break;
        }
    }
    return match;
}

/**
 * This function removes the flip permisiion from card
 * @param i - includes the card number
 */
function removeFlipPermissionFromCard(i:number):void{
    let card = '';
    for (let index = 0; index < cardsArr.length; index++) {
        card = cardsArr[index].fieldObj.cardPos1.fieldPos;
        if(card == `${i}`){cardsArr[index].fieldObj.cardPos1.flipPermission = false;}

        card = cardsArr[index].fieldObj.cardPos2.fieldPos;
        if(card == `${i}`){cardsArr[index].fieldObj.cardPos2.flipPermission = false;}
    }
}

/**
 * This function is used to pick the cardnumber with values and put it into storage
 * @param attempts - includes attempts of player
 * @param i - includes the card number
 */
function putValueOfCardToPlayerStorage(attempts:number, i:number):void{
    let card = '';
    let cardNumber = 0;
    let found:boolean;
    if(attempts == 2){
        found = attempts2CardPos1(i, card, cardNumber);
        if(!found){attempts2CardPos2(i, card, cardNumber);}
    }
    if(attempts == 1){
        found = attempts1CardPos1(i, card, cardNumber);
        if(!found){attempts1CardPos2(i, card, cardNumber);}
    }
}

/**
 * This function set card values of card position 1 to storage if player has 2 attempts
 * @param i - includes card number
 * @param card - includes card from stack
 * @param cardNumber - includes value of card
 * @returns - a boolean information 
 */
function attempts2CardPos1(i:number, card:string, cardNumber:number):boolean{
   let found = false;
    for (let index = 0; index < cardsArr.length; index++) {
        card = cardsArr[index].fieldObj.cardPos1.fieldPos;
        if(card == `${i}`){
            setCardDataValue1(cardNumber, index, i);
            found = true;
            break;
        }
    }
    return found;
}

/**
 * This function set values to instance of card
 * @param cardNumber - includes value of card
 * @param index - includes index number of cardArr
 * @param i - includes card number
 */
function setCardDataValue1(cardNumber:number, index:number, i:number):void{
    cardNumber = cardsArr[index].cardNumber;
    for (let index = 0; index < playerArr.length; index++) {
        if(playerArr[index].name == currentPlayer){
            playerArr[index].setCardValue1(cardNumber);
            playerArr[index].setCardPos(1, i);
        }
    }
}

/**
 * This function set card values of card position 2 to storage if player has 2 attempts
 * @param i - includes card number
 * @param card - includes index number of cardArr
 * @param cardNumber - includes value of card
 */
function attempts2CardPos2(i:number, card:string, cardNumber:number):void{
    for (let index = 0; index < cardsArr.length; index++) {
        card = cardsArr[index].fieldObj.cardPos2.fieldPos;
        if(card == `${i}`){
            cardNumber = cardsArr[index].cardNumber;
            for (let index = 0; index < playerArr.length; index++) {
                if(playerArr[index].name == currentPlayer){
                    playerArr[index].setCardValue1(cardNumber);
                    playerArr[index].setCardPos(1, i);
                }
            }
            break;
        }
    }
}

/**
 * This function set card values of card position 1 to storage if player has 1 attempts
 * @param i  - includes card number
 * @param card - includes index number of cardArr
 * @param cardNumber - includes value of card
 * @returns - a boolean feedback if match
 */
function attempts1CardPos1(i:number, card:string, cardNumber:number):boolean{
    let found = false;
    for (let index = 0; index < cardsArr.length; index++) {
        card = cardsArr[index].fieldObj.cardPos1.fieldPos;
        if(card == `${i}`){
            setCardDataValue2(cardNumber, index, i);
            found = true;
            break;
        }
    }
    return found;
}

/**
 * This function set values to instance of card
 * @param cardNumber - includes value of card
 * @param index - includes index number of cardArr
 * @param i - includes card number
 */
function setCardDataValue2(cardNumber:number, index:number, i:number):void{
    cardNumber = cardsArr[index].cardNumber;
    for (let index = 0; index < playerArr.length; index++) {
        if(playerArr[index].name == currentPlayer){
            playerArr[index].setCardValue2(cardNumber);
            playerArr[index].setCardPos(2, i);
        }
    }
}

/**
 * This function set card values of card position 2 to storage if player has 1 attempt
 * @param i - includes card number
 * @param card - includes index number of cardArr
 * @param cardNumber - includes value of card
 */
function attempts1CardPos2(i:number, card:string, cardNumber:number):void{
    for (let index = 0; index < cardsArr.length; index++) {
        card = cardsArr[index].fieldObj.cardPos2.fieldPos;
        if(card == `${i}`){
            cardNumber = cardsArr[index].cardNumber;
            for (let index = 0; index < playerArr.length; index++) {
                if(playerArr[index].name == currentPlayer){
                    playerArr[index].setCardValue2(cardNumber);
                    playerArr[index].setCardPos(2, i);
                }
            }
            break;
        }
    }
}

export function setPlayer(player:string):void{
    currentPlayer = player;
}