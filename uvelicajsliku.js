var images = document.querySelectorAll(".sipic img");
var fullimg = document.querySelector(".full-img");
var header = document.getElementById("navbar");
var cover = document.querySelector(".cover");
var body = document.getElementsByTagName("body");

images.forEach(event =>{
    event.addEventListener("click", () =>{
        cover.classList.add("open");
        fullimg.classList.add("open");
        var sources = event.getAttribute("src");
        fullimg.src=sources;
        var AltText=event.alt;
        console.log(AltText);
        header.style.opacity=0;
        

    });
});
cover.addEventListener("click", (e)=>{
    if(e.target.classList.contains("cover")){
        cover.classList.remove("open");
        fullimg.classList.remove("open");
        header.style.opacity=1;
        
    }
})

$(function () {
    $(document).scroll(function () {
      var $nav = $("#navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

