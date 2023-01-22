document.addEventListener(
  "scroll", _.throttle(() => {
    console.log("Scroll handler call every 300ms");
  }, 300)
);
