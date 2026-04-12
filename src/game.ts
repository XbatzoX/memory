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
            if(index % 4 == 1){
                outputString += temp.getFourCardInRowTemplate(index);
            }
        }
    }
    return outputString;
}

function createClickEventForCard():void{
    for (let index = 1; index <= myGameObj.boardSize; index++) {
        const contentCardRef = document.getElementById('card_' + index);
        if(contentCardRef){
            contentCardRef.addEventListener('click', e => {
                const card = (e.target as HTMLElement).closest('.card') as HTMLDivElement;
                if(card){card.classList.toggle('is-flipped');}
            });
        }   
    }
}

function getDataOfCard(i:number){

}

if(window.location.pathname.includes('game.html')){
    initGame();
}