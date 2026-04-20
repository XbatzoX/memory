import * as data from './dataObj';
import * as temp from './templates';
import {isValid} from './stateSettings';
import {Settings} from './interfaces';
import * as logic from './gameLogic';

export let myGameObj:Settings;

function createGame():void{
   if(isValid){
        localStorage.setItem('myGameSettings', JSON.stringify(data.gameSettings));
        window.location.href = '/html/game.html';
   }
}

const contentButtonRef = document.getElementById('start_button');
if(contentButtonRef){
    contentButtonRef.addEventListener('click', () => {
        createGame();
    });
}

function initGame():void{
    loadDataFromLocalStorage();
    checkBodyBackgroundColor();
    createHeader();
    createBoard();
}

function createHeader():void{
    const contentHeaderRef = document.getElementById('game_header');
    if(contentHeaderRef){contentHeaderRef.innerHTML = temp.renderHeader(myGameObj.theme);}
    checkPlayerImages();
    checkCurrentPlayer();
    checkExitButton();
    createEventListenerExitButtonFoodTheme();
}

function createBoard():void{
    const contentBoardRef = document.getElementById('game_board');
    if(contentBoardRef){contentBoardRef.innerHTML = renderBoard(myGameObj.boardSize);}
    createClickEventForCard();
    logic.createLogicData();
}

function checkBodyBackgroundColor():void{
    checkCodeThemeBody();
    checkFoodThemeBody();
}

function loadDataFromLocalStorage():void{
    let data = localStorage.getItem('myGameSettings');
    if(data){myGameObj = JSON.parse(data);}   
}

function checkCodeThemeBody():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentBodyRef = document.getElementById('body_game');
        if(contentBodyRef){contentBodyRef.classList.add('body-bg-code-theme');}
    }
}

function checkFoodThemeBody():void{
    if(myGameObj.theme == 'food_theme'){
        const contentBodyRef = document.getElementById('body_game');
        if(contentBodyRef){contentBodyRef.classList.add('body-bg-food-theme');}
    }
}

function checkPlayerImages():void{
    checkCodeThemePlayer();
    checkFoodThemePlayer();
}

function checkCodeThemePlayer():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentImgBlueRef = document.getElementById('icon_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('icon_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/assets/img/player_blue_code_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/assets/img/player_orange_code_theme.svg';}
    }
}

function checkFoodThemePlayer():void{
    if(myGameObj.theme == 'food_theme'){
        const contentImgBlueRef = document.getElementById('icon_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('icon_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/assets/img/icon_blue_player_food_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/assets/img/icon_orange_player_food_theme.svg';}
    }
}

function checkCurrentPlayer():void{
    checkCurrentPlayerCodeVibes();
    checkCurrentPlayerFoodTheme();
}

function checkCurrentPlayerCodeVibes():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentImgRef = document.getElementById('current_player_indication') as HTMLImageElement;
        if(contentImgRef){contentImgRef.src = '/assets/icons/current_player_blue_code_theme.svg';}
    }
}

function checkCurrentPlayerFoodTheme():void{
    if(myGameObj.theme == 'food_theme'){
        const contentImgRef = document.getElementById('current_player_indication') as HTMLImageElement;
        const contentDivRef = document.getElementById('cp_indication_container') as HTMLDivElement;
        if(contentImgRef){
            contentImgRef.src = '/assets/icons/icon_current_player_food_theme.svg';
        }
        if(contentDivRef){contentDivRef.style.backgroundColor = "#2BB1FF";}

    }
}

function checkExitButton():void{
    checkExitButtonCodeVibes();
    checkExitButtonFoodTheme();
}

function checkExitButtonCodeVibes():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentImgRef = document.getElementById('exit_icon') as HTMLImageElement;
        if(contentImgRef){contentImgRef.src = '/assets/icons/exit_icon_code_theme.svg';}
    }
}

