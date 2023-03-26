$(document).ready(function(){
  $(".right").on("click", () => {
    const firstImage = $("img").first().attr("src");
    for (let i = 0; i < $("img").length; i++) {
      if (i === $("img").length - 1) {
        $("img")[i].src = firstImage;
      } else {
        $("img")[i].src = $("img")[i + 1].src;
      }
    }
  });
  $(".left").on("click",()=>{
    const lastImage = $("img").last().attr("src");
    for (let i = $("img").length - 1; i >= 0; i--) {
      if (i === 0) {
        $("img")[i].src = lastImage;
      } else {
        $("img")[i].src = $("img")[i - 1].src;
      }
    }
  })
})
