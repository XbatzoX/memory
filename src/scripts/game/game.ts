import * as data from '../dataStructure/dataObj';
import * as temp from '../templates';
import {isValid} from '../settings/stateSettings';
import {Settings} from '../dataStructure/interfaces';
import * as logic from './gameLogic';

export let myGameObj:Settings;

/** This function checks user inputs via radio buttons and refer to game page if inputs are valid */
function createGame():void{
   if(isValid){
        localStorage.setItem('myGameSettings', JSON.stringify(data.gameSettings));
        window.location.href = 'game.html';
   }
}

/** Event listener with click event for start game button */
const contentButtonRef = document.getElementById('start_button');
if(contentButtonRef){
    contentButtonRef.addEventListener('click', () => {
        createGame();
    });
}

/** This function is used load actions after game page is open */
function initGame():void{
    loadDataFromLocalStorage();
    checkBodyBackgroundColor();
    createHeader();
    createBoard();
}

/** This function creates the header of game page */
function createHeader():void{
    const contentHeaderRef = document.getElementById('game_header');
    if(contentHeaderRef){contentHeaderRef.innerHTML = temp.renderHeader(myGameObj.theme);}
    checkPlayerImages();
    checkCurrentPlayer();
    checkExitButton();
    createEventListenerExitButtonFoodTheme();
}

/** This function creates the board of memory game */
function createBoard():void{
    const contentBoardRef = document.getElementById('game_board');
    if(contentBoardRef){contentBoardRef.innerHTML = renderBoard(myGameObj.boardSize);}
    createClickEventForCard();
    logic.createLogicData();
}

/** This function is used to set the body background color of game page */
function checkBodyBackgroundColor():void{
    checkCodeThemeBody();
    checkFoodThemeBody();
}

/** This functions loads the game settings object from local storage */
function loadDataFromLocalStorage():void{
    let data = localStorage.getItem('myGameSettings');
    if(data){myGameObj = JSON.parse(data);}   
}

/** This function sets the background color of body in code vibes theme */
function checkCodeThemeBody():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentBodyRef = document.getElementById('body_game');
        if(contentBodyRef){contentBodyRef.classList.add('body-bg-code-theme');}
    }
}

/** This function sets the background color of body in food theme */
function checkFoodThemeBody():void{
    if(myGameObj.theme == 'food_theme'){
        const contentBodyRef = document.getElementById('body_game');
        if(contentBodyRef){contentBodyRef.classList.add('body-bg-food-theme');}
    }
}

/** This function is used to check the player images for used theme */
function checkPlayerImages():void{
    checkCodeThemePlayer();
    checkFoodThemePlayer();
}

/** This function is used set the player icons of code vibes theme */
function checkCodeThemePlayer():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentImgBlueRef = document.getElementById('icon_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('icon_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/memory/assets/img/player_blue_code_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/memory/assets/img/player_orange_code_theme.svg';}
    }
}

/** This function is used to set the player icons for food theme */
function checkFoodThemePlayer():void{
    if(myGameObj.theme == 'food_theme'){
        const contentImgBlueRef = document.getElementById('icon_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('icon_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/memory/assets/img/icon_blue_player_food_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/memory/assets/img/icon_orange_player_food_theme.svg';}
    }
}

/** This function checks the current player player icon */
function checkCurrentPlayer():void{
    checkCurrentPlayerCodeVibes();
    checkCurrentPlayerFoodTheme();
}

/** This function is used to set the current player indication for code vibes theme */
function checkCurrentPlayerCodeVibes():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentImgRef = document.getElementById('current_player_indication') as HTMLImageElement;
        if(contentImgRef){contentImgRef.src = '/memory/assets/icons/current_player_blue_code_theme.svg';}
    }
}

/** This function is used to set the current player indication for food theme */
function checkCurrentPlayerFoodTheme():void{
    if(myGameObj.theme == 'food_theme'){
        const contentImgRef = document.getElementById('current_player_indication') as HTMLImageElement;
        const contentDivRef = document.getElementById('cp_indication_container') as HTMLDivElement;
        if(contentImgRef){
            contentImgRef.src = '/memory/assets/icons/icon_current_player_food_theme.svg';
        }
        if(contentDivRef){contentDivRef.style.backgroundColor = "#2BB1FF";}

    }
}

/** This function is used to check the design of exit button on game page */
function checkExitButton():void{
    checkExitButtonCodeVibes();
    checkExitButtonFoodTheme();
}

/** This function designs the exit button for code vibes theme */
function checkExitButtonCodeVibes():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentImgRef = document.getElementById('exit_icon') as HTMLImageElement;
        if(contentImgRef){contentImgRef.src = '/memory/assets/icons/exit_icon_code_theme.svg';}
    }
}

/** This function designs the exit button for food theme */
function checkExitButtonFoodTheme():void{
    if(myGameObj.theme == 'food_theme'){
        const contentImgRef = document.getElementById('exit_icon') as HTMLImageElement;
        if(contentImgRef){contentImgRef.src = '/memory/assets/icons/exit_icon_food_theme.svg';}
    }
}

/** This function creates a hover design for exit button if food theme is used */
function createEventListenerExitButtonFoodTheme():void{
    const contentButtonFoodRef = document.getElementById('exit_container');
    if(contentButtonFoodRef && (myGameObj.theme == 'food_theme')){
        contentButtonFoodRef.addEventListener('mouseover', () => {
            changeExitIcon('hover');
            changeTextColor('hover');
        });
        contentButtonFoodRef.addEventListener('mouseout', () => {
            changeExitIcon('normal');
            changeTextColor('normal');
        })
    }
}

/**
 * This function changes the exit icon image
 * @param view - includes the information if mouseover or mouseout is active
 */
function changeExitIcon(view:string):void{
    const contentImgRef = document.getElementById('exit_icon') as HTMLImageElement;
    if(view == 'hover'){contentImgRef.src = '/memory/assets/icons/exit_icon_code_theme.svg';}
    if(view == 'normal'){contentImgRef.src = '/memory/assets/icons/exit_icon_food_theme.svg';}
}

/**
 * This function is used to change the span color of exit button
 * @param view - includes the information if mouseover or mouseout is active
 */
function changeTextColor(view:string):void{
    const contentSpanRef = document.getElementById('exit_span') as HTMLSpanElement;
    if(view == 'hover'){contentSpanRef.style.color = "white";}
    if(view == 'normal'){contentSpanRef.style.color = "#F58E39";}
}

/**
 * This function is used to render the memory game board
 * @param boardSize - includes the information which board size is choosen
 * @returns - an output string of HTML elements
 */
function renderBoard(boardSize:number):string{
    let size = boardSize;
    let outputString = '';
    if(size == 16){
        for (let index = 1; index <= size; index++) {
            if(index % 4 == 1){outputString += temp.getFourCardInRowTemplate(index);}
        }
    }else{
        for (let index = 1; index <= size; index++) {
            if(index % 6 == 1){outputString += temp.getSixCardInRowTemplate(index);}
        }
    }
    return outputString;
}

/** This function is used to creates click events for every memory card and execute actions after click */
function createClickEventForCard():void{
    let match = false;
    for (let index = 1; index <= myGameObj.boardSize; index++) {
        const contentCardRef = document.getElementById('card_' + index);
        if(contentCardRef){
            contentCardRef.addEventListener('click', e => {
                if(getDataOfCard(index) && (hasPlayerPermission())){
                    const card = (e.target as HTMLElement).closest('.card') as HTMLDivElement;
                    if(card){card.classList.toggle('is-flipped');}
                    match = logic.setDataAfterFlip(index);
                    if(match){executeMatchActions();}
                    // console.log(logic.playerArr);
                }
            });
        }   
    }
}

/**
 * This functions checks if one player has the permission to play
 * @returns - a boolean information
 */
function hasPlayerPermission():boolean{
    let permission = false;
    if(logic.playerArr[0].permission || logic.playerArr[1].permission){
        permission = true;
    }
    return permission;
}

/** This functions execute actions after match of card pair */
function executeMatchActions():void{
    matchDesign();
    actualizePointIndication();
    findWinner();
}

/**
 * This function is used to check if a match exist after click on card
 * @param i - includes the board card number
 * @returns - a boolean with match status
 */
function getDataOfCard(i:number):boolean{
    let match = false;
    let amountCards = myGameObj.boardSize / 2;
    match = getDataOfCardPos1(i, amountCards);
    if(!match){match = getDataOfCardPos2(i, amountCards);}
    return match;
}

/**
 * This function is used to check the first position of card on stack
 * @param i - includes the card number to check
 * @param amountCards - includes the amount of cards on stack
 * @returns - a boolean with match status
 */
