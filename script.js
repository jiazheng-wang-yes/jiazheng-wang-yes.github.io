const STORAGE_KEY = "jiazheng-theme-preference";
const buttons = Array.from(document.querySelectorAll("[data-theme-option]"));

const getSavedTheme = () => localStorage.getItem(STORAGE_KEY) || "auto";

const applyTheme = (theme) => {
  if (theme === "auto") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }

  buttons.forEach((button) => {
    const isActive = button.dataset.themeOption === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const theme = button.dataset.themeOption;
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  });
});

applyTheme(getSavedTheme());
