import * as data from './dataObj';
import { GameResult } from './interfaces';

let resultObj:GameResult;

function init():void{
    let storageData = localStorage.getItem('myGameResult');
    if(storageData){resultObj= JSON.parse(storageData);}   
    
    console.log(resultObj);
    let testSpan = document.getElementById('test_id');
    if(testSpan){testSpan.innerHTML = resultObj.winner;}
}

if(window.location.pathname.includes('gameOver.html')){
    init();
}