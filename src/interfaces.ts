export interface Theme{
    readonly name : string,
    bg_color : string,
    header_color : string,
    current_player_blue : string,
    current_player_orange : string,
    player_blue: string,
    player_orange: string
    exit_icon : string
}

export interface Card{
    frontImage: string,
    backImage: string,
    cardNumber: number,
    colorMatch: string,
}

export interface Settings{
    theme: string,
    player: string,
    boardSize: number
}

interface PositionData{
    fieldPos: string,
    flipPermission: boolean
}

export interface Field{
    cardPos1: PositionData,
    cardPos2: PositionData,
    value : number
}

export interface Player{
    readonly name: string,
    permission : boolean,
    attempts: number,
    points: number
}

export interface CardValues{
    card1: number,
    card2: number
}

export interface Pickedcards{
    cardPos1: number,
    cardPos2: number
}