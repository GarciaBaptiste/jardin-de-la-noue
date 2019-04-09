"use strict";

window.addEventListener('load', setup);
window.addEventListener('click', clicked);

var videoTest;

function setup() {
  videoTest = document.getElementsByTagName('video')[0];
}

var videoLauched = false;

function clicked() {
  if (!document.body.getAttribute('video-lauched')) {
    document.body.setAttribute('video-launched', true);
    videoLauched = true;
    videoTest.play();
  }
}

function wheeled(delta) {
  if (videoLauched) {
    if (delta < 0) {
      if (delta >= -16) {
        videoTest.playbackRate = -delta;
      } else {
        videoTest.playbackRate = 16;
      }
    } else {
      videoTest.playbackRate = 0;
      videoTest.currentTime -= delta / 100;
      if (videoTest.currentTime <= 0.1) {
        videoTest.currentTime = videoTest.duration - 0.1;
      }
    }
  }
}

function wheelEnded() {
  if (videoLauched) {
    videoTest.playbackRate = 1;
  }
}