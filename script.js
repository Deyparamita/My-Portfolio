var icon = document.getElementById("icon");
icon.onclick = function() {
  document.body.classList.toggle("light-theme");
  if (document.body.classList.contains("light-theme")) {
    icon.classList.remove("fa-regular", "fa-sun");
    icon.title="Click for dark mode";
    icon.classList.add("fa-regular", "fa-moon");
  } 
  else {
    icon.classList.remove("fa-regular", "fa-moon");
    icon.classList.add("fa-regular", "fa-sun");
    icon.title="Click for light mode";
  }
}

var sidemenu = document.getElementById("sidemenu");

function openmenu()
{
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-200px";
}

     var titleslist = document.getElementsByClassName("titles-list");
      var titlecontents = document.getElementsByClassName("title-contents");

      function opentab(para) {
        for (tl of titleslist) {
          tl.classList.remove("active-title");
        }
        for (tc of titlecontents) {
          tc.classList.remove("active-title-contents");
        }
        event.currentTarget.classList.add("active-title");
        document.getElementById(para).classList.add("active-title-contents");
      }