function initPortfolio() {
  // 🟢 CHỈ XỬ LÝ CSS VÀ INIT, KHÔNG CAN THIỆP LOGIC FILTER
  
  const filterBtns = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  if (!filterBtns.length || !items.length) {
    console.warn("❌ Portfolio filter elements not found");
    return;
  }

  console.log("🎯 Initializing portfolio filter CSS...");

  // 🟢 ĐẢM BẢO TRANSITION SMOOTH CHO ITEMS
  items.forEach(item => {
    item.style.transition = "opacity 0.3s ease, transform 0.3s ease";
  });

  // 🟢 ĐẢM BẢO FILTER BUTTONS CÓ CURSOR POINTER
  filterBtns.forEach(btn => {
    btn.style.cursor = "pointer";
  });

  // 🟢 ĐẢM BẢO GRID LAYOUT HOẠT ĐỘNG TỐT
  const grid = document.querySelector(".portfolio-grid");
  if (grid) {
    grid.style.display = "grid";
    grid.style.gap = "1.5rem";
    grid.style.marginTop = "2rem";
  }

  console.log("✅ Portfolio filter CSS initialized");

  // 🧹 Cleanup đơn giản
  return () => {
    console.log("🧹 Portfolio filter cleanup");
    // Reset styles if needed
    items.forEach(item => {
      item.style.transition = "";
    });
    filterBtns.forEach(btn => {
      btn.style.cursor = "";
    });
  };
}

// 🟢 QUAN TRỌNG: Export mặc định
if (typeof module !== 'undefined' && module.exports) {
  module.exports = initPortfolio;
} else {
  window.initPortfolio = initPortfolio;
}