/**
 * Created by jo.chan on 2017/10/20.
 */
function awardEnd(a) {
  $(".cake_btn_0" + a).html("<img src='http://static.sieuanhhung.pocketgamesol.com/tron1nam/img/cake/not_met.png' />"), $(".cake_btn_0" + a).off("click")
}
function awardStart(a) {
  $(".cake_btn_0" + a).html("<img src='http://static.sieuanhhung.pocketgamesol.com/tron1nam/img/cake/award.png' />"), $(".cake_btn_0" + a).on("click")
}
function awarded(a) {
  $(".cake_btn_0" + a).html("<img src='http://static.sieuanhhung.pocketgamesol.com/tron1nam/img/cake/award_end.png' />"), $(".cake_btn_0" + a).off("click")
}
function diamondAwardEnd(a) {
  $(".cake_btn2_0" + a).html("<img src='http://static.sieuanhhung.pocketgamesol.com/tron1nam/img/cake/not_met2.png' />"), $(".cake_btn2_0" + a).off("click")
}
function diamondAwardStart(a) {
  $(".cake_btn2_0" + a).html("<img src='http://static.sieuanhhung.pocketgamesol.com/tron1nam/img/cake/award2.png' />"), $(".cake_btn2_0" + a).on("click")
}
function diamondAwarded(a) {
  $(".cake_btn2_0" + a).html("<img src='http://static.sieuanhhung.pocketgamesol.com/tron1nam/img/cake/award2_end.png' />"), $(".cake_btn2_0" + a).off("click")
}
function getAllCream() {
  var a = pg_config.api_url + "act/platform/stuff/cake?actId=" + cakeActId + "&token=" + localStorage.token;
  $.ajax({
    type: "GET", dataType: "jsonp", jsonp: "jsonCallback", url: a, success: function (a) {
      200 == a.code ? $(".cream_box").text(a.data.count) : alert(pg_config.status[a.code])
    }, error: function (a) {
      alert(JSON.stringify(a))
    }
  })
}
function getAllDiamond() {
  var a = pg_config.api_url + "act/platform/stuff/charge?actId=" + chargeActId + "&token=" + localStorage.token;
  $.ajax({
    type: "GET", dataType: "jsonp", jsonp: "jsonCallback", url: a, success: function (a) {
      200 == a.code ? $(".diamond_box").text(a.data.count) : alert(pg_config.status[a.code])
    }, error: function (a) {
      alert(JSON.stringify(a))
    }
  })
}
function loadCream() {
  var a = pg_config.api_url + "act/platform/direct/count?token=" + localStorage.token + "&appKey=" + appKey + "&actId=" + cakeActId;
  $.ajax({
    type: "GET", dataType: "jsonp", jsonp: "jsonCallback", url: a, success: function (a) {
      if (200 == a.code)for (var t = a.data, n = 0; n < t.length; n++) {
        var c = t[n];
        1 == c.status ? awardStart(c.index) : 2 == c.status ? awarded(c.index) : awardEnd(c.index)
      } else alert(102 == a.code ? pg_config.status[a.code] : pg_config.status[a.code])
    }, error: function (a) {
      alert(JSON.stringify(a))
    }
  })
}
function getCream(a, t) {
  var n = pg_config.api_url + "act/platform/direct/get?token=" + localStorage.token + "&actId=" + cakeActId + "&conditionIndex=" + t;
  $.ajax({
    type: "GET", dataType: "jsonp", jsonp: "jsonCallback", url: n, success: function (a) {
      200 == a.code ? (showCakeCode(a.data.code), 0 == a.data.remain && awarded(t)) : (diamondAwarded(t), alert(pg_config.status[a.code]))
    }, error: function (a) {
      alert(JSON.stringify(a))
    }
  })
}
function loadDiamond() {
  var a = pg_config.api_url + "act/platform/direct/count?token=" + localStorage.token + "&appKey=" + appKey + "&actId=" + chargeActId;
  $.ajax({
    type: "GET", dataType: "jsonp", jsonp: "jsonCallback", async: !1, url: a, success: function (a) {
      if (200 == a.code)for (var t = a.data, n = 0; n < t.length; n++) {
        var c = t[n];
        1 == c.status ? diamondAwardStart(c.index) : 2 == c.status ? diamondAwarded(c.index) : diamondAwardEnd(c.index)
      }
    }, error: function (a) {
      alert(JSON.stringify(a))
    }
  })
}
function getDiamond(a, t) {
  var n = pg_config.api_url + "act/platform/direct/get?token=" + localStorage.token + "&actId=" + chargeActId + "&conditionIndex=" + t;
  $.ajax({
    type: "GET", dataType: "jsonp", jsonp: "jsonCallback", url: n, success: function (a) {
      200 == a.code ? (showDiamondCode(a.data.code), 0 == a.data.remain && diamondAwarded(t)) : alert(pg_config.status[a.code])
    }, error: function (a) {
      alert(JSON.stringify(a))
    }
  })
}
function showDiamondCode(a) {
  $(".resultBox").empty();
  var t = null, t = a;
  $(".resultBox").append(t), $(".blackBg").show(), $(".codeBox").show()
}
function showCakeCode(a) {
  $(".resultBox").empty();
  var t = null, t = a;
  $(".resultBox").append(t), $(".blackBg").show(), $(".codeBox").show()
}
function showDiamondCode(a) {
  $(".resultBox").empty();
  var t = null, t = a;
  $(".resultBox").append(t), $(".blackBg").show(), $(".codeBox").show()
}
$(function () {
  isLogin() ? (getAllCream(), getAllDiamond(), loadCream(), loadDiamond()) : showLogin()
}), $(".cake_btn_01").bind("click", function () {
  getCream(cakeActId, 1)
}), $(".cake_btn_02").bind("click", function () {
  getCream(cakeActId, 2)
}), $(".cake_btn_03").bind("click", function () {
  getCream(cakeActId, 3)
}), $(".cake_btn_04").bind("click", function () {
  getCream(cakeActId, 4)
}), $(".cake_btn_05").bind("click", function () {
  getCream(cakeActId, 5)
}), $(".cake_btn_06").bind("click", function () {
  getCream(cakeActId, 6)
}), $(".cake_btn_07").bind("click", function () {
  getCream(cakeActId, 7)
}), $(".cake_btn2_01").bind("click", function () {
  getDiamond(chargeActId, 1)
}), $(".cake_btn2_02").bind("click", function () {
  getDiamond(chargeActId, 2)
}), $(".cake_btn2_03").bind("click", function () {
  getDiamond(chargeActId, 3)
}), $(".cake_btn2_04").bind("click", function () {
  getDiamond(chargeActId, 4)
}), $(".cake_btn2_05").bind("click", function () {
  getDiamond(chargeActId, 5)
}), $(".cake_btn2_06").bind("click", function () {
  getDiamond(chargeActId, 6)
}), $(".cake_btn2_07").bind("click", function () {
  getDiamond(chargeActId, 7)
}), $(".cake_btn2_08").bind("click", function () {
  getDiamond(chargeActId, 8)
});
