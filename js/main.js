$(function () {
  $(".profit_item").click(function () {
    $(".profit_item")
      .removeClass("active")
      .eq($(this).index())
      .addClass("active");
  });

  /* ************** calculator select ******************* */
  $("select").each(function () {
    var $this = $(this),
      numberOfOptions = $(this).children("option").length;
    $this.addClass("select-hidden");
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');
    var $styledSelect = $this.next("div.select-styled");
    $styledSelect.text($this.children("option").eq(0).text());
    var $list = $("<ul />", {
      class: "select-options",
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
      $("<li />", {
        text: $this.children("option").eq(i).text(),
        rel: $this.children("option").eq(i).val(),
      }).appendTo($list);
    }
    var $listItems = $list.children("li");
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $("div.select-styled.active")
        .not(this)
        .each(function () {
          $(this).removeClass("active").next("ul.select-options").hide();
        });
      $(this).toggleClass("active").next("ul.select-options").toggle();
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass("active");
      $this.val($(this).attr("rel"));
      $list.hide();
    });
    $(document).click(function () {
      $styledSelect.removeClass("active");
      $list.hide();
    });
  });

  /* ************** calculator select ******************* */

  let link = $(".footer__menu a");
  link.on("click", function (e) {
    e.preventDefault();
    let selector = $(this).addClass("active").attr("href");
    let target = $(selector);
    $("html, body").animate({ scrollTop: target.offset().top - 120 }, 1000);
  });

  document.querySelector(".btn-back").addEventListener("click", function(){
    location.reload();
  })
  var swiper1 = new Swiper(".teamSwiper", {
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".team-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".team-button-next",
      prevEl: ".team-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
      991: {
        slidesPerView: 4.5,
        slidesPerGroup: 1,
      },
    },
  });

  var swiper2 = new Swiper(".portfolioSwiper", {
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".team-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".portfolio-button-next",
      prevEl: ".portfolio-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      767: {
        slidesPerView: 2.5,
        slidesPerGroup: 1,
      },
    },
  });
  var swiper3 = new Swiper(".reviewSwiper", {
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".team-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".review-button-next",
      prevEl: ".review-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 1.6,
        slidesPerGroup: 1,
      },
    },
  });

});
