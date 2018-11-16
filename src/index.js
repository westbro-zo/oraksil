const gameBoy = document.querySelector(".game-boy");
const gameBoyScreen = document.querySelector(".game-boy-screen");
const themeSwitch = document.querySelector(".theme-switch");
const themePointer = document.querySelector(".theme-pointer");
const lightSwitch = document.querySelector(".light-switch ");
const switchTab = document.querySelector(".switch-tab");
const lightOff = document.querySelector(".light-off");
const coin = document.querySelector('.coin');
const track1 = document.querySelector('.track1');
const track2 = document.querySelector('.track2');
const track3 = document.querySelector('.track3');
const track4 = document.querySelector('.track4');
const songTitle = document.querySelector('.song-title');
const onOff = document.querySelector('.on-off');
let degree = 30;
let lightOn = true;
const mp3 = [track1, track2, track3, track4]
const mp3Title = ["Queen-Bohemian Rhapsody", "가을방학-호흡과다", "9와 숫자들-빙글", "제이레빗-Happy Things-Looking Around"]
let randomTrack;
let track;
let trackTitle;

coin.addEventListener('click', e => {
  e.preventDefault();
  if(track)
    track.pause();
  randomTrack = getRandomTrack();
  track = mp3[randomTrack];
  trackTitle = mp3Title[randomTrack];
  if(!track) return;
  track.play();
  track.currentTime=0;
  onOff.style.left="30px";
  songTitle.value = trackTitle;
  console.log(track);
})

gameBoy.addEventListener("click", e => {
  e.preventDefault();
  goSnakeGame();
});
themeSwitch.addEventListener("click", e => {
  e.preventDefault();
  // transform: rotateZ(30deg);
  // alert('test')
  themePointer.style.transform = `rotateZ(${degree}deg)`;
  if (degree === -60) {
    document.body.style.backgroundColor = "#f2f2f2";
  } else if (degree === -30) {
    document.body.style.backgroundColor = "#ffcbd7";
  } else if (degree === 0) {
    document.body.style.backgroundColor = "#79ffce";
  } else if (degree === 30) {
    document.body.style.backgroundColor = "#ffeb9f";
  } else if (degree === 60) {
    document.body.style.backgroundColor = "#5cd5ff";
  }
  degree = degree + 30;
  if (degree > 60) {
    degree = -60;
  }
});

lightSwitch.addEventListener("click", e => {
  e.preventDefault();

  if (lightOn) {
    switchTab.style.transform = "rotateZ(180deg)";
    lightOff.style.display = "block";
    lightOn = false;
  }
});
lightOff.addEventListener("click", e => {
  e.preventDefault();
  switchTab.style.transform = "rotateZ(0deg)";
  lightOff.style.display = "none";
  lightOn = true;
});
function goSnakeGame() {
  window.open("https://adoring-bardeen-ffa440.netlify.com/", "_blank");
}
function getRandomTrack(){
  return Math.floor(Math.random()*3);
}
