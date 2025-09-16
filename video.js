const video = document.querySelector("video");

function goBack() {
  window.location.href = "index.html"; // back to main page
}

function toggleVideo() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function forward() {
  video.currentTime += 10; // skip 10 seconds
}
