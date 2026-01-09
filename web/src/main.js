import "./style.css";

const header = document.querySelector("[data-elevate]");
const yearEl = document.querySelector("#year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function setHeaderElevated() {
  if (!header) return;
  const elevated = window.scrollY > 6;
  header.classList.toggle("is-elevated", elevated);
}

setHeaderElevated();
window.addEventListener("scroll", setHeaderElevated, { passive: true });

// Mobile nav
const toggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");

function closeNav() {
  if (!toggleBtn || !nav) return;
  toggleBtn.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
}

function openNav() {
  if (!toggleBtn || !nav) return;
  toggleBtn.setAttribute("aria-expanded", "true");
  nav.classList.add("is-open");
}

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = toggleBtn.getAttribute("aria-expanded") === "true";
    if (isOpen) closeNav();
    else openNav();
  });

  nav.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;
    if (target.tagName.toLowerCase() !== "a") return;
    closeNav();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  window.addEventListener("resize", () => {
    // ensure desktop layout doesn't keep stale open state
    if (window.innerWidth > 720) closeNav();
  });
}