function getDataOfCardPos1(i:number, amountCards:number):boolean{
    let match = false;
    let card:string;
    let permissionToFlip:boolean;
    for (let index = 0; index < amountCards; index++) {
        card = logic.cardsArr[index].fieldObj.cardPos1.fieldPos;
        permissionToFlip = logic.cardsArr[index].fieldObj.cardPos1.flipPermission;
        if(card == `${i}` && permissionToFlip){
            match = true;
            break;
        }
    }
    return match;
}

/**
 * This function is used to check the second position of card on stack
 * @param i - includes the card number to check
 * @param amountCards - includes the amount of cards on stack
 * @returns - a boolean with match status
 */
function getDataOfCardPos2(i:number, amountCards:number):boolean{
    let match = false;
    let card:string;
    let permissionToFlip:boolean;
    for (let index = 0; index < amountCards; index++) {
        card = logic.cardsArr[index].fieldObj.cardPos2.fieldPos;
        permissionToFlip = logic.cardsArr[index].fieldObj.cardPos2.flipPermission;
        if(card == `${i}` && permissionToFlip){
            match = true;
            break;
        }
    }
    return match;
}

/** This function customizes the point status of players after match of card pair */
function actualizePointIndication():void{
    let player:string;
    let blueIndication = document.getElementById('player_blue_value');
    let orangeIndication = document.getElementById('player_orange_value');
    for (let index = 0; index < logic.playerArr.length; index++) {
       player = logic.playerArr[index].name;
       if(player == 'blue' && blueIndication){blueIndication.innerHTML = `${logic.playerArr[index].points}`;} 
       if(player == 'orange' && orangeIndication){orangeIndication.innerHTML = `${logic.playerArr[index].points}`;}
    }
}

/** This function is used to design the match state on card */
function matchDesign():void{
    for (let index = 0; index < logic.playerArr.length; index++) {
       if(logic.playerArr[index].name == logic.currentPlayer){
        let card1 = logic.playerArr[index].pickedCards.cardPos1;
        let card2 = logic.playerArr[index].pickedCards.cardPos2;
        let cardOnBoard1 = document.getElementById('card_' + card1);
        let cardOnBoard2 = document.getElementById('card_' + card2);
        if(cardOnBoard1 && cardOnBoard2){designCardsOnBoard(cardOnBoard1, cardOnBoard2);}
       } 
    }
}

/**
 * This function is used to design the border of cards if a pair is found on stack
 * @param cardOnBoard1 - includes the HTML element of card 1
 * @param cardOnBoard2 - includes the HTML element of card 2
 */
function designCardsOnBoard(cardOnBoard1:HTMLElement, cardOnBoard2:HTMLElement):void{
    if(cardOnBoard1){
        if(myGameObj.theme == 'code_vibes'){cardOnBoard1.style.border = "4px solid #4DD5BC";}
        if(myGameObj.theme == 'food_theme'){cardOnBoard1.style.border = '4px solid #F3832D';}
    }
    if(cardOnBoard2){
        if(myGameObj.theme == 'code_vibes'){cardOnBoard2.style.border = "4px solid #4DD5BC";}
        if(myGameObj.theme == 'food_theme'){cardOnBoard2.style.border = '4px solid #F3832D';}
    }
}

/** This function is used to find the winner of game */
function findWinner():void{
    let maxPoints = myGameObj.boardSize / 2;
    let actualPoints = 0;
    for (let index = 0; index < logic.playerArr.length; index++) {
        if(logic.playerArr[index].name == 'blue'){data.gameResult.pointsBluePlayer = logic.playerArr[index].points;}
        if(logic.playerArr[index].name == 'orange'){data.gameResult.pointsOrangePlayer = logic.playerArr[index].points;}
        actualPoints += logic.playerArr[index].points;
    }
    putWinnerIntoDataObject(actualPoints, maxPoints);
}

/**
 * This function finds the winner and put the winner into data object
 * @param actualPoints -includes the actual points of both players
 * @param maxPoints - includes the value of max points
 */
function putWinnerIntoDataObject(actualPoints:number, maxPoints:number):void{
    if(actualPoints >= maxPoints){
        if(data.gameResult.pointsBluePlayer > data.gameResult.pointsOrangePlayer){
            data.gameResult.winner = 'blue';
        }else if(data.gameResult.pointsBluePlayer < data.gameResult.pointsOrangePlayer){
            data.gameResult.winner = 'orange';
        }else{
            data.gameResult.winner = 'draw';
        }
        localStorage.setItem('myGameResult', JSON.stringify(data.gameResult));
        window.location.href = 'gameOver.html';
    }
}

if(window.location.pathname.includes('game.html')){
    initGame();
}