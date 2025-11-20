function initServiceSlider() {
  // 🟢 CHỈ XỬ LÝ CSS VÀ INIT, KHÔNG CAN THIỆP LOGIC SLIDE
  
  const track = document.querySelector(".destinations-track");
  const items = document.querySelectorAll(".destination-item");
  const slider = document.querySelector(".destinations-slider");

  if (!track || !items.length || !slider) {
    console.warn("❌ Service slider elements not found");
    return;
  }

  console.log("🎯 Initializing service slider CSS...");

  // 🟢 ĐẢM BẢO TRANSITION SMOOTH
  track.style.transition = "transform 0.5s ease";

  // 🟢 ĐẢM BẢO ITEMS CÓ KÍCH THƯỚC ĐÚNG
  items.forEach(item => {
    item.style.flexShrink = "0";
    item.style.minWidth = "0"; // Quan trọng cho flexbox
  });

  // 🟢 ĐẢM BẢO SLIDER CONTAINER CÓ OVERFLOW HIDDEN
  slider.style.overflow = "hidden";
  slider.style.position = "relative";

  // 🟢 ĐẢM BẢO TRACK CÓ DISPLAY FLEX
  track.style.display = "flex";
  track.style.gap = "2rem";

  console.log("✅ Service slider CSS initialized");

  // 🧹 Cleanup đơn giản
  return () => {
    console.log("🧹 Service slider cleanup");
    // Reset styles if needed
    track.style.transition = "";
    track.style.gap = "";
    items.forEach(item => {
      item.style.flexShrink = "";
      item.style.minWidth = "";
    });
  };
}

// 🟢 QUAN TRỌNG: Export mặc định
if (typeof module !== 'undefined' && module.exports) {
  module.exports = initServiceSlider;
} else {
  window.initServiceSlider = initServiceSlider;
}