import * as logic from './gameLogic';

/** This function is used to change the player for the next try */
export function changePlayer():void{
    let changed = false;
    changed = changePlayerToOrange(changed);
    changed = changePlayerToBlue(changed);
}

/**
 * This function changes the player to orange if the blue player misses 
 * @param isChanged - includes info if player already changed
 * @returns - a boolean with info if player changed
 */
function changePlayerToOrange(isChanged:boolean):boolean{
    let changed = false;
    if(logic.currentPlayer == 'blue' && !isChanged){
        for (let index = 0; index < logic.playerArr.length; index++) {
            if(logic.playerArr[index].name == logic.currentPlayer){
                clearPlayerData(index);
                logic.setPlayer('orange');
                changed = setDataOrangePlayer();
                break;
            } 
        }
    }
    return changed;
}

/**
 * This function ist used to set the player data if next player is orange
 * @returns - a boolean information
 */
function setDataOrangePlayer():boolean{
    let changed = false;
    if(logic.currentPlayer == 'orange'){
        setDataForNextPlayer();
        changed = true;
    }
    return changed;
}

/**
 * This function changes the player to blue if the orange player misses
 * @param isChanged - includes info if player already changed
 * @returns - a boolean with info if player changed
 */
function changePlayerToBlue(isChanged:boolean):boolean{
    let changed = false;
    if(logic.currentPlayer == 'orange' && !isChanged){
        for (let index = 0; index < logic.playerArr.length; index++) {
            if(logic.playerArr[index].name == logic.currentPlayer){
                clearPlayerData(index);
                logic.setPlayer('blue');
                changed = setDataBluePlayer();
                break;
            } 
        }
    }
    return changed;
}

/**
 * This function ist used to set the player data if next player is orange
 * @returns - a boolean information
 */
function setDataBluePlayer():boolean{
    let changed = false;
    if(logic.currentPlayer == 'blue'){
        setDataForNextPlayer();
        changed = true;
    }
    return changed;
}

/**
 * This function is used to clear the player data if did not match
 * @param index - includes the index for playerArr
 */
function clearPlayerData(index:number):void{
    logic.playerArr[index].permission = false;
    logic.playerArr[index].cardValues.card1 = 0;
    logic.playerArr[index].cardValues.card2 = 0;
}

/** This function is used to set the values for current player */
function setDataForNextPlayer():void{
    for (let index = 0; index < logic.playerArr.length; index++) {
        if(logic.playerArr[index].name == logic.currentPlayer){
            logic.playerArr[index].attempts = 2;
            setTimeout(() => {
                logic.playerArr[index].permission = true;
            },1500);
        }
    }
}

/** This function flip the cards back after a delay if the player did not match the pair */
export function flipBackWithoutMatch():void{
   let player:string;
    for (let index = 0; index < logic.playerArr.length; index++) {
        player = logic.playerArr[index].name;
        if(player == logic.currentPlayer){
            setTimeout(() => {
               flipCardsToBackgroundImage(index);
            }, 1000);
        }
    }
}

/**
 * This function is used to animate the flip back to background image
 * @param index - includes the index number of player array
 */
function flipCardsToBackgroundImage(index:number){
    let card1 = logic.playerArr[index].pickedCards.cardPos1;
    let card2 = logic.playerArr[index].pickedCards.cardPos2;
    let cardOnBoard = document.getElementById('card_' + card1);
    if(cardOnBoard){
        cardOnBoard.classList.toggle('is-flipped');
        setFlipPermissionFromCard(card1);
    }
    cardOnBoard = document.getElementById('card_' + card2);
    if(cardOnBoard){
        cardOnBoard.classList.toggle('is-flipped');
        setFlipPermissionFromCard(card2);
    }
}

/**
 * This function set the flip permission back to cards
 * @param i - includes the number of card in card array
 */
function setFlipPermissionFromCard(i:number):void{
    let card = '';
    for (let index = 0; index < logic.cardsArr.length; index++) {
        card = logic.cardsArr[index].fieldObj.cardPos1.fieldPos;
        if(card == `${i}`){logic.cardsArr[index].fieldObj.cardPos1.flipPermission = true;}
        card = logic.cardsArr[index].fieldObj.cardPos2.fieldPos;
        if(card == `${i}`){logic.cardsArr[index].fieldObj.cardPos2.flipPermission = true;}
    }
}