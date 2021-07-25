$(function () {
  $("#simpleForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#simpleForm").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formMain").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formMain").serialize();
      $.ajax({
        url: "calculator.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formMain3").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formMain3").serialize();
      $.ajax({
        url: "calculator.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#calc-form").hide();
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formMain4").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formMain4").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#modal-form").hide();
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formMain5").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formMain5").serialize();
      $.ajax({
        url: "review.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#popup_reviews").hide();
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#formMain6").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formMain6").serialize();
      $.ajax({
        url: "document.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $("#document-form").hide();
            $.fancybox.open({
              href: "javascript:;",
              src: "#preorder_window_thank",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
});
