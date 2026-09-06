document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const bentoGrid = document.querySelector(".bento-grid");

    if (!bentoGrid) return;

    /* Mouse glow position */
    bentoGrid.addEventListener("mousemove", (event) => {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        });
    });

    /* Lightweight desktop tilt */
    cards.forEach((card) => {
        card.addEventListener("mousemove", (event) => {
            if (window.innerWidth < 900) return;

            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -1.8;
            const rotateY = ((x - centerX) / centerX) * 1.8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
});
