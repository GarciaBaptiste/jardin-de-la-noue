var marker = true,
  delta,
  interval = 50,
  counter1 = 0,
  counter2;

if ('onwheel' in document) window.addEventListener('wheel', wheel);
else if ('onmousewheel' in document) window.addEventListener('mousewheel', wheel);
else window.addEventListener('MozMousePixelScroll', wheel);


function wheel(e) {
  counter1 += 1;
  e = e || window.event;
  delta = e.deltaY || e.detail || e.wheelDelta;
  if (marker) wheelStart();
  return false;
}

function wheelStart() {
  marker = false;
  wheelAct();
}

function wheelAct() {
  counter2 = counter1;
  setTimeout(function() {
    if (counter2 == counter1) {
      wheelEnd();
    } else {
      wheelAct();
      /////////////
      wheeled(delta);
    }
  }, interval);
}

function wheelEnd() {
  marker = true,
    counter1 = 0,
    counter2 = 0;
  wheelEnded();
}