const btn = document.getElementById("change-btn");
const message = document.getElementById("message");

const messages = [
  "안녕하세요! 😊",
  "오늘도 좋은 하루 되세요 🌞",
  "Welcome Back! 👋",
  "행복한 순간이 가득하길 💖",
  "Let's Shine Together ✨"
];

let index = 0;

btn.addEventListener("click", () => {
  index = (index + 1) % messages.length;
  message.textContent = messages[index];

  // 애니메이션 효과
  message.style.transform = "scale(1.2)";
  message.style.opacity = "0.6";

  setTimeout(() => {
    message.style.transform = "scale(1)";
    message.style.opacity = "1";
  }, 300);
});
