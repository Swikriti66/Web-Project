const sections = document.querySelectorAll(".section");
let drag = false;

document.addEventListener("mousedown", () => drag = true);
document.addEventListener("mouseup", () => drag = false);

sections.forEach(s => {
  const text = s.textContent;

  s.addEventListener("mouseenter", () => {
    if (!drag) return;

    sections.forEach(x => {
      x.style.backgroundColor = "white";
      x.classList.remove("active");
      x.textContent = x.dataset.text;
    });

    s.style.backgroundColor = s.dataset.color;
    s.style.cursor = s.dataset.cursor;
    s.classList.add("active");
    s.textContent = "Interacting";
  });

  s.dataset.text = text;
});
