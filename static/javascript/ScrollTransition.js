function checkForVisibility() {
  var scroll = document.querySelectorAll(".onScroll");
  scroll.forEach(function(scrollElement) {
    if (isElementInViewport(scrollElement)) {
      scrollElement.classList.add("onScrollVisible");
    } else {
      scrollElement.classList.remove("onScrollVisible");
    }
  });
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  console.log(rect)

  return(rect.y <= 191);

  // return (
  //   rect.top >= 0 &&
  //   rect.left >= 0 &&
  //   rect.bottom <=
  //     (window.innerHeight || document.documentElement.clientHeight) &&
  //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  // );
}

if (window.addEventListener) {
  addEventListener("DOMContentLoaded", checkForVisibility, false);
  addEventListener("load", checkForVisibility, false);
  addEventListener("scroll", checkForVisibility, false);
}
