function initMain() {
  let lastScrollTop = 0;
  let ignoreScroll = false;

  const navbar = document.querySelector(".navbar");
  
  if (!navbar) {
    console.warn("❌ Navbar not found");
    return;
  }

  console.log("🎯 Initializing navbar scroll behavior...");

  const handleScroll = () => {
    if (ignoreScroll) return;

    const currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 100) {
      navbar.classList.add("nav-hidden");
    } else {
      navbar.classList.remove("nav-hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  window.addEventListener("scroll", handleScroll);
  
  console.log("✅ Navbar scroll behavior initialized");

  // 🧹 Cleanup
  return () => {
    console.log("🧹 Main cleanup");
    window.removeEventListener("scroll", handleScroll);
    navbar.classList.remove("nav-hidden");
  };
}

// 🟢 QUAN TRỌNG: Export mặc định
if (typeof module !== 'undefined' && module.exports) {
  module.exports = initMain;
} else {
  window.initMain = initMain;
}