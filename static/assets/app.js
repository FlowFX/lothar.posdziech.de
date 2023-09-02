$(document).ready(function () {
  // masonry
  $(".grid").masonry({
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
  });

  // lightbox2
  lightbox.option({
    albumLabel: "Bild %1 von %2",
    fadeDuration: 300,
    imageFadeDuration: 50,
    resizeDuration: 100,
    wrapAround: true,
    alwaysShowNavOnTouchDevices: true,
    disableScrolling: true,
  });
});
