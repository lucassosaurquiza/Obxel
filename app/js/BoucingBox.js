// Clase Box que representa una caja en movimiento en el canvas.
class Box {
  constructor(x, y, dx, dy, size, ctx) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.fillStyle = "#11e096";
    this.ctx.globalAlpha = 0.5;
    this.ctx.fillRect(this.x, this.y, this.size, this.size);
  }

  update(canvasWidth, canvasHeight) {
    if (this.x + this.size > canvasWidth || this.x < 0) {
      this.dx = -this.dx; // Rebote horizontal
    }
    if (this.y + this.size > canvasHeight || this.y < 0) {
      this.dy = -this.dy; // Rebote vertical
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw(); // Volver a dibujar la caja en la nueva posición
  }
}

// Clase Animation que maneja la inicialización y animación de las cajas.
export class Animation {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.boxes = [];
    this.init(); // Inicializa las cajas
    this.animate(); // Comienza el ciclo de animación
  }

  init() {
    for (let i = 0; i < 10; i++) {
      const size = 10;
      const x = Math.random() * (this.canvas.width - size);
      const y = Math.random() * (this.canvas.height - size);
      const dx = Math.random() < 0.5 ? 1 : -1; // Direcciones aleatorias
      const dy = Math.random() < 0.5 ? 1 : -1;
      this.boxes.push(new Box(x, y, dx, dy, size, this.ctx));
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpiar el canvas
    this.boxes.forEach((box) => box.update(this.canvas.width, this.canvas.height)); // Actualizar y dibujar cada caja
    requestAnimationFrame(() => this.animate()); // Solicitar el siguiente frame
  }
}
