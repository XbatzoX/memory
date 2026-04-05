const playButton = document.getElementById('play_button');

if(playButton){
    playButton.addEventListener('click', () => {
        openPage('html/settings.html');
    })
}

function openPage(path:string):void{
    window.location.href = path;
}