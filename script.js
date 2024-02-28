function loader() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    duration: 0.3,
    delay: 0.5,
    ease: "expo.out"
  })
  tl.from("#yellow2", {
    top: "100%",
    duration: 0.3,
    delay: 0.5,
    ease: "expo.out"
  }, "anim")
  tl.from("#loader h1", {
    delay: 0.2,
    duration: 0.3,
    color: "black"
  }, "anim")
  tl.to("#loader", {
    display: "none"
  });
};
loader();


window.addEventListener("load", function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  // elem = document.querySelector("#page2");
  // var updateCalled = false;
  // scroll.on("scroll", (instance) => {
  //   if (!updateCalled && instance.scroll.y > elem.getBoundingClientRect().bottom) {
  //     scroll.update();
  //     updateCalled = true;
  //   }
  // });
});


var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elems.forEach(function (ele) {
  ele.addEventListener("mouseenter", function (e) {
    var bgimg = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgimg})`;
  });
  ele.addEventListener("mouseleave", function (e) {
    page2.style.backgroundImage = "none";
  });
})
