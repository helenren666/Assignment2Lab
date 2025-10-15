// filter.js
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("filter-select");
  const cards = document.querySelectorAll(".song-card");

  select.addEventListener("change", () => {
    const filter = select.value;

    cards.forEach((card) => {
      if (filter === "all" || card.dataset.type === filter) {
        card.style.display = "flex";
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      } else {
        card.style.opacity = "0";
        card.style.transform = "scale(0.9)";
        setTimeout(() => (card.style.display = "none"), 200);
      }
    });
  });
});
