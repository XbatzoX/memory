export function renderHeader(id:string):string{
    return `<div  class="gameHeader__frame">
                <div class="gameHeader__container-${id}">
                    <div class="playerContainer-${id}">
                        <div class="playerContainer-${id}__box">
                            <img id="icon_blue_player" class="playerContainer-${id}__img" src="../assets/img/player_blue_code_theme.svg" alt="blue player icon">
                            <span id="player_blue_value" class="playerContainer-${id}__valueBlue">0</span>
                        </div>
                        <div class="playerContainer-${id}__box">
                            <img id="icon_orange_player" class="playerContainer-${id}__img" src="../assets/img/player_blue_code_theme.svg" alt="blue player icon">
                            <span id="player_orange_value" class="playerContainer-${id}__valueOrange">0</span>
                        </div>
                    </div>
                </div>
            </div>`;
}