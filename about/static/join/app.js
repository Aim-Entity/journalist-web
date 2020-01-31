let btn = document.querySelector(".btn");

btn.addEventListener("mouseenter", e => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: ".btn",
      width: ["300px", "700px"],
      left: ["500px", "300px"],
      backgroundColor: ["rgba(23, 185, 120, 0.9)", "hsl(0, 0%, 100%)"],
      color: ["hsl(0, 0%, 100%)", "hsl(0, 0%, 0%)"],
      duration: 500
    });
});

btn.addEventListener("mouseleave", e => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    .add({
      targets: ".btn",
      width: ["700px", "300px"],
      left: ["300px", "500px"],
      backgroundColor: ["hsl(0, 0%, 100%)", "rgba(23, 185, 120, 0.9)"],
      color: ["hsl(0, 0%, 0%)", "hsl(0, 0%, 100%)"],
      duration: 500
    });
});
