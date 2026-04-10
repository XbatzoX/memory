import * as data from './dataObj';
import * as temp from './templates';
import {isValid} from './stateSettings';
import {Settings} from './interfaces';

let myGameObj:Settings;

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
    const contentHeaderRef = document.getElementById('game_header');
    if(contentHeaderRef){
        contentHeaderRef.innerHTML = temp.renderHeader(myGameObj.theme);   
    }
    checkPlayerImages();
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

if(window.location.pathname.includes('game.html')){
    initGame();
}