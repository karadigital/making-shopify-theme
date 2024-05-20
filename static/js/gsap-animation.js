// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

mm.add({
  isMobile: "(max-width: 500px)",
  isDesktop: "(min-width: 501px)",
}, (context) => {
  let { isMobile, isDesktop } = context.conditions;

  if (isMobile) {
    // Define mobile-specific animations with ScrollTrigger properties
    console.log("is mobile");
    let tlMobile = gsap.timeline({
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: ".about__section",
        start: "top 15%",
        end: "top 10%",
        scrub: 1,
        pin: true,
        markers: false,
      }
    });

    tlMobile.from("#text-1", { xPercent: -50, opacity: 0 })
      .from("#text-2", { xPercent: 50, opacity: 0 }, 0);

  } else if(isDesktop) {
    console.log('is desktop');
    let tlDesktop = gsap.timeline({
      defaults: { duration: 0.5 },
      scrollTrigger: {
        trigger: ".about__section",
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      }
    });

    tlDesktop.from("#text-1", { xPercent: -50, opacity: 0 })
      .from("#text-2", { xPercent: 50, opacity: 0 }, 0);
  }
});

// GSAP ScrollTrigger animations for banner images with different y-translate values
const images = [
  { selector: ".banner-img__1", y: -50, scrub: 1 },
  { selector: ".banner-img__2", y: -100, scrub: 1 },
  { selector: ".banner-img__3", y: -150, scrub: 1 },
  { selector: ".banner-img__4", y: -400, scrub: 0.5 },
  { selector: ".banner-img__5", y: 0, scrub: 1 }
];

console.log("Script loaded");

// Add ScrollTrigger for banner images only on desktop
if (window.innerWidth >= 501) {
  images.forEach((image) => {
    gsap.fromTo(image.selector,
      { y: 0 },
      {
        y: image.y,
        scrollTrigger: {
          trigger: image.selector,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      }
    );
  });
}