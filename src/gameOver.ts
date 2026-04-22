import * as data from './dataObj';
import * as temp from './templates';
import { GameResult } from './interfaces';
import { Settings } from './interfaces';

let resultObj:GameResult;
let mySettings:Settings;

/** This function initialize data and design if gameOver page is open */
function init():void{
    getDataFromLocalStorage();
    createThemeBackground();
    renderGameOverContainer(mySettings.theme);
    renderWinnerContainer();
}

/** This function loads the data from local storage */
function getDataFromLocalStorage():void{
    let storageData = localStorage.getItem('myGameResult');
    if(storageData){resultObj= JSON.parse(storageData);} 
    storageData = localStorage.getItem('myGameSettings');
    if(storageData){mySettings = JSON.parse(storageData);}  
}

/** This function is used to set the background color of game over overlay for correct theme */
function createThemeBackground():void{
    let contentBodyRef = document.getElementById('body_game_over');
    if(mySettings.theme == 'code_vibes'){
        if(contentBodyRef){contentBodyRef.style.backgroundColor = '#303131';}
    }
    if(mySettings.theme == 'food_theme'){
        if(contentBodyRef){contentBodyRef.style.backgroundColor = '#F58E39';}
    }
}

/**
 * This function renders the game over container in correct theme
 * @param theme - includes the actual used theme
 */
function renderGameOverContainer(theme:string):void{
    const contentSectionRef = document.getElementById('game_over');
    if(contentSectionRef){contentSectionRef.innerHTML = temp.getGameOverTemplate(theme);}
    checkCaptionTheme(theme);
    checkGameOverImages();
    setFinalPoints();
}

/**
 * This function designs the caption in correct theme
 * @param theme - includes the actual used theme
 */
function checkCaptionTheme(theme:string):void{
    const contentCaptionRef = document.getElementById('game_over_text');
    if(contentCaptionRef && theme == 'food_theme'){
        let spanContent = contentCaptionRef.textContent;
        if(spanContent){contentCaptionRef.textContent = spanContent.toUpperCase();}
    }
}

/** This function checks the images of final score indication */
function checkGameOverImages():void{
    checkCodeThemeGameOver();
    checkFoodThemeGameOver();
}

