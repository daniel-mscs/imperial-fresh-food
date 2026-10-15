// ===== Config =====
const WHATSAPP_NUMBER = "5555991599416";
const WHATSAPP_MSG = "Olá! Vim pelo site e gostaria de fazer um pedido.";

// Links do WhatsApp
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
document.querySelectorAll(".js-whatsapp").forEach((el) => {
  el.href = waLink;
  el.target = "_blank";
  el.rel = "noopener";
});

// Header muda de cor ao rolar
const header = document.getElementById("header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menu mobile
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", open);
  header.classList.add("is-scrolled");
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    onScroll();
  })
);

// Animação de entrada
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// Balãozinho do WhatsApp
const bubble = document.getElementById("fabBubble");
const BUBBLE_SHOW = 3000;  // quanto tempo a frase fica na tela
const BUBBLE_PAUSE = 500;  // intervalo entre frases (TESTE) → depois troca pra 30000

const bubbleMsgs = [
  "Ficou com vontade? Faça seu pedido!",
  "Precisa de ajuda? Fala com a gente!",
  "Bateu a fome? A gente resolve!",
  "Que tal um suco natural agora?",
  "Um café fresquinho te esperando!",
  "Almoço saudável? Peça já!",
  "Opções veganas feitas no capricho!",
  "Vai fazer um evento? Chama a gente!",
  "Happy hour com a gente hoje?",
  "Comida fresca, feita na hora!",
];
let bubbleIndex = 0;

const cycleBubble = () => {
  bubble.textContent = bubbleMsgs[bubbleIndex];
  bubble.classList.add("is-visible");
  bubbleIndex = (bubbleIndex + 1) % bubbleMsgs.length;
  setTimeout(() => {
    bubble.classList.remove("is-visible");
    setTimeout(cycleBubble, BUBBLE_PAUSE);
  }, BUBBLE_SHOW);
};

setTimeout(cycleBubble, 3000);
