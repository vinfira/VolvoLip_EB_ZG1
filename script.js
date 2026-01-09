// Farbwechsel für das große Produktbild (Variant Section)

const swatches = document.querySelectorAll(".swatch");
const variantImage = document.getElementById("variant-image");

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    // Alle Swatches deaktivieren
    swatches.forEach((s) => s.classList.remove("is-active"));
    
    // Geklickte Swatch aktivieren
    swatch.classList.add("is-active");

    // Bild basierend auf Farbe wechseln
    const color = swatch.dataset.color;

    if (color === "rose") {
      variantImage.src = "images/eisblockbearbeitetrose.png";
    } else if (color === "nude") {
      variantImage.src = "images/eisblockgold.png";
    } else if (color === "clear") {
      variantImage.src = "images/eisblockbearbeitet.png";
    }
  });
});