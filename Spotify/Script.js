console.log("Welcome to Spotify");  

//Initialize the Variables
let songIndex = 0;  
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let song = [
    {songName: "salam-e-ishq", filePath:"songs/1.mp3", coverPath: "cover/1.jpeg"},
    {songName: "Bedardi-Se-Pyaar-Ka", filePath:"songs/2.mp3", coverPath: "cover/2.jpeg"}, 
    {songName: "Dil-Royi-Jaye", filePath:"songs/3.mp3", coverPath: "cover/3.jpeg"}, 
    {songName: "Ishq-Ne-Ishq-Se-Koi-Baat-Na-Puchi", filePath:"songs/4.mp3", coverPath: "cover/4.jpeg"}, 
    {songName: "Mujhe-Tum-Yaad-Rakhna", filePath:"songs/5.mp3", coverPath: "cover/5.jpeg"},
    {songName: "Wallah-Wallah", filePath:"songs/6.mp3", coverPath: "cover/6.jpeg"},

]
songItems.forEach((element, i) => {
    //console.log(element,i);
    element.getElementsByTagName('img')[0].src = song[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = song[i].songName;

    
})
// audioElement.play();

//Handle play/pause click 
masterPlay.addEventListener('click', ( )=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity = 0;
    }
})

// Listem to Events 
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    // console.log(progress);
    myprogressBar.value = progress;
})

myprogressBar.addEventListener('chnage',()=>{
    audioElement.currentTime = myprogressBar.value *  audioElement.duration/100;
})

// const makeAllPlayes = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.target.classList.remove('fa-circle-pause'); 
//     element.target.classList.add('fa-circle-play');  
//     })  
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//         //console.log(e.target);
//         makeAllPlayes();
//         index = parseInt(e.target.id);
//         e.target.classList.remove('fa-circle-play'); 
//         e.target.classList.add('fa-circle-pause'); 
//         audioElement.src = 'songs/${index+1}.mp3'
//         audioElement.currentTime = 0;
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play')
//         masterPlay.classList.add('fa-circle-pause')

//     })
// })