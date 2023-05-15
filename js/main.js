
//event_box2

$('.eb_slider_list').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    pauseOnHover:false, //마우스를 올렸을 때 autoplay가 멈추는 기능
});


/*재생정지버튼*/ 
$('.event_box2 .page_act .btn_stop').click(function(e){
    e.preventDefault(); //클릭시 안 튕겨 올라감
    if($('.event_box2 .page_act').hasClass('on')){
        $('.event_box2 .page_act').removeClass('on');
        $('.eb_slider_list').slick('slickPause');
    }
});

$('.event_box2 .page_act .btn_play').click(function(e){
    e.preventDefault(); //클릭시 안 튕겨 올라감
    $('.event_box2 .page_act').addClass('on');
    $('.eb_slider_list').slick('slickPlay');
});


//card  변수버전
let card =$('.card');

card.slick({
    arrows:false,
    dots:true,
    autoplay:true,
    pauseOnHover:false, //마우스를 올렸을 때 autoplay가 멈추는 기능
});

$('.event_box3 .pagn_act .btn_stop').click(function(e){
    e.preventDefault();
    if($('.event_box3 .pagn_act').hasClass("on")){
        $('.event_box3 .pagn_act').removeClass("on");
        card.slick('slickPause');
    }
});
$('.event_box3 .pagn_act .btn_play').click(function(e){
    e.preventDefault(); //클릭시 안 튕겨 올라감
    $('.event_box3 .pagn_act').addClass('on');
        card.slick('slickPlay');
});


//life button
let tab=$('.life_menu ul li')
let menu=$('.life_style li')

tab.mouseover(function(){
    //태생적으로 태어날때 가지고 나온 번호를 추출 -> index()
    let target = $(this);
    let index = target.index();
    console.log(index)
    menu.css({opacity:0})
    menu.eq(index).css({opacity:1})
});