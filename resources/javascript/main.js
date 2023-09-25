function toggleNav() {
    var x = document.querySelector(".mobile__nav__list");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }