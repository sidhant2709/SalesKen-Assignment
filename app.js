const musicContainer = document.querySelector(".music-container");
var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
console.log(ctx);
const playBtn = document.querySelector("#play");
const audio = document.querySelector("#audio");
const progressContainer = document.querySelector(".progress-container");

const songs = ["hey", "summer", "ukulele"];

let songIndex = 1;

loadSong(songs[songIndex]);

function loadSong(song) {
  audio.src = `songs/${song}.mp3`;
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function drawGraph() {
  let graphValues = [
    -10, 150, 50, 190, 85, 80, 130, 81, 152, 34, 174, 86, 165, 137, 29, 81, 36,
    54, 61, 29, 81, 61, 44, 96, 40, 87, 67, 138, 75, 65, 93, 86, 56, 68, 35, 41,
    43, 44, 53, 62, 72, 92, 188, 63, 54, 142, 84, 42, 138, 43, 142, 40, 40, 45,
    45, 145, 150, 147, 54, 164, 74, 181, 92, 43, 150, 65, 74, 183, 92, 71, 60,
    188, 148, 146, 145, 46, 43, 42, 52, 145, 46, 147, 45, 143, 42, 41, 42, 40,
    42, 147, 42, 144, 94, 123, 42, 60, 100, 85, 90, 186, 43, 62, 152, 95, 146,
    97, 145, 193, 62, 81, 72, 140, 42, 147, 142, 44, 44, 93, 42, 120, 160, 85,
    90, 76, 42, 44, 44, 43, 42, 60, 60, 65, 90, 96,
  ];
  ctx.beginPath();
  ctx.moveTo(6, 150);
  ctx.lineTo(1000, 150);
  ctx.strokeStyle = "grey";
  ctx.stroke();

  //First

  ctx.fillStyle = "#c82124";
  ctx.fillRect(170, 70, 60, 14);
  ctx.fillStyle = "#ffffff";
  ctx.fillText("Hello World", 175, 80);

  ctx.beginPath();
  ctx.moveTo(200, 70);
  ctx.lineTo(200, 120);
  ctx.strokeStyle = "red";
  ctx.stroke();

  ctx.fillStyle = "#c82124";
  ctx.beginPath();
  ctx.arc(200, 120, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  //Second

  ctx.fillStyle = "#40ff00";
  ctx.fillRect(370, 20, 60, 14);
  ctx.fillStyle = " #000000";
  ctx.fillText("JavaScript", 375, 30);

  ctx.beginPath();
  ctx.moveTo(400, 30);
  ctx.lineTo(400, 120);
  ctx.strokeStyle = "#40ff00	";
  ctx.stroke();

  ctx.fillStyle = "#33FF00";
  ctx.beginPath();
  ctx.arc(400, 120, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  //Third
  ctx.fillStyle = "#3300CC";
  ctx.fillRect(530, 15, 70, 14);
  ctx.fillStyle = " #ffffff";
  ctx.fillText("Hello React", 540, 25);

  ctx.beginPath();
  ctx.moveTo(600, 15);
  ctx.lineTo(600, 120);
  ctx.strokeStyle = "#3300CC";
  ctx.stroke();

  ctx.fillStyle = "#3300CC";
  ctx.beginPath();
  ctx.arc(600, 120, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  //Fourth

  ctx.fillStyle = "#3300CC";
  ctx.fillRect(630, 45, 70, 14);
  ctx.fillStyle = " #ffffff";
  ctx.fillText("Angular.js", 640, 55);

  ctx.beginPath();
  ctx.moveTo(700, 45);
  ctx.lineTo(700, 120);
  ctx.strokeStyle = "#3300CC";
  ctx.stroke();

  ctx.fillStyle = "#3300CC";
  ctx.beginPath();
  ctx.arc(700, 120, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  //Fifth

  ctx.fillStyle = "#003300";
  ctx.fillRect(650, 25, 70, 14);
  ctx.fillStyle = " #ffffff";
  ctx.fillText("Redux", 670, 35);

  ctx.beginPath();
  ctx.moveTo(720, 25);
  ctx.lineTo(720, 120);
  ctx.strokeStyle = "#003300";
  ctx.stroke();

  ctx.fillStyle = "#003300";
  ctx.beginPath();
  ctx.arc(720, 120, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  //sixth

  ctx.fillStyle = "#660000";
  ctx.fillRect(690, 2, 70, 14);
  ctx.fillStyle = " #ffffff";
  ctx.fillText("SalesKen", 705, 12);

  ctx.beginPath();
  ctx.moveTo(760, 5);
  ctx.lineTo(760, 120);
  ctx.strokeStyle = "#660000";
  ctx.stroke();

  ctx.fillStyle = "#660000";
  ctx.beginPath();
  ctx.arc(760, 120, 5, 0, Math.PI * 2, false);
  ctx.closePath();
  ctx.fill();

  let width = 3;
  let X = 0;
  ctx.fillStyle = "rgba(202, 201, 201, 0.3)";
  console.log(graphValues.length);
  for (let i = 0; i < graphValues.length; i++) {
    if (i % 2 === 0) {
      let h = graphValues[i];
      ctx.fillRect(X, 150 - h / 2, width, h + 10);
    } else {
      let h = graphValues[i];
      ctx.fillRect(X, 150 - h / 2, width, h + 15);
    }
    X += width + 3;
  }
  return graphValues;
}

drawGraph();

function playSongWithGraph(val) {
  let graphValues = drawGraph();
  console.log(graphValues);
  let width = 3;
  let X = 0;
  for (let i = 0; i < graphValues.length; i++) {
    if (i % 2 === 0) {
      let h = graphValues[i];
      ctx.fillRect(X, 150 - h / 2, width, h + 10);
    } else {
      let h = graphValues[i];
      ctx.fillRect(X, 150 - h / 2, width, h + 15);
    }
    X += width + 3;
    X < val
      ? (ctx.fillStyle = "#E2BFCA")
      : (ctx.fillStyle = "rgba(202, 201, 201, 0.1)");
  }
}

function upadateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  console.log(currentTime * (800 / duration));
  playSongWithGraph(currentTime * (800 / duration));
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

audio.addEventListener("timeupdate", upadateProgress);
progressContainer.addEventListener("click", setProgress);