/** This function set the correct images for final score indication in theme code vibes */
function checkCodeThemeGameOver():void{
    if(mySettings.theme == 'code_vibes'){
        const contentImgBlueRef = document.getElementById('over_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('over_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/assets/img/player_blue_code_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/assets/img/player_orange_code_theme.svg';}
    }
}

/** This function set the correct images for final score indication in food theme */
function checkFoodThemeGameOver():void{
    if(mySettings.theme == 'food_theme'){
        const contentImgBlueRef = document.getElementById('over_blue_player') as HTMLImageElement;
        const contentImgOrangeRef = document.getElementById('over_orange_player') as HTMLImageElement;
        if(contentImgBlueRef){contentImgBlueRef.src = '/assets/img/icon_blue_player_food_theme.svg';}
        if(contentImgOrangeRef){contentImgOrangeRef.src = '/assets/img/icon_orange_player_food_theme.svg';}
    }
}

/** This function sets the final score */
function setFinalPoints():void{
    const contentSpanBlueRef = document.getElementById('over_blue_value');
    const contentSpanOrangeRef = document.getElementById('over_orange_value');
    if(contentSpanBlueRef){contentSpanBlueRef.innerText = String(resultObj.pointsBluePlayer);}
    if(contentSpanOrangeRef){contentSpanOrangeRef.innerText = String(resultObj.pointsOrangePlayer);}
}

/** This function is used to render the winning container after delay of game over indication */
function renderWinnerContainer():void{
    setTimeout(() => {
        const contentSectionRef = document.getElementById('game_over');
        const contentWinnerSectionRef = document.getElementById('winner_section');
        if(contentSectionRef){contentSectionRef.classList.add('invisible');}
        if(contentWinnerSectionRef){
            if(mySettings.theme == 'food_theme'){document.getElementById('body_game_over')!.style.backgroundColor = "white";}
            contentWinnerSectionRef.innerHTML = temp.getWinnerTemplate(mySettings.theme);
            checkWinnerIndication(resultObj.winner, mySettings.theme);
            checkWinnerImage(resultObj.winner, mySettings.theme);
            checkExitButton(mySettings.theme);
            createEventHandlerExitBtn();
        }
    }, 2500);
}

/** This function is used to show correct winner indication depends on used theme */
function checkWinnerIndication(winner:string, theme:string):void{
    const contentSpanRef = document.getElementById('winner_indication');
    if(contentSpanRef && theme == 'code_vibes'){winnerIndicationCodeVibes(contentSpanRef, winner);}
    if(contentSpanRef && theme == 'food_theme'){winnerIndicationFoodTheme(contentSpanRef, winner);}
}

/**
 * This function designs the winner indication for code vibes
 * @param contentSpanRef - includes HTML element
 * @param winner - includes the winner as string
 */
function winnerIndicationCodeVibes(contentSpanRef:HTMLElement, winner:string):void{
    if(winner == 'blue'){
        contentSpanRef.style.color = "#2BB1FF";
        contentSpanRef.innerText = 'Blue Player';
    }
    if(winner == 'orange'){
        contentSpanRef.style.color = "#F58E39";
        contentSpanRef.innerText = 'Orange Player';
    }
    let text = contentSpanRef.textContent;
    contentSpanRef.textContent = text.toUpperCase();
}

/**
 * This function designs the winner indication for food theme
 * @param contentSpanRef  - includes HTML element
 * @param winner - includes the winner as string
 */
function winnerIndicationFoodTheme(contentSpanRef:HTMLElement, winner:string):void{
    if(winner == 'blue'){contentSpanRef.innerText = 'Blue Player';}
    if(winner == 'orange'){contentSpanRef.innerText = 'Orange Player';}
}

/**
 * This function sets the winner icon depends on theme
 * @param winner - includes winner information
 * @param theme  - includes used theme
 */
function checkWinnerImage(winner:string, theme:string):void{
    const contentImageRef = document.getElementById('winner_icon') as HTMLImageElement;
    if(contentImageRef && (theme == 'code_vibes' || theme == 'food_theme')){winnerImageCodeVibes(contentImageRef, winner);}

}

/**
 * This function sets winner image for code vibes
 * @param contentImageRef - includes HTML element
 * @param winner - includes winner as string 
 */
function winnerImageCodeVibes(contentImageRef:HTMLImageElement, winner:string):void{
    if(winner == 'blue'){contentImageRef.src = '/assets/icons/blue_winner_code_vibes.svg';}
    if(winner == 'orange'){contentImageRef.src = '/assets/icons/orange_winner_code_vibes.svg';}
}

/**
 * This function is used to create hover effect over exit button in food theme
 * @param theme - includes used theme
 */
function checkExitButton(theme:string):void{
    const contentDivRef = document.getElementById('back_game_over_container');
    if(contentDivRef && theme == 'food_theme'){
        let span = contentDivRef.querySelector('span');
        if(span){span.innerText = 'Home';}
        contentDivRef.addEventListener('mouseover', () => {
            if(span){span.style.color = '#F58E39';}
        });
        contentDivRef.addEventListener('mouseout', () => {
            if(span){span.style.color = 'white';}
        });
    }
}

/** This function creates an event listener for exit button */
function createEventHandlerExitBtn():void{
    const contentBtnRef = document.getElementById('back_game_over_container') as HTMLDivElement;
    if(contentBtnRef){
        contentBtnRef.addEventListener('click', () => {
            window.location.href = 'settings.html';
        });
    }
}

if(window.location.pathname.includes('gameOver.html')){
    init();
}