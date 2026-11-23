(() => {
  const THEME_KEY = "sayma-portfolio-theme";
  const root = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const copyBtn = document.getElementById("copy-email-btn");

  // 1. Theme initialization (Light default, remembers user preference)
  const storedTheme = localStorage.getItem(THEME_KEY);
  root.setAttribute("data-theme", storedTheme === "dark" ? "dark" : "light");

  const updateThemeAria = () => {
    if (!themeToggle) return;
    const isDark = root.getAttribute("data-theme") === "dark";
    const label = isDark ? "Switch to light mode" : "Switch to dark mode";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("title", label);
  };

  updateThemeAria();

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem(THEME_KEY, next);
      updateThemeAria();
    });
  }

  // 2. One-click Copy Email button
  if (copyBtn) {
    let copyTimer;
    const labelSpan = copyBtn.querySelector("span");

    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.getAttribute("data-email");
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
      } catch {
        const temp = document.createElement("textarea");
        temp.value = email;
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
      }

      copyBtn.classList.add("copied");
      if (labelSpan) labelSpan.textContent = "Copied";
      clearTimeout(copyTimer);
      copyTimer = setTimeout(() => {
        copyBtn.classList.remove("copied");
        if (labelSpan) labelSpan.textContent = "Copy";
      }, 2000);
    });
  }

  // 3. Active sidebar section highlight on scroll
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
      { rootMargin: "-18% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
})();
