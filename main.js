// Animations

let tl = gsap.timeline();

const page1Animation = () => {
  tl.from("nav h1, nav h4, nav button", {
    y: -20,
    opacity: 0,
    delay: 0.5,
    duration: 0.7,
    stagger: 0.15,
  });

  tl.from(
    ".center-part1 h1",
    {
      x: -50,
      opacity: 0,
      duration: 0.6,
    },
    "-=0.3"
  );

  tl.from(".center-part1 p", {
    x: -40,
    opacity: 0,
    duration: 0.5,
  });

  tl.from(".center-part1 button", {
    opacity: 0,
    duration: 0.5,
  });

  tl.from(
    ".center-part2 img",
    {
      x: 40,
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from(".brands img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 0.6,
  });
};

page1Animation();

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section2",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top -60%",
    scrub: 2,
  },
});

tl2.from(".services-heading", {
  y: 30,
  opacity: 0,
  duration: 0.5,
});

tl2.from(
  ".elem1.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim1"
);

tl2.from(
  ".elem2.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim1"
);

tl2.from(
  ".elem2.left",
  {
    x: -300,
    opacity: 0,
    duration: 1,
  },
  "anim2"
);

tl2.from(
  ".elem1.right",
  {
    x: 300,
    opacity: 0,
    duration: 1,
  },
  "anim2"
);
