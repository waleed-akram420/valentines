const yes = document.getElementById("yes");
const no = document.getElementById("no");
const result = document.getElementById("result");

let yesScale = 1;
let noScale = 1;
let noClickCount = 0;

const messages = [
  "Really?",
  "Come on…",
  "You sure? 🥹",
  "Fine, keep pressing!",
  "I give up… 😔",
  "No?"
];

yes.onclick = () => {
  result.textContent = "YAY 💕 You’re my Valentine!";

  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
};

no.onclick = () => {
  // Move & shrink NO button
  const x = Math.random() * 400 - 300;
  const y = Math.random() * 400 - 300;
  noScale = Math.max(0.1, noScale - 0.2);
  no.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;

  // Show next funny message
  result.textContent = messages[Math.min(noClickCount, messages.length - 1)];
  noClickCount++;

  // Grow YES button
  yesScale += 0.8;
  yes.style.transform = `scale(${yesScale})`;
};