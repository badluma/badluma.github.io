const sections = ["heading", "comprobot", "hackertyper", "socials"];
let current = 0;

function handleKey(key: string) {
  const upKeys = ["ArrowUp", "w", "W", "e", "E"];
  const downKeys = ["ArrowDown", "s", "S", "d", "D", "Enter", " "];

  if (upKeys.includes(key)) {
    if (current > 0) {
      current--;
    } else return;
  } else if (downKeys.includes(key)) {
    if (current < sections.length - 1) {
      current++;
    } else return;
  }

  const sectionId = sections[current];
  if (!sectionId) return;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const navKeys = ["ArrowUp", "ArrowDown", "w", "W", "s", "S", "d", "D", "e", "E", " ", "Enter"];

document.addEventListener("keydown", (e) => {
  if (navKeys.includes(e.key)) e.preventDefault();
  handleKey(e.key);
});

let wheelLocked = false;

document.addEventListener("wheel", (direction) => {
  direction.preventDefault();
  if (wheelLocked) return;
  wheelLocked = true;
  setTimeout(() => (wheelLocked = false), 800);
  if (direction.deltaY > 0) {
    handleKey("ArrowDown");
  } else if (direction.deltaY < 0) {
    handleKey("ArrowUp");
  }
}, { passive: false });
