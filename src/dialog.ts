import * as temp from './templates';
import { myGameObj } from './game';

/**
 * This function is used to create Event Listener after loading of page
 */
function init():void{
    createEventHandlerExitBtn();
    createEventHandlerBodyClick();
}

function createEventHandlerExitBtn():void{
    const contentBtnRef = document.getElementById('exit_container') as HTMLDivElement;
    if(contentBtnRef){
        contentBtnRef.addEventListener('click', (event:MouseEvent) => {
            stopEventBubbling(event);
            const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
            if(contentDialogRef){
                contentDialogRef.innerHTML = temp.getDialogTemplate(myGameObj.theme);
                openDialog(contentDialogRef);
                checkTheme(myGameObj.theme);
                createEventHandlerDialog();
                createEventHandlerBackToGame();
                exitGame();
            }
        });
    }
}

function openDialog(contentDialogRef:HTMLDialogElement):void{
    if(contentDialogRef){
        contentDialogRef.showModal();
        contentDialogRef.classList.add('dialogOpened');
    }
}

function createEventHandlerBackToGame():void{
    const contentBtnref = document.getElementById('close_dialog_btn') as HTMLDivElement;
    if(contentBtnref){
        contentBtnref.addEventListener('click', () => {
            closeDialogWithSlide();
        });
    }
}

async function closeDialogWithSlide():Promise<void>{
    const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
    if(contentDialogRef){
        contentDialogRef.classList.add('dialogClosed');
        await timeout(600);
        contentDialogRef.close();
        contentDialogRef.classList.remove('dialogOpened');
        contentDialogRef.classList.remove('dialogClosed');
    }
}

function timeout(ms:number):Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createEventHandlerBodyClick():void{
    const contentBodyRef = document.getElementById('body_game') as HTMLBodyElement;
    if(contentBodyRef){
        contentBodyRef.addEventListener('click', () => {
            const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
            if(contentDialogRef && contentDialogRef.open){closeDialogWithSlide();}
        })
    }
}

function stopEventBubbling(event:MouseEvent):void{
    event.stopPropagation();
}

function createEventHandlerDialog():void{
    const contentDialogRef = document.getElementById('dialog_container');
    if(contentDialogRef){
        contentDialogRef.addEventListener('click', (event:MouseEvent) => {
            stopEventBubbling(event);
        });
    }
}

function exitGame():void{
    const contentBtnRef = document.getElementById('exit_game_btn') as HTMLDivElement;
    if(contentBtnRef){
        contentBtnRef.addEventListener('click', () => {
            closeDialog();
            window.location.href = '/index.html';
        });
    }
}

function closeDialog():void{
    const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
    if(contentDialogRef){
        contentDialogRef.close();
        contentDialogRef.classList.remove('dialogOpened');
    }
}

function checkTheme(theme:string):void{
    setBorderRadiusFoodTheme(theme);
    checkTextContent(theme);
    createEventHandlerExitGameBtnFoodTheme(theme);
}

function setBorderRadiusFoodTheme(theme:string){
    const contentDialogRef = document.getElementById('exit_dialog');
    if(contentDialogRef && theme == 'food_theme'){contentDialogRef.style.borderRadius = "20px";}
}

function checkTextContent(theme:string){
    const contentBackBtnRef = document.getElementById('close_dialog_btn');
    if(contentBackBtnRef){
        const contentSpanRef = contentBackBtnRef.querySelector('span');
        if(contentSpanRef && theme == 'code_vibes'){contentSpanRef.innerText = 'Back to game';}
        if(contentSpanRef && theme == 'food_theme'){contentSpanRef.innerText = 'No, back to game';}
    }
   
}

function createEventHandlerExitGameBtnFoodTheme(theme:string):void{
    const contentBtnRef = document.getElementById('exit_game_btn') as HTMLDivElement;
    if(contentBtnRef && theme == 'food_theme'){
        let span = contentBtnRef.querySelector('span');
        if(span){
            contentBtnRef.addEventListener('mouseover', () => {
                span.style.color = "white";
            });
            contentBtnRef.addEventListener('mouseout', () => {
                span.style.color = "#F3832D";
            });
        }
    }
}

if(window.location.pathname.includes('game.html')){
    init();
}