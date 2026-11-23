(() => {
  const THEME_KEY = "sayma-portfolio-theme";
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");

  // Theme initialization (Light default, remembers user preference)
  const storedTheme = localStorage.getItem(THEME_KEY);
  root.setAttribute("data-theme", storedTheme === "dark" ? "dark" : "light");

  const updateThemeButton = () => {
    if (!themeToggle) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode"
    );
  };

  updateThemeButton();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      updateThemeButton();
    });
  }

  // Highlight active section in the sidebar navigation
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".sidebar-nav a[href^='#']");

  if ("IntersectionObserver" in window && sections.length && navAnchors.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navAnchors.forEach((a) => {
              a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
            });
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
})();
