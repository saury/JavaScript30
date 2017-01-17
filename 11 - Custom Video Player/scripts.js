const vdo = document.querySelector('.player__video');
let vdo_play = false;
vdo.addEventListener('canplay', canPlay, false);

function canPlay() {
    document.querySelector('.player__button')
        .addEventListener('click', e => {
            if(!vdo_play){
                vdo.play();
                vdo_play = true;
            }
            else{
                vdo.pause();
                vdo_play = false;
            }
        }, false)
}