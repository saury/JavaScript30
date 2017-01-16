const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVdo() {
    var constraints = window.constraints = {
        audio: false,
        video: true
    };
    navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        video.src = window.URL.createObjectURL(stream)
        video.play();
    })
    .catch(error => console.log(error));
}

function paintCvs() { 
    const w = video.videoWidth;
    const h = video.videoHeight;

    canvas.width = w;
    canvas.height = h;
    console.log(w, h)
    setInterval(() => {
        ctx.drawImage(video, 0, 0, w, h)
    },10)
 }

getVdo();

video.addEventListener('canplay', paintCvs, false)
