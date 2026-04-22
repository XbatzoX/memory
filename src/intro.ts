const playButton = document.getElementById('play_button');

/** This query creates an click event handler for the play button */
if(playButton){
    playButton.addEventListener('click', () => {
        openPage('html/settings.html');
    })
}

/**
 * This function is used to open a new html page
 * @param path - includes path of html page
 */
function openPage(path:string):void{
    window.location.href = path;
}