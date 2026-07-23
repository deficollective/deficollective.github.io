// main script
(function () {
  "use strict";

  // Mobile navigation
  // ----------------------------------------
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navOpenIcon = document.getElementById("show-button");
  const navCloseIcon = document.getElementById("hide-button");

  const setNavOpen = (isOpen) => {
    if (!navToggle) return;

    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation",
    );
    navMenu?.classList.toggle("hidden", !isOpen);
    navMenu?.classList.toggle("block", isOpen);
    navOpenIcon?.classList.toggle("hidden", isOpen);
    navOpenIcon?.classList.toggle("block", !isOpen);
    navCloseIcon?.classList.toggle("hidden", !isOpen);
    navCloseIcon?.classList.toggle("block", isOpen);
  };

  navToggle?.addEventListener("click", () => {
    setNavOpen(navToggle.getAttribute("aria-expanded") !== "true");
  });

  navMenu?.addEventListener("click", (event) => {
    if (event.target.closest("a") && window.innerWidth < 1024) {
      setNavOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      navToggle?.getAttribute("aria-expanded") === "true"
    ) {
      setNavOpen(false);
      navToggle.focus();
    }
  });

  window
    .matchMedia("(min-width: 1024px)")
    .addEventListener("change", () => setNavOpen(false));

  // Search dialog semantics
  // ----------------------------------------
  const searchModal = document.querySelector(".search-modal");
  const searchOpeners = document.querySelectorAll(
    '[data-target="search-modal"]',
  );
  const searchClosers = document.querySelectorAll(
    '[data-target="close-search-modal"]',
  );
  let lastSearchOpener;

  const setSearchOpen = (isOpen) => {
    if (!searchModal) return;

    searchModal.setAttribute("role", "dialog");
    searchModal.setAttribute("aria-modal", "true");
    searchModal.setAttribute("aria-hidden", String(!isOpen));
    searchModal.inert = !isOpen;
  };

  searchOpeners.forEach((opener) => {
    opener.addEventListener("click", () => {
      lastSearchOpener = opener;
      setSearchOpen(true);
    });
  });

  searchClosers.forEach((closer) => {
    closer.addEventListener("click", () => setSearchOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      searchModal?.getAttribute("aria-hidden") === "false"
    ) {
      setSearchOpen(false);
      lastSearchOpener?.focus();
    }

    if ((event.ctrlKey || event.metaKey) && event.key === "k") {
      requestAnimationFrame(() =>
        setSearchOpen(searchModal?.classList.contains("show")),
      );
    }
  });

  setSearchOpen(searchModal?.classList.contains("show"));

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("active");
    });
  });
})();
