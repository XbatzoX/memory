import * as data from './dataObj';

let themeArr = ['code_vibes', 'food_theme'];
let playerArr = ['blue', 'orange'];
let boardSizeArr = [16, 24, 36];

export function checkInputValueTheme():boolean{
    let valid = false;
    let value = data.gameSettings.theme;
    
    for (let index = 0; index < themeArr.length; index++) {
        if(value == themeArr[index]){
            let contentSpan = document.getElementById('state_theme');
            let contentDividerTheme = document.getElementById('divider_state_theme');
            let contentDividerChoosen = document.getElementById('divider_theme_choosen');
            if(index == 0){
                if(contentSpan){contentSpan.innerText = 'Code vibes';}
            }
            if(index == 1){
                if(contentSpan){contentSpan.innerText = 'Foods theme';}
            }
            if(contentDividerTheme){contentDividerTheme.classList.add('invisible');}
            if(contentDividerChoosen){contentDividerChoosen.classList.remove('invisible');}
            valid = true;
        }
    }
    return valid;
}

export function checkInputValuePlayer():boolean{
    let valid = false;
    let value = data.gameSettings.player;

    for(let index = 0; index < playerArr.length; index++){
        if(value == playerArr[index]){
            let contentSpan = document.getElementById('state_player');
            let contentDividerTheme = document.getElementById('divider_state_player');
            let contentDividerChoosen = document.getElementById('divider_player_choosen');
            if(index == 0){
                if(contentSpan){contentSpan.innerText = 'Blue Player';}
            }
            if(index == 1){
                if(contentSpan){contentSpan.innerText = 'Orange Player';}
            }
            if(contentDividerTheme){contentDividerTheme.classList.add('invisible');}
            if(contentDividerChoosen){contentDividerChoosen.classList.remove('invisible');}
            valid = true;
        }
    }
    return valid;
}

export function checkInputValueBoardSize():boolean{
    let valid = false;
    let value = data.gameSettings.boardSize;

    for(let index = 0; index < boardSizeArr.length; index++){
        if(value == boardSizeArr[index]){
            let contentSpan = document.getElementById('state_board');
            if(index == 0){
                if(contentSpan){contentSpan.innerText = 'Board-16 Cards';}
            }
            if(index == 1){
                if(contentSpan){contentSpan.innerText = 'Board-24 Cards';}
            }
            if(index == 2){
                if(contentSpan){contentSpan.innerText = 'Board-36 Cards';}
            }
            valid = true;
        }
    }
    return valid;
}

export function checkGameSettings(themeValid:boolean, playerValid:boolean, boardSizeValid:boolean):void{
    if(themeValid && playerValid && boardSizeValid){
        let contentButtonRef = document.getElementById('start_button');
        if(contentButtonRef){
            contentButtonRef.classList.remove('yellowBtn__disabled');
            contentButtonRef.classList.add('yellowBtn__enabled');
            contentButtonRef.classList.add('yellowBtn--highlight');
        }
    }
}