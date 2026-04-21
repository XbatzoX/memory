import * as temp from './templates';
import { myGameObj } from './game';

/**
 * This function is used to create Event Listener after loading of page
 */
function init():void{
    createEventHandlerExitBtn();
    createEventHandlerBodyClick();
}

/**
 * This function is used to create a click event for the exit button on game page
 */
function createEventHandlerExitBtn():void{
    const contentBtnRef = document.getElementById('exit_container') as HTMLDivElement;
    if(contentBtnRef){
        contentBtnRef.addEventListener('click', (event:MouseEvent) => {
            stopEventBubbling(event);
            const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
            if(contentDialogRef){
                contentDialogRef.innerHTML = temp.getDialogTemplate(myGameObj.theme);
                actionsAfterRendering(contentDialogRef);
            }
        });
    }
}

/**
 * This function is used to execute functions directly after rendering of dialog element
 * 
 * @param contentDialogRef - includes the HTML dialog element
 */
function actionsAfterRendering(contentDialogRef:HTMLDialogElement):void{
    openDialog(contentDialogRef);
    checkTheme(myGameObj.theme);
    createEventHandlerDialog();
    createEventHandlerBackToGame();
    exitGame();
}

/**
 * This function opens the exit game dialog withe slide in animation
 * 
 * @param contentDialogRef - includes the HTML dialog element
 */
function openDialog(contentDialogRef:HTMLDialogElement):void{
    if(contentDialogRef){
        contentDialogRef.showModal();
        contentDialogRef.classList.add('dialogOpened');
    }
}

/**
 * This function creates an event for the back to game button on exit game dialog
 */
function createEventHandlerBackToGame():void{
    const contentBtnref = document.getElementById('close_dialog_btn') as HTMLDivElement;
    if(contentBtnref){
        contentBtnref.addEventListener('click', () => {
            closeDialogWithSlide();
        });
    }
}

/**
 * This function is used to close the dialog with a slide out animation
 */
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

/**
 * This function is used to set a timeout after an action
 * 
 * @param ms - includes waiting time in ms
 * @returns - a promise 
 */
function timeout(ms:number):Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * This function creates an click event for the body. if the dialog is open it will close with slide out animation
 */
function createEventHandlerBodyClick():void{
    const contentBodyRef = document.getElementById('body_game') as HTMLBodyElement;
    if(contentBodyRef){
        contentBodyRef.addEventListener('click', () => {
            const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
            if(contentDialogRef && contentDialogRef.open){closeDialogWithSlide();}
        })
    }
}

/**
 * This function is used to stop the event bubbling
 * 
 * @param event - includes the mouse click event from user
 */
function stopEventBubbling(event:MouseEvent):void{
    event.stopPropagation();
}

/**
 * This function creates an event handler for stop the event bubbling if an user will click on dialog
 */
function createEventHandlerDialog():void{
    const contentDialogRef = document.getElementById('dialog_container');
    if(contentDialogRef){
        contentDialogRef.addEventListener('click', (event:MouseEvent) => {
            stopEventBubbling(event);
        });
    }
}

/**
 * This function ist used to close the dialog and refer back to start page
 */
function exitGame():void{
    const contentBtnRef = document.getElementById('exit_game_btn') as HTMLDivElement;
    if(contentBtnRef){
        contentBtnRef.addEventListener('click', () => {
            closeDialog();
            window.location.href = '/index.html';
        });
    }
}

/**
 * This function closes the dialog witout slide animation
 */
function closeDialog():void{
    const contentDialogRef = document.getElementById('exit_dialog') as HTMLDialogElement;
    if(contentDialogRef){
        contentDialogRef.close();
        contentDialogRef.classList.remove('dialogOpened');
    }
}

/**
 * This function checks the used theme and design the dialog 
 * 
 * @param theme - includes the information of used theme
 */
function checkTheme(theme:string):void{
    setBorderRadiusFoodTheme(theme);
    checkTextContent(theme);
    createEventHandlerExitGameBtnFoodTheme(theme);
}

/**
 * This function set a border radius of dialog in food theme
 * 
 * @param theme - includes the information of used theme
 */
function setBorderRadiusFoodTheme(theme:string){
    const contentDialogRef = document.getElementById('exit_dialog');
    if(contentDialogRef && theme == 'food_theme'){contentDialogRef.style.borderRadius = "20px";}
}

/**
 * This function checks used theme and and set the content of back to game button on dialog
 * 
 * @param theme - includes the information of used theme
 */
function checkTextContent(theme:string){
    const contentBackBtnRef = document.getElementById('close_dialog_btn');
    if(contentBackBtnRef){
        const contentSpanRef = contentBackBtnRef.querySelector('span');
        if(contentSpanRef && theme == 'code_vibes'){contentSpanRef.innerText = 'Back to game';}
        if(contentSpanRef && theme == 'food_theme'){contentSpanRef.innerText = 'No, back to game';}
    }
   
}

/**
 * This function creates hover event for exit game button from food theme
 * 
 * @param theme - includes the information of used theme
 */
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