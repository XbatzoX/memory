export let gameSettings:{
    theme : string,
    player : string,
    boardSize: number
} = {
    theme : '',
    player : '',
    boardSize : 0
}

export let codeVibesImageArr:string[] = [
    '/assets/icons/code_theme/angular_code_theme.svg',
    '/assets/icons/code_theme/b_code_theme.svg',
    '/assets/icons/code_theme/css_code_theme.svg',
    '/assets/icons/code_theme/database_code_theme.svg',
    '/assets/icons/code_theme/django_code_theme.svg',
    '/assets/icons/code_theme/firebase_code_theme.svg',
    '/assets/icons/code_theme/git_code_theme.svg',
    '/assets/icons/code_theme/github_code_theme.svg',
    '/assets/icons/code_theme/html_code_theme.svg',
    '/assets/icons/code_theme/javascript.code_theme.svg',
    '/assets/icons/code_theme/node_code_theme.svg',
    '/assets/icons/code_theme/python_code_theme.svg',
    '/assets/icons/code_theme/react.code_theme.svg',
    '/assets/icons/code_theme/sass.code_theme.svg',
    '/assets/icons/code_theme/terminal_code_theme.svg',
    '/assets/icons/code_theme/typescript_code_theme.svg',
    '/assets/icons/code_theme/vs_code_theme.svg',
    '/assets/icons/code_theme/vue_code_theme.svg'
];

export let foodThemeImageArr:string[] = [
    '/assets/icons/food_theme/brezel_food_theme.svg',
    '/assets/icons/food_theme/cake_food_theme.svg',
    '/assets/icons/food_theme/chicken_food_theme.svg',
    '/assets/icons/food_theme/chocolate_food_theme.svg',
    '/assets/icons/food_theme/corndog_food_theme.svg',
    '/assets/icons/food_theme/donut_food_theme.svg',
    '/assets/icons/food_theme/fries_food_theme.svg',
    '/assets/icons/food_theme/hamburger_food_theme.svg',
    '/assets/icons/food_theme/ice_food_theme.svg',
    '/assets/icons/food_theme/muffin_food_theme.svg',
    '/assets/icons/food_theme/pizza_food_theme.svg',
    '/assets/icons/food_theme/pudding_food_theme.svg',
    '/assets/icons/food_theme/rainbow_cakes_food_theme.svg',
    '/assets/icons/food_theme/salad_food_theme.svg',
    '/assets/icons/food_theme/sandwich_food_theme.svg',
    '/assets/icons/food_theme/sushi_food_theme.svg',
    '/assets/icons/food_theme/taco_food_theme.svg',
    '/assets/icons/food_theme/wrap_food_theme.svg'
];

export let gameResult:{
    winner : string,
    pointsBluePlayer : number,
    pointsOrangePlayer : number
} = {
    winner : '',
    pointsBluePlayer : 0,
    pointsOrangePlayer : 0
};