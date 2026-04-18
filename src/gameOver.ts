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

function renderGameOverContainer(theme:string):void{
    const contentSectionRef = document.getElementById('game_over');
    if(contentSectionRef){contentSectionRef.innerHTML = temp.getGameOverTemplate(theme);}
    checkCaptionTheme(theme);
    checkGameOverImages();
    setFinalPoints();
}

function checkCaptionTheme(theme:string):void{
    const contentCaptionRef = document.getElementById('game_over_text');
    if(contentCaptionRef && theme == 'food_theme'){
        let spanContent = contentCaptionRef.textContent;
        if(spanContent){contentCaptionRef.textContent = spanContent.toUpperCase();}
    }
}

function checkGameOverImages():void{
    checkCodeThemeGameOver();
    checkFoodThemeGameOver();
}

function checkCodeThemeGameOver():void{
    if(mySettings.theme == 'code_vibes'){
        const contentImgBlueRef = document.getElementById('over_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('over_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/assets/img/player_blue_code_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/assets/img/player_orange_code_theme.svg';}
    }
}

function checkFoodThemeGameOver():void{
    if(mySettings.theme == 'food_theme'){
        const contentImgBlueRef = document.getElementById('over_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('over_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/assets/img/icon_blue_player_food_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/assets/img/icon_orange_player_food_theme.svg';}
    }
}

function setFinalPoints(){
    const contentSpanBlueRef = document.getElementById('over_blue_value');
    const contentSpanOrangeRef = document.getElementById('over_orange_value');
    if(contentSpanBlueRef){contentSpanBlueRef.innerText = String(resultObj.pointsBluePlayer);}
    if(contentSpanOrangeRef){contentSpanOrangeRef.innerText = String(resultObj.pointsOrangePlayer);}
}

if(window.location.pathname.includes('gameOver.html')){
    init();
}