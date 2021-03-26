// Dependencias
const $ = require("jquery");

// Variables
const scrollTime = 1000;
const shrinkPosition = 100;

// Smooth Scrolling
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      let target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          scrollTime
        );
        return false;
      }
    }
  });
});

// Shrink Nav
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= shrinkPosition) {
      $(".nav-bar").addClass("scrolled");
    } else {
      $(".nav-bar").removeClass("scrolled");
    }
  });
});

// Dynamic Nav Color
$(document).ready(function () {

  // Obtener el listado de elementos en el menú de navegación
  let navElements = $(".nav-links li").children();

  // Array de atributos href
  let aArray = [];

  // Poblar array de atributos
  for (let i = 0; i < navElements.length; i++) {
    let navElement = navElements[i];
    let ahref = $(navElement).attr("href");
    aArray.push(ahref);
  }

  $(window).scroll(function () {
    // Obtener el offset desde el top de la página
    let windowPosition = $(window).scrollTop();

    // Obtener el alto de la ventana y el documento
    let windowHeight = $(window).height();
    let docHeight = $(document).height();

    // Recorrer el array de atributos
    for (let i = 0; i < aArray.length; i++) {

      // Obtener ID
      let theID = aArray[i];

      console.log(aArray);

      // ----------------- Esto funciona ----------------- 
      let test = $('#services').offset().top
      console.log(test);

      // ----------------- Esto no. Porque ????? ----------------- 

      // Obtener posición de la sección con el mismo ID
      let divPos = $(theID).offset().top
      console.log(divPos);

      // Obtener el alto del ID
      let divHeight = $(theID).height()


      if (windowPosition >= divPos && windowPosition < divPos + divHeight) {
        $(".nav-link a[href='" + theID + "']").addClass("active");
      } else {
        $(".nav-link a[href='" + theID + "']").removeClass("active");
      }
    }

    if (windowPosition + windowHeight === docHeight) {
      if (!$("nav li:last-child a").hasClass("active")) {
        let navActiveCurrent = $(".active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("active");
        $("nav li:last-child a").addClass("active");
      }
    }
  });
});
