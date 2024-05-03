// Max W.
// 5/3/24

let i = 0;
const images = [];
const time = 3000;

images[0] = 'sword1.jpg';
images[1] = 'sword2.jpg';
images[2] = 'sword3.jpg';

const captions = ['Sword1', 'Sword2', 'Sword3'];



function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
     i = 0;

    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;