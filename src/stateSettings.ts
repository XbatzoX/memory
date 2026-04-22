import * as data from './dataObj';

let themeArr = ['code_vibes', 'food_theme'];
let playerArr = ['blue', 'orange'];
let boardSizeArr = [16, 24, 36];
export let isValid:boolean;

/**
 * This function checks if the selected theme selection is valid
 * @returns - a boolean information if selection is valid
 */
export function checkInputValueTheme():boolean{
    let valid = false;
    let value = data.gameSettings.theme;
    for (let index = 0; index < themeArr.length; index++) {
        if(value == themeArr[index]){
            actionsInputValueTheme(index);
            valid = true;
        }
    }
    return valid;
}

/**
 * This function set the theme section on state bar
 * @param index - includes the index number of theme array
 */
function actionsInputValueTheme(index:number):void{
    let contentSpan = document.getElementById('state_theme');
    let contentDividerTheme = document.getElementById('divider_state_theme');
    let contentDividerChoosen = document.getElementById('divider_theme_choosen');
    if(index == 0){if(contentSpan){contentSpan.innerText = 'Code vibes';}}
    if(index == 1){if(contentSpan){contentSpan.innerText = 'Foods theme';}}
    if(contentDividerTheme){contentDividerTheme.classList.add('invisible');}
    if(contentDividerChoosen){contentDividerChoosen.classList.remove('invisible');}
}

/**
 * This function checks if the selected player selection is valid
 * @returns a boolean information if selection is valid
 */
export function checkInputValuePlayer():boolean{
    let valid = false;
    let value = data.gameSettings.player;
    for(let index = 0; index < playerArr.length; index++){
        if(value == playerArr[index]){
            let contentSpan = document.getElementById('state_player');
            let contentDividerTheme = document.getElementById('divider_state_player');
            let contentDividerChoosen = document.getElementById('divider_player_choosen');
            if(index == 0){if(contentSpan){contentSpan.innerText = 'Blue Player';}}
            if(index == 1){if(contentSpan){contentSpan.innerText = 'Orange Player';}}
            if(contentDividerTheme){contentDividerTheme.classList.add('invisible');}
            if(contentDividerChoosen){contentDividerChoosen.classList.remove('invisible');}
            valid = true;
        }
    }return valid;
}

/**
 * This function checks the selection of board size if its valid
 * @returns - a boolean information
 */
export function checkInputValueBoardSize():boolean{
    let valid = false;
    let value = data.gameSettings.boardSize;
    for(let index = 0; index < boardSizeArr.length; index++){
        if(value == boardSizeArr[index]){
            let contentSpan = document.getElementById('state_board');
            if(index == 0){if(contentSpan){contentSpan.innerText = 'Board-16 Cards';}}
            if(index == 1){if(contentSpan){contentSpan.innerText = 'Board-24 Cards';}}
            if(index == 2){if(contentSpan){contentSpan.innerText = 'Board-36 Cards';}}
            valid = true;
        }
    }
    return valid;
}

/**
 * This function is used to check all input selection and enable the create game button
 * @param themeValid - includes information if selected theme is valid
 * @param playerValid - includes information if selected player is valid
 * @param boardSizeValid - includes information if selected board size is valid
 */
export function checkGameSettings(themeValid:boolean, playerValid:boolean, boardSizeValid:boolean):void{
    isValid = false;
    if(themeValid && playerValid && boardSizeValid){
        let contentButtonRef = document.getElementById('start_button');
        if(contentButtonRef){
            contentButtonRef.classList.remove('yellowBtn__disabled');
            contentButtonRef.classList.add('yellowBtn__enabled');
            contentButtonRef.classList.add('yellowBtn--highlight');
        }
        isValid = true;
    }
}