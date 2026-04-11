export function renderHeader(id:string):string{
    return `<div  class="gameHeader__frame padding-top-l">
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
                        <img id="current_player_indication" class="currentPlayer-${id}__indication" src="../assets/icons/current_player_blue_code_theme.svg" alt="actual player indication as geo style">
                    </div>
                </div>
            </div>`;
}