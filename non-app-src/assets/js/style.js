document.addEventListener("click", click);

function click(e) {
  let el;

  el = e.target;

  if (el !== e.currentTarget) {
    if (el.nodeName === "BUTTON") {
      if (el.classList.contains("is-active")) {
        el.classList.remove("is-active");
      } else {
        el.classList.add("is-active");
      }
    }
  }
  event.stopPropagation();
}

//   var background = {}

//   background.initializr = function (){

//     var $this = this;

//     //option
//     $this.id = "background_css3";
//     $this.style = {bubbles_color:"#fff",stroke_width:0, stroke_color :"black"};
//     $this.bubbles_number = 30;
//     $this.speed = [1500,8000]; //milliseconds
//     $this.max_bubbles_height = $this.height;
//     $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random

//     if($("#"+$this.id).lenght > 0){
//       $("#"+$this.id).remove();
//     }
//     $this.object = $("<div style='z-inde:-1;margin:0;padding:0; overflow:hidden;position:absolute;bottom:0' id='"+$this.id+"'> </div>'").appendTo("body");

//     $this.ww = $(window).width()
//     $this.wh = $(window).height()
//     $this.width = $this.object.width($this.ww);
//     $this.height = $this.object.height($this.wh);

//     $("body").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: "+$this.style.bubbles_color+"; position: absolute}</style>");

//     for (i = 0; i < $this.bubbles_number; i++) {
//         $this.generate_bubbles()
//     }

//   }

//    background.generate_bubbles = function() {
//      var $this = this;
//      var base = $("<div class='shape_background'></div>");
//      var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1,3));
//      if(shape_type == 1) {
//        var bolla = base.css({borderRadius: "50%"})
//      }else if (shape_type == 2){
//        var bolla = base.css({width:0, height:0, "border-style":"solid","border-width":"0 40px 69.3px 40px","border-color":"transparent transparent "+$this.style.bubbles_color+" transparent", background:"transparent"});
//      }else{
//        var bolla = base;
//      }
//      var rn_size = $this.rn(.8,1.2);
//      bolla.css({"transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", top:$this.wh+100, left:$this.rn(-60, $this.ww+60)});
//      bolla.appendTo($this.object);
//      bolla.transit({top: $this.rn($this.wh/2,$this.wh/2-60), "transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", opacity: 0},$this.rn($this.speed[0],$this.speed[1]), function(){
//        $(this).remove();
//        $this.generate_bubbles();
//      })

//     }

// background.rn = function(from, to, arr) {
//   if(arr){
//           return Math.random() * (to - from + 1) + from;
//   }else{
//     return Math.floor(Math.random() * (to - from + 1) + from);
//   }
//     }
// background.initializr()

var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;

$(window).load(function () {
  $messages.mCustomScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 100);
});

function updateScrollbar() {
  $messages.mCustomScrollbar("update").mCustomScrollbar("scrollTo", "bottom", {
    scrollInertia: 10,
    timeout: 0,
  });
}

function setDate() {
  d = new Date();
  if (m != d.getMinutes()) {
    m = d.getMinutes();
    $('<div class="timestamp">' + d.getHours() + ":" + m + "</div>").appendTo(
      $(".message:last")
    );
  }
}

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new ");
  setDate();
  $(".message-input").val(null);
  updateScrollbar();
  setTimeout(function () {
    fakeMessage();
  }, 1000 + Math.random() * 20 * 100);
}

// $('.message-submit').click(function() {
//   insertMessage();
// });

$(window).on("keydown", function (e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});

var Fake = ["何かお困りの事はございませんか？"];
var Lake = ["今すぐオンライン商談が可能です！"];
var Like = ["その他・ヘルプですね。"];
var Liks = ["下記からお選びください。"];

function fakeMessage() {
  if ($(".message-input").val() != "") {
    return false;
  }
  $(
    '<div class="message loading new tr-y"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure><span></span></div><div class="message loading new"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container"));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure>' +
        Fake[i] +
        '</div><div class="message new"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure>' +
        Lake[i] +
        '<br><img class="mtg-bg" src="./assets/img/64.png" /><div class="mtg-btn message-submit btn-gradient-bg"><a href="#" >アポなし面談</a></div></div>'
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
}

$(".message-sub").click(function () {
  $(
    '<div class="message loading new "><figure class="avatar"><img src="./assets/img/icon04.png" /></figure><span></span></div><div class="message loading new"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure><span></span></div>'
  ).appendTo($(".mCSB_container "));
  updateScrollbar();

  setTimeout(function () {
    $(".message.loading").remove();
    $(
      '<div class="message new"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure>' +
        Like +
        '</div>　<div class="message new"><figure class="avatar"><img src="./assets/img/icon04.png" /></figure>' +
        Liks +
        '<br><br><div class="row chat-btns"><div class="col-md-12"><div class="btns"><a href="#"><div class="button btn-now-bg circle message-sub">資料請求</div></a></div></div><div class="col-md-12"><div class="btns"><a href="#"><div class="button btn-now-bg circle">よくある質問</div></a></div></div><div class="col-md-12"><div class="btns"><a href="#"><div class="button btn-now-bg circle">サービス紹介動画</div></a></div></div><div class="col-md-12"><div class="btns"><a href="#"><div class="button btn-now-bg circle">デモ・体験版はこちら</div></a></div></div></div></div>'
    )
      .appendTo($(".mCSB_container"))
      .addClass("new");
    setDate();
    updateScrollbar();
    i++;
  }, 1000 + Math.random() * 20 * 100);
});

// モーダル---------------------------------------

$(".button").click(function () {
  var buttonId = $(this).attr("id");
  $("#modal-container").removeAttr("class").addClass(buttonId);
  $("body").addClass("modal-active");
});

$("#modal-container").click(function () {
  $(this).addClass("out");
  $("body").removeClass("modal-active");
});

$("#chat-circle").hide();

$("#button4").click(function () {
  // 1秒かけて非表示にする
  $("#p2").hide(1000);

  $("#chat-circle").show();
});

$("#chat-circle").click(function () {
  $("#p2").show();
  $("#chat-circle").hide();
});
