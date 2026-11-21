// ---------- Projects slider ----------
const track = document.querySelector(".project-track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// How far one click moves: one card's width plus the 24px gap
function getScrollAmount() {
  const card = track.querySelector(".project-card");
  return card.offsetWidth + 24;
}

// Move by exactly one card, even if you click quickly
function slide(direction) {
  const amount = getScrollAmount();
  const currentCard = Math.round(track.scrollLeft / amount);
  track.scrollTo({ left: (currentCard + direction) * amount });
}

nextBtn.addEventListener("click", () => slide(1));
prevBtn.addEventListener("click", () => slide(-1));

// Fade out an arrow when there is nothing more in that direction
function updateButtons() {
  const maxScroll = track.scrollWidth - track.clientWidth;
  prevBtn.disabled = track.scrollLeft <= 5;
  nextBtn.disabled = track.scrollLeft >= maxScroll - 5;
}

track.addEventListener("scroll", updateButtons);
window.addEventListener("resize", updateButtons);
updateButtons();
