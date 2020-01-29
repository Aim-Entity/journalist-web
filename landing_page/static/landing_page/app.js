document.addEventListener("DOMContentLoaded", e => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })
    // Start of base code
    .add({
      targets: ".base-logo",
      translateX: ["-300px", "0px"],
      rotate: { value: "2turn" },
      duration: 1000
    })

    .add({
      targets: ".base-ul",
      opacity: [0, 1],
      duration: 500
    })
    // End of base code

    .add({
      targets: ".base-hero",
      translateX: ["-600px", "0"],
      duration: 750
    })

    .add({
      targets: ".info",
      opacity: [0, 1],
      duration: 450
    })

    .add({
      targets: ".lime-circ",
      opacity: [0, 1],
      duration: 10000
    });
});

document.querySelector(".btn").addEventListener("mouseover", e => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })

    .add({
      targets: ".btn",
      backgroundColor: ["hsl(225, 84%, 17%)", "hsl(0, 0%, 87%)"],
      width: ["100px", "150px"],
      duration: 200
    });
});

document.querySelector(".btn").addEventListener("mouseleave", e => {
  anime
    .timeline({
      easing: "easeOutExpo"
    })

    .add({
      targets: ".btn",
      backgroundColor: ["hsl(0, 0%, 87%)", "hsl(225, 84%, 17%)"],
      width: ["150px", "100px"],
      duration: 200
    });
});
