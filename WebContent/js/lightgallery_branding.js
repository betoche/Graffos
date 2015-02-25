$(document).ready(function() {
	$('.zoom').click(function(e){
		$(this).lightGallery({
			enableTouch: true,
			enableDrag: true,
			loop:true,
			dynamic:true,
			html:true,
			mobileSrc:true,
			dynamicEl:[
				// menu ejecutivo
				{"src":"images/works/slide_gallery/menuejecutivo_b.jpg",
				"thumb":"images/works/slide_gallery/menuejecutivo_s.jpg",
				"sub-html":"<div class='info_pic'><h3>Menu Ejecutivo</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/menuejecutivo_m.jpg"},
				// heliosone
				{"src":"images/works/slide_gallery/helios_b.jpg",
				"thumb":"images/works/slide_gallery/helios_s.jpg",
				"sub-html":"<div class='info_pic'><h3>heliosone</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/helios_m.jpg"},
				// green salon
				{"src":"images/works/slide_gallery/green_b.jpg",
				"thumb":"images/works/slide_gallery/green_s.jpg",
				"sub-html":"<div class='info_pic'><h3>green salon spa</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/green_m.jpg"},
				// dantec
				{"src":"images/works/slide_gallery/dantec_b.jpg",
				"thumb":"images/works/slide_gallery/dantec_s.jpg",
				"sub-html":"<div class='info_pic'><h3>dantec</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/dantec_m.jpg"}
				],
			onCloseAfter: function(){
				console.log("CLICK");
				document.location="#portafolio";
			}
		}); 
	}) 
});