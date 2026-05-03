const CONFIG_FILE = "whatsapp-link.json";
const DEFAULT_WHATSAPP_LINK = "https://chat.whatsapp.com/KsbxWY1gZYUJezhYBTcQSw?mode=gi_t";
const THEME_STORAGE_KEY = "high-posting-jobs-theme";

function getStoredTheme() {
  const saved = localStorage.getItem(THEME_STORAGE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle("dark", theme === "dark");

  const toggle = document.querySelector("#theme-toggle");
  const label = toggle?.querySelector(".theme-toggle__label");
  if (toggle) {
    toggle.setAttribute("aria-label", `Switch to ${theme === "dark" ? "light" : "dark"} mode`);
  }
  if (label) {
    label.textContent = theme === "dark" ? "Dark mode" : "Light mode";
  }
}

function toggleTheme() {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_STORAGE_KEY, next);
  applyTheme(next);
}

async function loadWhatsappLink() {
  const action = document.querySelector("#cta-action");
  if (!action) return;

  let url = DEFAULT_WHATSAPP_LINK;
  try {
    const response = await fetch(CONFIG_FILE, { cache: "no-store" });
    if (response.ok) {
      const data = await response.json();
      if (data?.whatsappLink) {
        url = data.whatsappLink;
      }
    }
  } catch (error) {
    console.warn("Unable to load WhatsApp link:", error);
  }

  action.href = url;
}

function typeText(element, text, speed = 50, callback) {
  let i = 0;
  element.textContent = '';
  const timer = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

function deleteText(element, speed = 50, callback) {
  const timer = setInterval(() => {
    element.textContent = element.textContent.slice(0, -1);
    if (element.textContent === '') {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}

function startTypewriterAnimation() {
  const h1 = document.querySelector('h1');
  if (!h1) return;

  const originalText = 'Start Earning Good Money With High Digital Skills…';
  const newText = 'Get paid at the comfort of your home';

  function loop() {
    // Start by typing original
    typeText(h1, originalText, 50, () => {
      // Wait 6 seconds, then delete
      setTimeout(() => {
        deleteText(h1, 50, () => {
          // Type new text
          typeText(h1, newText, 50, () => {
            // Wait 6 seconds, then delete
            setTimeout(() => {
              deleteText(h1, 50, () => {
                // Loop back
                loop();
              });
            }, 3000);
          });
        });
      }, 3000);
    });
  }

  // Clear initial text and start
  h1.textContent = '';
  loop();
}

function attachThemeToggle() {
  const button = document.querySelector("#theme-toggle");
  if (!button) return;
  button.addEventListener("click", toggleTheme);
}

function initPage() {
  applyTheme(getStoredTheme());
  attachThemeToggle();
  loadWhatsappLink();
  startTypewriterAnimation();
}

document.addEventListener("DOMContentLoaded", initPage);
