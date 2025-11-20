function initHeroSlide() {
  // 🟢 CHỈ XỬ LÝ CSS VÀ HIỆU ỨNG, KHÔNG CAN THIỆP LOGIC SLIDE
  
  const slides = document.querySelectorAll(".slide");
  const container = document.querySelector(".slides-container");
  
  if (!slides.length || !container) {
    console.warn("❌ Hero slide elements not found");
    return;
  }

  console.log("🎯 Initializing hero slide CSS...");

  // 🟢 ĐẢM BẢO ẢNH NỀN HIỂN THỊ ĐÚNG
  slides.forEach((slide) => {
    const bgImage = slide.style.backgroundImage;
    if (!bgImage || bgImage === 'none') {
      // Fallback: thử lấy từ data attribute hoặc inline style
      const dataBg = slide.getAttribute("data-bg");
      if (dataBg) {
        slide.style.backgroundImage = `url(${dataBg})`;
        slide.style.backgroundSize = "cover";
        slide.style.backgroundPosition = "center";
        slide.style.backgroundRepeat = "no-repeat";
      }
    }
  });

  // 🟢 ĐẢM BẢO CONTAINER CÓ ĐỘ RỘNG ĐÚNG
  container.style.width = `${slides.length * 100}%`;

  // 🟢 THÊM HIỆU ỨNG SMOOTH CHO SLIDE CONTAINER
  container.style.transition = "transform 0.8s ease-in-out";

  console.log("✅ Hero slide CSS initialized");

  // 🧹 Cleanup đơn giản
  return () => {
    console.log("🧹 Hero slide cleanup");
    // Reset styles if needed
    container.style.transition = "";
    container.style.width = "";
  };
}

// 🟢 QUAN TRỌNG: Export mặc định
if (typeof module !== 'undefined' && module.exports) {
  module.exports = initHeroSlide;
} else {
  window.initHeroSlide = initHeroSlide;
}