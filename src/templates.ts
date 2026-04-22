/**
 * This template function is used to render the header of game page
 * @param id - includes the used theme
 * @returns - a string filled with HTML elements
 */
export function renderHeader(id:string):string{
    return `<div  class="gameHeader__frame padding-m">
                <div class="gameHeader__container-${id}">
                    <div class="playerContainer-${id} padding-s">
                        <div class="playerContainer-${id}__box">
                            <img id="icon_blue_player" class="playerContainer-${id}__img" src="../assets/img/player_blue_code_theme.svg" alt="blue player icon">
                            <span id="player_blue_value" class="playerContainer-${id}__valueBlue">0</span>
                        </div>
                        <div class="playerContainer-${id}__box">
                            <img id="icon_orange_player" class="playerContainer-${id}__img" src="../assets/img/player_blue_code_theme.svg" alt="blue player icon">
                            <span id="player_orange_value" class="playerContainer-${id}__valueOrange">0</span>
                        </div>
                    </div>
                    <div class="currentPlayer-${id}">
                        <span class ="currentPlayer-${id}__text">Current player:</span>
                        <div id="cp_indication_container" class="currentPlayer-${id}__indicationContainer">
                            <img id="current_player_indication" class="currentPlayer-${id}__indication" src="../assets/icons/current_player_blue_code_theme.svg" alt="actual player indication as geo style">
                        </div>
                    </div>
                    <div class="exitFrame">
                        <div id="exit_container" class="exitContainer-${id}">
                            <img id="exit_icon" class="exitContainer-${id}__img" src="/assets/icons/exit_icon_code_theme.svg" alt="exit game icon">
                            <span id="exit_span" class="exitContainer-${id}__text">Exit game</span>
                        </div>
                    </div>
                </div>
            </div>`;
}

/**
 * This function is used to render a board of 4 cards in a row
 * @param i - includes the card number on board
 * @returns - a string filled with HTML elements
 */
export function getFourCardInRowTemplate(i:number):string{
    return `<div class="cardRow">
                <div id="card_${i}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 1}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 1}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 1}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 2}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 2}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 2}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 3}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 3}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 3}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
            </div>`;
}

/**
 * This function is used to render a board of 6 cards in a row
 * @param i - includes the card number on board
 * @returns - a string filled with HTML elements
 */
export function getSixCardInRowTemplate(i:number):string{
    return `<div class="cardRow">
                <div id="card_${i}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 1}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 1}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 1}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 2}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 2}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 2}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 3}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 3}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 3}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 4}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 4}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 4}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
                <div id="card_${i + 5}" class="card">
                    <div class="card__inner">
                        <img id="cardFace_${i + 5}" class="card__face card__face--front" src="/assets/icons/code_theme/python_code_theme.svg" alt="card with game icon">
                        <img id="cardBack_${i + 5}" class="card__face card__face--back" src="/assets/icons/code_theme/card_bg_code_theme.svg" alt="card background image">
                    </div>
                </div>
            </div>`;
}

/**
 * This function is used to render the game over container in correct theme
 * @param theme - includes the information of used theme
 * @returns - a string filled with HTML elements
 */
export function getGameOverTemplate(theme:string):string{
    return `<div class="gameOver">
                <span id="game_over_text" class="gameOver__text-${theme}">Game Over</span>
                <div class="scoreContainer">
                    <span class="scoreText-${theme}">Final score</span>
                    <div class="playerContainer-${theme} padding-s">
                        <div class="playerContainer-${theme}__box">
                            <img id="over_blue_player" class="playerContainer-${theme}__img" src="../assets/img/player_blue_code_theme.svg" alt="blue player icon">
                            <span id="over_blue_value" class="playerContainer-${theme}__valueBlue">0</span>
                        </div>
                        <div class="playerContainer-${theme}__box">
                            <img id="over_orange_player" class="playerContainer-${theme}__img" src="../assets/img/player_blue_code_theme.svg" alt="blue player icon">
                            <span id="over_orange_value" class="playerContainer-${theme}__valueOrange">0</span>
                        </div>
                    </div>
                </div>
            </div>`;
}

/**
 * This template function is used to render the winner container in correct theme
 * @param theme - includes the information of used theme
 * @returns - a string filled with HTML elements
 */
export function getWinnerTemplate(theme:string):string{
    return `<div class="winnerSection-${theme}">
                <div class="winnerContainer-${theme}">
                    <img id="id_confetti" class="winnerContainer-${theme}__image" src="/assets/icons/confetti_code_vibes.svg" alt="confetti image">
                    <span class="winnerContainer-${theme}__winnerCaption">The winner is</span>
                    <span id="winner_indication" class="winnerContainer-${theme}__winnerIndication">Draw</span>
                    <div class="winnerContainer-${theme}__playerIconBox">
                        <img id="winner_icon" class="winnerContainer-${theme}__playerIcon" src="/assets/icons/blue_winner_code_vibes.svg" alt="chess player icon">
                    </div>
                    <div class="exitFrame">
                        <div id="back_game_over_container" class="exitContainerGameOver-${theme}">
                            <span id="back_game_over_span" class="exitContainerGameOver-${theme}__text">Back to start</span>
                        </div>
                    </div>
                </div>
            </div>`;
}

/**
 * This template function is used to render the exit game dialog in correct theme design
 * @param theme - includes the information of used theme
 * @returns - a string filled with HTML elements
 */
export function getDialogTemplate(theme:string):string{
    return `<div id="dialog_container" class="dialogContainer-${theme}">
                <span class="dialogContainer-${theme}__text">
                    Are you sure you want to quit the game?
                </span>
                <div class="dialogCtrlBox">
                    <div id="close_dialog_btn" class="closeDialogBtn-${theme}">
                        <span class="closeDialogBtn-${theme}__text">Back to game</span>
                    </div>
                    <div class="exitGameBtnFrame-${theme}">
                        <div id="exit_game_btn" class="exitGameBtn-${theme}">
                            <span class="exitGameBtn-${theme}__text">Exit game</span>
                        </div>
                    </div>
                </div>
            </div>`;
}