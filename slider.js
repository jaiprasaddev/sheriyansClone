const track = document.querySelector(".slide-track");
const slides = Array.from(track.children);
let speed = 1.4; // adjust for faster/slower scroll
let x = 0;

// Duplicate once so we have buffer
slides.forEach(slide => {
  const clone = slide.cloneNode(true);
  track.appendChild(clone);
});

function animate() {
  x -= speed;

  // when first image fully leaves viewport, move it to the end
  const first = track.children[0];
  const firstWidth = first.getBoundingClientRect().width + 64; // image width + gap (4rem=64px)

  if (Math.abs(x) >= firstWidth) {
    track.appendChild(first);
    x += firstWidth; // adjust position instantly (no visual reset)
  }

  track.style.transform = `translateX(${x}px)`;
  requestAnimationFrame(animate);
}

animate();
