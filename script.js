"use strict";

const img = document.querySelector("img");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

const audio = document.querySelector("audio");
const audio_arr = ["better-day-186374.mp3","separation-185196.mp3","titanium-170190.mp3"];

const img_arr = ["img1.jpg","img2.jpg","img3.jpg"];
 let index = 0;
 const img_len = img_arr.length;
 img.src = img_arr[0];
 audio.src = audio_arr[0];
 function leftFn(){
    index--;
    if(index < 0 ){
        index = 0;
    img.src = img_arr[index];
    audio.src = audio_arr[index];
    audio.play();

    }else{
    img.src = img_arr[index];
    audio.src = audio_arr[index];
    audio.play();

    }
};

 function rightFn(){
    index++;
    if(index > (img_len-1)){
        index = (img_len-1);
        console.log(index);
    img.src = img_arr[index];
    audio.src = audio_arr[index];
    audio.play();

    }else{
        console.log(index);
    img.src = img_arr[index];
    audio.src = audio_arr[index];
    audio.play();

    };
    
};

left.addEventListener('click', leftFn);
right.addEventListener('click',rightFn);


/////////////////////////////////////
//////////////////////////////////
////////////////////////////