function checkExitButtonFoodTheme():void{
    if(myGameObj.theme == 'food_theme'){
        const contentImgRef = document.getElementById('exit_icon') as HTMLImageElement;
        if(contentImgRef){contentImgRef.src = '/assets/icons/exit_icon_food_theme.svg';}
    }
}

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

function changeExitIcon(view:string):void{
    const contentImgRef = document.getElementById('exit_icon') as HTMLImageElement;
    if(view == 'hover'){contentImgRef.src = '/assets/icons/exit_icon_code_theme.svg';}
    if(view == 'normal'){contentImgRef.src = '/assets/icons/exit_icon_food_theme.svg';}
}

function changeTextColor(view:string):void{
    const contentSpanRef = document.getElementById('exit_span') as HTMLSpanElement;
    if(view == 'hover'){contentSpanRef.style.color = "white";}
    if(view == 'normal'){contentSpanRef.style.color = "#F58E39";}
}

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

function createClickEventForCard():void{
    let match = false;
    for (let index = 1; index <= myGameObj.boardSize; index++) {
        const contentCardRef = document.getElementById('card_' + index);
        if(contentCardRef){
            contentCardRef.addEventListener('click', e => {
                if(getDataOfCard(index)){
                    const card = (e.target as HTMLElement).closest('.card') as HTMLDivElement;
                    if(card){card.classList.toggle('is-flipped');}
                    match = logic.setDataAfterFlip(index);
                    if(match){
                        matchDesign();
                        actualizePointIndication();
                        findWinner();
                    }
                    console.log(logic.playerArr);
                }
            });
        }   
    }
}

function getDataOfCard(i:number):boolean{
    let match = false;
    let amountCards = myGameObj.boardSize / 2;
    let card:string;
    let permissionToFlip:boolean;
    for (let index = 0; index < amountCards; index++) {
        card = logic.cardsArr[index].fieldObj.cardPos1.fieldPos;
        permissionToFlip = logic.cardsArr[index].fieldObj.cardPos1.flipPermission;
        if(card == `${i}` && permissionToFlip){
            match = true;
            break;
        }

        card = logic.cardsArr[index].fieldObj.cardPos2.fieldPos;
        permissionToFlip = logic.cardsArr[index].fieldObj.cardPos2.flipPermission;
        if(card == `${i}` && permissionToFlip){
            match = true;
            break;
        }
    }
    return match;
}

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

function matchDesign():void{
    for (let index = 0; index < logic.playerArr.length; index++) {
       if(logic.playerArr[index].name == logic.currentPlayer){
        let card1 = logic.playerArr[index].pickedCards.cardPos1;
        let card2 = logic.playerArr[index].pickedCards.cardPos2;
        let cardOnBoard1 = document.getElementById('card_' + card1);
        let cardOnBoard2 = document.getElementById('card_' + card2);
        if(cardOnBoard1){
            if(myGameObj.theme == 'code_vibes'){cardOnBoard1.style.border = "4px solid #4DD5BC";}
            if(myGameObj.theme == 'food_theme'){cardOnBoard1.style.border = '4px solid #F3832D';}
        }
        if(cardOnBoard2){
            if(myGameObj.theme == 'code_vibes'){cardOnBoard2.style.border = "4px solid #4DD5BC";}
            if(myGameObj.theme == 'food_theme'){cardOnBoard2.style.border = '4px solid #F3832D';}
        }
       } 
    }
}

function findWinner():void{
    let maxPoints = myGameObj.boardSize / 2;
    let actualPoints = 0;
    for (let index = 0; index < logic.playerArr.length; index++) {
        if(logic.playerArr[index].name == 'blue'){data.gameResult.pointsBluePlayer = logic.playerArr[index].points;}
        if(logic.playerArr[index].name == 'orange'){data.gameResult.pointsOrangePlayer = logic.playerArr[index].points;}
        actualPoints += logic.playerArr[index].points;
    }
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