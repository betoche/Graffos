var mySwiper = new Swiper('.swiper-container',{
pagination: false,
loop:true,
grabCursor: true,
paginationClickable: true,
autoplay: 3500,
slidesPerView: 1
})
$('.arrow-left').on('click', function(e){
e.preventDefault()
mySwiper.swipePrev()
})
$('.arrow-right').on('click', function(e){
e.preventDefault()
mySwiper.swipeNext()
})