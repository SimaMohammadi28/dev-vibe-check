const moods = document.querySelectorAll(".mood");
const body = document.body;
const cta = document.querySelector(".cta");

let selectedMood = null;

const successSound = new Audio(
  "https://assets.mixkit.co/sfx/preview/mixkit-confirmation-tone-2867.mp3"
);

moods.forEach(mood => {
  mood.addEventListener("click", () => {
    moods.forEach(m => m.classList.remove("active"));
    body.className = "";

    mood.classList.add("active");
    selectedMood = mood.innerText.trim();

    if (mood.classList.contains("green")) body.classList.add("theme-green");
    if (mood.classList.contains("pink")) body.classList.add("theme-pink");
    if (mood.classList.contains("yellow")) body.classList.add("theme-yellow");
    if (mood.classList.contains("cyan")) body.classList.add("theme-cyan");

    clickSound.currentTime = 0;
    clickSound.play();
  });
});

cta.addEventListener("click", () => {
  if (!selectedMood) {
 
    cta.classList.add("shake");
    cta.innerText = "Choose a mood first 😅";

    setTimeout(() => {
      cta.classList.remove("shake");
      cta.innerText = "SHIP IT NOW 🚀";
    }, 1200);

    return;
  }

  successSound.currentTime = 0;
  successSound.play();

  cta.innerText = `Shipped in ${selectedMood} 🚀`;
  cta.classList.add("success");

  setTimeout(() => {
    cta.innerText = "SHIP IT NOW 🚀";
    cta.classList.remove("success");
  }, 2000);
});
