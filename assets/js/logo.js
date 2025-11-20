function initLogo() {
  const logoImg = document.querySelector(".logo img");
  if (!logoImg) {
    console.warn("❌ Logo image not found");
    return;
  }

  console.log("🎯 Initializing logo hover effects...");

  const handleEnter = () => {
    logoImg.style.transition = "transform 0.3s ease";
    logoImg.style.transform = "rotate(-3deg) scale(1.05)";
  };

  const handleLeave = () => {
    logoImg.style.transform = "rotate(0deg) scale(1)";
  };

  logoImg.addEventListener("mouseenter", handleEnter);
  logoImg.addEventListener("mouseleave", handleLeave);

  console.log("✅ Logo hover effects initialized");

  // 🧹 Cleanup
  return () => {
    console.log("🧹 Logo cleanup");
    logoImg.removeEventListener("mouseenter", handleEnter);
    logoImg.removeEventListener("mouseleave", handleLeave);
    logoImg.style.transform = "";
    logoImg.style.transition = "";
  };
}

// 🟢 QUAN TRỌNG: Export mặc định
if (typeof module !== 'undefined' && module.exports) {
  module.exports = initLogo;
} else {
  window.initLogo = initLogo;
}