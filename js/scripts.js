function navResponsive() {
    var x = document.getElementById("nav");
    var z = document.getElementById("icon");
    x.className = "responsive";
    z.innerHTML = '<i class="fa fa-close fa-2xl" onclick="nav()"></i>';
  }
  function nav() {
    var x = document.getElementById("nav");
    var z = document.getElementById("icon");
    x.className = "container";
    z.innerHTML = '<i class="fa fa-bars fa-2xl" onclick="navResponsive()"></i>';
  }
