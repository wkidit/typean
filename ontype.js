function runTypingAnimation() {
  new TypeIt("#companionMethods", {
    speed: 50,
    waitUntilVisible: true,
    loop: true,
    freeze: true,
  })
    .type(".llfe", { delay: 300 })
    .move(-2)
    .delete(1)
    .type("i")
    .move(null, { to: "END" })
    .type(" { ")
    .break({ delay: 300 })
    .type("&nbsp;&nbsp;&nbsp;&nbsp;dispay: ")
    .move(-4)
    .type("l")
    .move(null, { to: "END" })
    .type(' "none";')
    .pause(500)
    .break({ delay: 500 })
    .type("}")
    .break({ delay: 500 })
    .break({ delay: 500 })
    .type("<em>- WKID</em>")
    .go();
}

// Run the typing animation when the DOM is ready
document.addEventListener("DOMContentLoaded", runTypingAnimation);
