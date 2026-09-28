(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  var label = button.querySelector(".theme-toggle-label");
  var media = window.matchMedia("(prefers-color-scheme: dark)");

  function getStored() {
    try {
      var t = localStorage.getItem(STORAGE_KEY);
      return t === "light" || t === "dark" ? t : null;
    } catch (e) {
      return null;
    }
  }

  function setStored(mode) {
    try {
      if (mode) {
        localStorage.setItem(STORAGE_KEY, mode);
      } else {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch (e) {}
  }

  function render(mode) {
    var effective = mode || (media.matches ? "dark" : "light");
    if (mode) {
      root.setAttribute("data-theme", mode);
    } else {
      root.removeAttribute("data-theme");
    }
    button.setAttribute("data-effective", effective);
    var text = mode === "light" ? "Light" : mode === "dark" ? "Dark" : "System";
    label.textContent = text;
    button.setAttribute("aria-label", "Color theme: " + text + ". Click to change.");
  }

  var current = getStored();
  render(current);

  button.addEventListener("click", function () {
    current = current === null ? "light" : current === "light" ? "dark" : null;
    setStored(current);
    render(current);
  });

  media.addEventListener("change", function () {
    if (!getStored()) render(null);
  });
})();
