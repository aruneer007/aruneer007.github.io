document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const bentoGrid = document.querySelector(".bento-grid");

  bentoGrid.onmousemove = (e) => {
    for (const card of cards) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  // Optional: Add simple tilt effect logic if desired, or stick to the glow effect
  // This block implements a lightweight tilt
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      if (window.innerWidth < 900) return; // Disable on mobile

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -2; // Max rotation deg
      const rotateY = ((x - centerX) / centerX) * 2;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
});
