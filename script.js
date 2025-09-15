document.addEventListener("DOMContentLoaded", () => {
  // 💌 Carta romántica
  const carta = document.getElementById("carta");
  const papel = document.getElementById("papel");

  const poemas = [
    `"Desde que te vi, supe que el tiempo tenía sentido."`,
    `"Tus ojos son el refugio donde mi alma descansa."`,
    `"Si el amor fuera un verso, tú serías mi poema eterno."`,
    `"Cada latido mío lleva tu nombre como melodía."`
  ];

  let indexPoema = 0;
  let abierta = false;

  carta.addEventListener("click", () => {
    abierta = !abierta;

    if (abierta) {
      carta.classList.add("abierta");
      papel.innerText = poemas[indexPoema];
      papel.style.opacity = "1";
      indexPoema = (indexPoema + 1) % poemas.length;
    } else {
      carta.classList.remove("abierta");
      papel.style.opacity = "0";
    }
  });

  // 🎞️ Carrusel de imágenes con flechas e indicadores
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  const flechaIzq = document.querySelector(".flecha.izq");
  const flechaDer = document.querySelector(".flecha.der");
  let currentSlide = 0;

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  flechaIzq?.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    mostrarSlide(currentSlide);
  });

  flechaDer?.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    mostrarSlide(currentSlide);
  });

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    mostrarSlide(currentSlide);
  }, 5000); // cambia cada 5 segundos
});

// SECCION FINAL -------------
document.getElementById("boton-corazon").addEventListener("click", () => {
  const estilos = [
    "❤️", "💖", "💕", "💘", "💝", "❣️", "💞"
  ];

  for (let i = 0; i < 80; i++) {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon-lluvia");
    corazon.innerText = estilos[Math.floor(Math.random() * estilos.length)];

    // Posición y estilo aleatorio
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 2 + 1.2) + "rem";
    corazon.style.animationDuration = (Math.random() * 2 + 3) + "s";
    corazon.style.opacity = Math.random() * 0.8 + 0.3;
    corazon.style.filter = "drop-shadow(0 0 6px #ffb6c1)";
    corazon.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 6000);
  }
});


