import * as data from './dataObj';
import * as stateSettings from './stateSettings';

let validTheme = false;
let validPlayer = false;
let validBoardSize = false;

function radioHoverEffect(idSpan:string, idDiv:string):void{
    const contentSpanRef = document.getElementById(idSpan);
    const contentDivRef = document.getElementById(idDiv);
    if(contentSpanRef){highlightText(contentSpanRef);};
    if(contentDivRef){showDivider(contentDivRef);};
}

function highlightText(element:HTMLElement):void{
    element.classList.remove('radio__label');
    element.classList.add('radio__label--highlight');
}

function showDivider(element:HTMLElement):void{
    element.classList.remove('invisible');
}

function radioNormalView(idSpan:string, idDiv:string):void{
    const contentSpanRef = document.getElementById(idSpan);
    const contentDivRef = document.getElementById(idDiv);
    if(contentSpanRef){removeHighlightFromText(contentSpanRef);};
    if(contentDivRef){removeDividerContainer(contentDivRef);};
}

function removeHighlightFromText(element:HTMLElement):void{
    element.classList.remove('radio__label--highlight');
    element.classList.add('radio__label');
}

function removeDividerContainer(element:HTMLElement):void{
    element.classList.add('invisible');
}

const labelCodeTheme = document.getElementById('label_code_theme');
if(labelCodeTheme){
    labelCodeTheme.addEventListener('mouseover', () => {
        radioHoverEffect('span_code_theme', 'divider_code_theme');
        changeThemeImage('theme_image', '/assets/img/image_code_vibes_theme.svg');
    });
    labelCodeTheme.addEventListener('mouseout', () => {
        const inputCodeTheme = labelCodeTheme.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!inputCodeTheme?.checked){
            radioNormalView('span_code_theme', 'divider_code_theme');
            changeThemeImage('theme_image', '/assets/img/image_foods_theme.svg');
        }
    });
}

const labelFoodTheme = document.getElementById('label_food_theme');
if(labelFoodTheme){
    labelFoodTheme.addEventListener('mouseover', () => {
        radioHoverEffect('span_food_theme', 'divider_food_theme');
        changeThemeImage('theme_image', '/assets/img/image_foods_theme.svg');
    });
    labelFoodTheme.addEventListener('mouseout', () => {
        const inputFoodTheme = labelFoodTheme.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!inputFoodTheme?.checked){
            radioNormalView('span_food_theme', 'divider_food_theme');
            changeThemeImage('theme_image', '/assets/img/image_code_vibes_theme.svg');
        }
    });
}

const inputTheme = document.querySelectorAll<HTMLInputElement>('input[name = "theme"]');
inputTheme.forEach(input => {
    input.addEventListener('change', () => {
        actionsCodeTheme(input);
        actionsFoodTheme(input);
        validTheme =  stateSettings.checkInputValueTheme();
        stateSettings.checkGameSettings(validTheme, validPlayer, validBoardSize);
    });
});

function actionsCodeTheme(input:HTMLInputElement):void{
    if(input.value == 'code_vibes'){
        if(input.checked){
            data.gameSettings.theme = 'code_vibes';
            radioHoverEffect('span_code_theme', 'divider_code_theme');
            radioNormalView('span_food_theme', 'divider_food_theme');
        }else{
            radioNormalView('span_code_theme', 'divider_code_theme');    
        }
    }
}

function actionsFoodTheme(input:HTMLInputElement):void{
    if(input.value == 'food_theme'){
        if(input.checked){
            data.gameSettings.theme = 'food_theme';
            radioHoverEffect('span_food_theme', 'divider_food_theme');
            radioNormalView('span_code_theme', 'divider_code_theme');
        }else{
            radioNormalView('span_food_theme', 'divider_food_theme');
        }
    }
}

const labelBluePlayer = document.getElementById('label_blue_player');
if(labelBluePlayer){
    labelBluePlayer.addEventListener('mouseover', () => {
        radioHoverEffect('span_blue_player', 'divider_blue_player');
    });
    labelBluePlayer.addEventListener('mouseout', () => {
        const inputBluePlayer = labelBluePlayer.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!inputBluePlayer?.checked){
            radioNormalView('span_blue_player', 'divider_blue_player');
        }
    });
}

const labelOrangePlayer = document.getElementById('label_orange_player');
if(labelOrangePlayer){
    labelOrangePlayer.addEventListener('mouseover', () => {
        radioHoverEffect('span_orange_player', 'divider_orange_player');
    });
    labelOrangePlayer.addEventListener('mouseout', () => {
        const inputOrangePlayer = labelOrangePlayer.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!inputOrangePlayer?.checked){
            radioNormalView('span_orange_player', 'divider_orange_player');
        }
    });
}

