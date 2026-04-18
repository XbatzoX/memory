import * as data from './dataObj';
import * as temp from './templates';
import { GameResult } from './interfaces';
import { Settings } from './interfaces';

let resultObj:GameResult;
let mySettings:Settings;

function init():void{
    getDataFromLocalStorage();
    createThemeBackground();
    renderGameOverContainer(mySettings.theme);
    
    console.log(resultObj);
    console.log(mySettings);
    let testSpan = document.getElementById('test_id');
    if(testSpan){testSpan.innerHTML = resultObj.winner;}
}

function getDataFromLocalStorage():void{
    let storageData = localStorage.getItem('myGameResult');
    if(storageData){resultObj= JSON.parse(storageData);} 
    storageData = localStorage.getItem('myGameSettings');
    if(storageData){mySettings = JSON.parse(storageData);}  
}

function createThemeBackground():void{
    let contentBodyRef = document.getElementById('body_game_over');
    if(mySettings.theme == 'code_vibes'){
        if(contentBodyRef){contentBodyRef.style.backgroundColor = '#303131';}
    }
    if(mySettings.theme == 'food_theme'){
        if(contentBodyRef){contentBodyRef.style.backgroundColor = '#F58E39';}
    }
}

function renderGameOverContainer(theme:string){
    const contentSectionRef = document.getElementById('game_over');
    if(contentSectionRef){
        contentSectionRef.innerHTML = temp.getGameOverTemplate(theme);
    }
}

if(window.location.pathname.includes('gameOver.html')){
    init();
}