const weddingDate = new Date("June 15, 2025 19:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${days} يوم - ${hours}:${minutes}:${seconds}`;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "تم الزفاف!";
  }
}, 1000);