const inputPlayer = document.querySelectorAll<HTMLInputElement>('input[name = "player"]');
inputPlayer.forEach(input => {
    input.addEventListener('change', () => {
        actionsBluePlayer(input);
        actionsOrangePlayer(input);
        validPlayer = stateSettings.checkInputValuePlayer();
        stateSettings.checkGameSettings(validTheme, validPlayer, validBoardSize);
    });
});

function actionsBluePlayer(input:HTMLInputElement):void{
    if(input.value == 'blue'){
        if(input.checked){
            data.gameSettings.player = 'blue';
            radioHoverEffect('span_blue_player', 'divider_blue_player');
            radioNormalView('span_orange_player', 'divider_orange_player');
        }else{
            radioNormalView('span_blue_player', 'divider_blue_player');    
        }
    }
}

function actionsOrangePlayer(input:HTMLInputElement):void{
    if(input.value == 'orange'){
        if(input.checked){
            data.gameSettings.player = 'orange';
            radioHoverEffect('span_orange_player', 'divider_orange_player');
            radioNormalView('span_blue_player', 'divider_blue_player');
        }else{
            radioNormalView('span_orange_player', 'divider_orange_player');
        }
    }
}

const label16Cards = document.getElementById('label_16_cards');
if(label16Cards){
    label16Cards.addEventListener('mouseover', () => {
        radioHoverEffect('span_16_cards', 'divider_16_cards');
    });
    label16Cards.addEventListener('mouseout', () => {
        const input16Cards = label16Cards.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!input16Cards?.checked){
            radioNormalView('span_16_cards', 'divider_16_cards');
        }
    });
}

const label24Cards = document.getElementById('label_24_cards');
if(label24Cards){
    label24Cards.addEventListener('mouseover', () => {
        radioHoverEffect('span_24_cards', 'divider_24_cards');
    });
    label24Cards.addEventListener('mouseout', () => {
        const input24Cards = label24Cards.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!input24Cards?.checked){
            radioNormalView('span_24_cards', 'divider_24_cards');
        }
    });
}

const label36Cards = document.getElementById('label_36_cards');
if(label36Cards){
    label36Cards.addEventListener('mouseover', () => {
        radioHoverEffect('span_36_cards', 'divider_36_cards');
    });
    label36Cards.addEventListener('mouseout', () => {
        const input24Cards = label36Cards.querySelector<HTMLInputElement>('input[type="radio"]');
        if(!input24Cards?.checked){
            radioNormalView('span_36_cards', 'divider_36_cards');
        }
    });
}

const inputBoardSize = document.querySelectorAll<HTMLInputElement>('input[name = "board_size"]');
inputBoardSize.forEach(input => {
    input.addEventListener('change', () => {
        actions16Cards(input);
        actions24Cards(input);
        actions36Cards(input);
        validBoardSize = stateSettings.checkInputValueBoardSize();
        stateSettings.checkGameSettings(validTheme, validPlayer, validBoardSize);
    });
});

function actions16Cards(input:HTMLInputElement):void{
    if(input.value == 'sixteen'){
        if(input.checked){
            data.gameSettings.boardSize = 16;
            radioHoverEffect('span_16_cards', 'divider_16_cards');
            radioNormalView('span_24_cards', 'divider_24_cards');
            radioNormalView('span_36_cards', 'divider_36_cards');
        }else{
            radioNormalView('span_16_cards', 'divider_16_cards');    
        }
    }
}

function actions24Cards(input:HTMLInputElement):void{
    if(input.value == 'twentyfour'){
        if(input.checked){
            data.gameSettings.boardSize = 24;
            radioHoverEffect('span_24_cards', 'divider_24_cards');
            radioNormalView('span_16_cards', 'divider_16_cards');
            radioNormalView('span_36_cards', 'divider_36_cards');
        }else{
            radioNormalView('span_24_cards', 'divider_24_cards');    
        }
    }
}

function actions36Cards(input:HTMLInputElement):void{
    if(input.value == 'thirtysix'){
        if(input.checked){
            data.gameSettings.boardSize = 36;
            radioHoverEffect('span_36_cards', 'divider_36_cards');
            radioNormalView('span_16_cards', 'divider_16_cards');
            radioNormalView('span_24_cards', 'divider_24_cards');
        }else{
            radioNormalView('span_36_cards', 'divider_36_cards');    
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    radioHoverEffect('span_code_theme', 'divider_code_theme');
});

function changeThemeImage(idImage:string, path:string):void{
    let contentImgRef = document.getElementById(idImage) as HTMLImageElement;
    if(contentImgRef){contentImgRef.src = path}
}