function mousePointer() {
    var videocon = document.querySelector("body");
    var crs = document.querySelector(".crs");
  
    videocon.addEventListener("mouseenter", function () {
      gsap.to(crs, {
        scale: 1,
        opacity: 0.7,
      });
    });
  
    videocon.addEventListener("mouseleave", function () {
      gsap.to(crs, {
        scale: 0,
        opacity: 0,
      });
    });
  
    //distance of the circle from the crs
    videocon.addEventListener("mousemove", function (dets) {
      gsap.to(crs, {
        left: dets.x - 10,
        top: dets.y - 10
      });
    });
  }
  mousePointer(); 
  
  function loadingAnimation() {
      gsap.from("#hero h1", {
        y: 100, 
        opacity: 0,
        delay: 0.1,
        duration: 0.3,
        stagger: 0.3,
      });
      gsap.from("#hero p", {
          y: 100, 
          opacity: 0,
          delay: 0.1,
          duration: 0.3,
          stagger: 0.3,
        });
  }
  loadingAnimation();