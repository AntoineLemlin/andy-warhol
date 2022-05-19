document.addEventListener("DOMContentLoaded", () => {
  let controller = new ScrollMagic.Controller({ refreshInterval: 1 });

  // FrontPage Animations

  let timeline = new TimelineMax();
  timeline
    .to(
      ".first-section",
      1,
      {
        backgroundColor: "rgb(233, 71, 50)",
        ease: Power3.easeInOut,
      },
      0
    )
    .to(
      "h1",
      1,
      {
        color: "white",
        ease: Power3.easeInOut,
      },
      0
    )
    .to(
      ".first-section, .red-line",
      1,
      {
        backgroundColor: "rgb(242, 215, 11)",
        ease: Power3.easeInOut,
      },
      1
    )
    .to(
      "h1",
      1,
      {
        color: "rgba(79, 81, 194, 1)",
        ease: Power3.easeInOut,
      },
      1
    )
    .to(
      ".first-section, .yellow-line, .red-line",
      1,
      {
        backgroundColor: "rgb(51, 126, 248)",
        ease: Power3.easeInOut,
      },
      2
    )
    .to(
      "h1",
      1,
      {
        color: "rgba(254, 168, 221, 1)",
        ease: Power3.easeInOut,
      },
      2
    )
    .to(
      ".first-section, .yellow-line, .red-line, .blue-line",
      1,
      {
        backgroundColor: "#f1f1f1",
        ease: Power3.easeInOut,
      },
      3
    )
    .to(
      "h1",
      1,
      {
        color: "black",
        ease: Power3.easeInOut,
      },
      3
    );

  let scene = new ScrollMagic.Scene({
    triggerElement: ".first-section",
    duration: "100%",
    triggerHook: 0,
    offset: "0",
  })
    .setTween(timeline)
    .setPin(".first-section")
    .addTo(controller);

  // Who was Andy Warhol Animations

  let timelineDescription = new TimelineMax();

  timelineDescription.to(".image-container", 5, {
    y: -1320,
  });

  let scene2 = new ScrollMagic.Scene({
    triggerElement: ".third-section",
    duration: "100%",
    triggerHook: 0,
    offset: "0",
  })
    .setTween(timelineDescription)
    .setPin(".third-section")
    .addTo(controller);

  // Early life title animations

  let timelineEarlyLife = new TimelineMax();

  timelineEarlyLife
    .from(
      ".early-life-title",
      3,
      {
        x: window.innerWidth,
      },
      0
    )
    .from(
      ".early-life-title",
      3,
      {
        scale: 0.7,
      },
      1
    );

  let scene3 = new ScrollMagic.Scene({
    triggerElement: ".fifth-section",
    duration: "100%",
    triggerHook: 0,
    offset: "0",
  })
    .setTween(timelineEarlyLife)
    .setPin(".fifth-section")
    .addTo(controller);

  // Warhola animation

  let timelineWarhola = new TimelineMax();

  timelineWarhola
    .to(
      ".warhola",
      2,
      {
        rotation: 180,

        ease: Power3.easeInOut,
      },
      0
    )
    .to(
      ".warhola",
      2,
      {
        x: window.innerWidth,
        y: -500,

        ease: Power3.easeInOut,
      },
      0.2
    )
    .to(
      ".name",
      2,
      {
        x: 20,
      },
      1
    );

  let scene4 = new ScrollMagic.Scene({
    triggerElement: ".warhol",
    duration: "100%",
    triggerHook: 0,
    offset: "0",
  })
    .setTween(timelineWarhola)
    .setPin(".warhol")
    .addTo(controller);
});
