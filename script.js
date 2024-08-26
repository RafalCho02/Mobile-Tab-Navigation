$(document).ready(function () {
  const $contents = $(".content");
  const $listItems = $("nav ul li");

  $listItems.each(function (idx) {
    $(this).on("click", function () {
      hideAllContents();
      hideAllItems();

      $(this).addClass("active");
      $contents.eq(idx).addClass("show");
    });
  });

  function hideAllContents() {
    $contents.removeClass("show");
  }

  function hideAllItems() {
    $listItems.removeClass("active");
  }
});
