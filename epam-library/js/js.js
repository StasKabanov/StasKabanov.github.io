document.addEventListener("DOMContentLoaded", function() {
  var aside_content = document.getElementById("aside__content").clientHeight;
  var main_content = document.getElementById("main_content");
  var wrapper = document.getElementById("wrapper");

  //console.log(wrapper.clientHeight);
  wrapper.style.minHeight = aside_content + 107 + "px";
  //console.log(wrapper.clientHeight);

  if (aside_content + 90 < document.documentElement.clientHeight) {
    main_content.style.maxHeight = "none";
    main_content.style.height =
      document.documentElement.clientHeight - 210 + "px";
    console.log("yes!");
  } else {
    console.log("no!");
    main_content.style.height = "auto";
    main_content.style.maxHeight = aside_content - 119 + "px";
  }

  /*----  button "add book" -----*/
  var add__book = document.getElementById("add__book");
  var popup = document.getElementById("popup");
  var popup__form__close = document.getElementById("popup__form__close");
  add__book.addEventListener("click", function() {
    console.log("add book");
    popup.style.display = "flex";
  });

  popup__form__close.addEventListener("click", function() {
    console.log("close popup");
    popup.style.display = "none";
  });
});

window.addEventListener("resize", function() {
  var wrapper = document.getElementById("wrapper");
  var main_content = document.getElementById("main_content");
  var main_container = document.getElementById("main_container");
  var aside_content = document.getElementById("aside__content").clientHeight;
  if (aside_content + 90 < document.documentElement.clientHeight) {
    main_content.style.maxHeight = "none";
    main_content.style.height =
      document.documentElement.clientHeight - 210 + "px";
    console.log("yes!");
  } else {
    console.log("no!");
    main_content.style.height = "auto";
    main_content.style.maxHeight = aside_content - 119 + "px";
  }
});

function getName(str) {
  if (str.lastIndexOf("\\")) {
    var i = str.lastIndexOf("\\") + 1;
  } else {
    var i = str.lastIndexOf("/") + 1;
  }
  var filename = str.slice(i);
  var uploaded = document.getElementById("add__file__form__label");
  uploaded.innerHTML = filename;
}
