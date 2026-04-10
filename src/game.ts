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
    checkCodeTheme();
    const contentHeaderRef = document.getElementById('game_header');
    if(contentHeaderRef){
        contentHeaderRef.innerHTML = temp.renderHeaderCodeTheme();   
    }
}

function loadDataFromLocalStorage():void{
    let data = localStorage.getItem('myGameSettings');
    if(data){myGameObj = JSON.parse(data);} 
    console.log(data);   
}

function checkCodeTheme():void{
    if(myGameObj.theme == 'code_vibes'){
        const contentBodyRef = document.getElementById('body_game');
        if(contentBodyRef){contentBodyRef.classList.add('body-bg-code-theme');}
    }
}

if(window.location.pathname.includes('game.html')){
    initGame();
}