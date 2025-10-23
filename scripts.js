$(function () {
  const starTotal = 60;
  const $starsContainer = $("#stars");

  for (let i = 0; i < starTotal; i += 1) {
    const size = Math.random() * 2 + 1.5;
    const star = $("<span class='star'></span>");
    star.css({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      opacity: Math.random() * 0.8 + 0.2,
    });
    $starsContainer.append(star);
  }

  anime({
    targets: ".star",
    opacity: [0.2, 1],
    scale: [0.6, 1.2],
    easing: "easeInOutSine",
    duration: 2000,
    direction: "alternate",
    delay: anime.stagger(60),
    loop: true,
  });

  anime({
    targets: ".planet-one",
    translateY: ["-12px", "12px"],
    easing: "easeInOutSine",
    duration: 4000,
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: ".planet-two",
    translateX: ["-10px", "10px"],
    easing: "easeInOutSine",
    duration: 4200,
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: [".cloud-one", ".cloud-two"],
    translateX: function (_, i) {
      return i % 2 === 0 ? ["-40px", "40px"] : ["40px", "-40px"];
    },
    easing: "easeInOutSine",
    duration: 6000,
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: "#ufo",
    translateY: ["-20px", "10px"],
    rotate: ["-2deg", "2deg"],
    easing: "easeInOutSine",
    duration: 3200,
    direction: "alternate",
    loop: true,
  });

  anime({
    targets: ".ufo-light",
    opacity: [0.3, 0.8],
    scale: [0.8, 1.2],
    easing: "easeInOutSine",
    duration: 1800,
    direction: "alternate",
    loop: true,
  });
});
