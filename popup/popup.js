// Botó d'opcions: quan es fa clic, s’obre la pàgina d’opcions de l’extensió
document.getElementById('open-options').addEventListener('click', () => {
  browser.runtime.openOptionsPage();
});

let bitSize = 40;     // Mida de cada quadrat (bit)
let cnv;
let bitColor;         // Color dels bits actius (1)
let digitalClock;     // Variable per determinar si es mostra l’hora digital
let date;

function setup() {
  // Obté les opcions desades: color del bit i si s'ha de mostrar o no el rellotge digital
  bitColor = getItem('bitColorPicker') || "#5a96ff";
  digitalClock = getItem('mostrarHora') ?? 'true';

  // Creem el canvas i l’afegim dins del contenidor HTML
  cnv = createCanvas(200, 300);
  cnv.parent("canvas-wrapper");
}

function draw() {
  background(30);
  stroke(30);
  strokeWeight(2.25);

  // Convertim hora, minuts i segons a binari i assegurem 6 dígits per cada un
  let bh = nf(hour().toString(2), 6);
  let bm = nf(minute().toString(2), 6);
  let bs = nf(second().toString(2), 6);

  let cols = [bh, bm, bs];  // Columnes del rellotge: hores, minuts i segons

  // Càlcul per centrar el conjunt de bits dins del canvas
  let totalW = cols.length * bitSize;
  let startX = width / 2 - totalW / 2;
  let startY = height / 2 - (6 * bitSize) / 1.78;

  // Dibuixa cada columna (hores/minuts/segons) i cada bit dins d’elles
  for (let c = 0; c < cols.length; c++) {
    for (let r = 0; r < cols[c].length; r++) {
      let bit = cols[c][r];

      // Si el bit és 1, s’utilitza el color personalitzat; si és 0, gris fosc
      fill(bit === "1" ? bitColor : 60);
      // Dibuixa el quadrat corresponent
      rect(startX + c * bitSize, startY + r * bitSize, bitSize, bitSize, 4);
    }
  }

  // Si l’opció està activada, mostra l’hora digital sota del rellotge binari
  if (digitalClock == 'true') {
  
    // Recull l'hora actual en format de 24 hores
    date = new Date().toLocaleTimeString('es-ES', { hour12: false });

    fill(255);
    textSize(21);
    text(date, 40, 288);
  }
}
