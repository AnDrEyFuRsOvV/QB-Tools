$(document).ready(function () {
  // Toggle dropdown visibility and update selected item
  $(".header__lang").click(function () {
    $(".header__lang-list").toggleClass("open");
    $(".header__selected-img").toggleClass("rotate");
  });

  // Close dropdown and update selected item
  $(".header__lang-item").click(function () {
    var selectedItem = $(this).text();
    $(".header__selected-item").text(selectedItem);
    $(".header__lang-list").removeClass("open");
    $(".header__selected-img").removeClass("rotate");
  });
});
