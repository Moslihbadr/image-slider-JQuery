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
    slide()
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
    slide()
  })
  function slide() {
    switch ($("img")[1].src) {
      case "http://127.0.0.1:5500/practice/images/ahmed2.png":
        $("span")[0].css('background-color', 'yellow'); 
        break;
      case "http://127.0.0.1:5500/practice/images/badr2.png":
        console.log("badr")
        break;
      case "http://127.0.0.1:5500/practice/images/foukahi2.png":
        console.log("foukahi")
        break;
      case "http://127.0.0.1:5500/practice/images/badr000.png":
        console.log("badr2")
        break;
      case "http://127.0.0.1:5500/practice/images/ilyass3.png":
        console.log("ilyas")
        break;
      case "http://127.0.0.1:5500/practice/images/yassine.png":
        console.log("yassine")
        break;
    }
  }
})