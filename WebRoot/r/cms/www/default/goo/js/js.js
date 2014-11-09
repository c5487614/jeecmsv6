
$(document).ready( function() {
var totWidth=0;
var positions = new Array();
var pwidth = $("#gallery").width();
//$("#downloadwrap").css('visibility','hidden');
$(".slide").width(pwidth);
$('#slides .slide').each( function(i) {
positions[i]= totWidth;
var f = pwidth - 960;
totWidth +=  (960 + f);
if(!$(this).width()) {
return false;
}
});
$(window).resize( function() {
totWidth=0;
positions = new Array();
pwidth = $("#gallery").width();
$(".slide").width(pwidth);
$('#slides .slide').each( function(i) {
positions[i]= totWidth;
var f = pwidth - 960;
totWidth +=  (960 + f);
if(!$(this).width()) {
return false;
}
});
$('#slides').width(totWidth).stop().animate({
marginLeft:-positions[0]+'px'
},0);
});
$('#slides').width(totWidth);

var timer = null;
function onSecondDelay(callback) {
clearTimeout(timer);
timer = setTimeout(callback, 500);
}

$('.switch ul li').mouseover( function() {
var _this = $(this);
onSecondDelay( function() {
_this.find('a').trigger('click',[true])
});
}).mousemove( function() {
var _this = $(this);
onSecondDelay( function() {
_this.find('a').trigger('click',[true])
});
}).mouseout( function() {
clearTimeout(timer);
});
$('.switch ul li a').click( function(e,keepScroll) {
$('li.menuItem').removeClass('currbanner');
//$(this).parent().addClass('currbanner');
var li_id = $(this).parent().attr('id');
var li_id_num = li_id.split('_')[2];

$("#t_li_"+li_id_num).addClass('currbanner');
//$("#b_li_"+li_id_num).addClass('currbanner');
/*if("5" == li_id_num) {
$("#downloadwrap").css('visibility','hidden');
$("#special").show();
} else {
$("#downloadwrap").css('visibility','');
$("#special").hide();
}*/
var pos = $(this).parent().prevAll('.menuItem').length;
$('#slides').stop().animate({
marginLeft:-positions[pos]+'px'
},450);
e.preventDefault();
if(!keepScroll)
clearInterval(itvl);
});
$('.switch ul li.menuItem:first').addClass('currbanner');
var current=1;
function autoAdvance(){
if(current==-1)
return false;
$('.switch ul li a').eq(current%$('.switch ul li a').length).trigger('click',[true]);
current++;
}

var changeEvery = 7;
var itvl = setInterval( function() {
autoAdvance()
},changeEvery*1000);
});