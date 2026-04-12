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