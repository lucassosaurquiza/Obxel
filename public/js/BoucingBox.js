export function startBouncingBox() {
  const box = document.querySelector(".box");

  if (!box) return;

  const containerRect = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  let x = Math.random() * (containerRect.width - 50);
  let y = Math.random() * (containerRect.height - 50);
  let dx = 2;
  let dy = 2;
  const boxSize = 50;

  function updatePosition() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= containerRect.width - boxSize) {
      dx = -dx;
    }
    if (y <= 0 || y >= containerRect.height - boxSize) {
      dy = -dy;
    }

    box.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(updatePosition);
  }

  updatePosition();

  window.addEventListener("resize", () => {
    containerRect.width = window.innerWidth;
    containerRect.height = window.innerHeight;
  });
}
