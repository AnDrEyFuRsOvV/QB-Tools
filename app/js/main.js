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

$(document).ready(function () {
  // Add submit event listener to the form
  $(".top__form").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Perform your desired actions here

    // Optionally, you can manually submit the form using jQuery if needed
    // $(this).submit();
  });
});
