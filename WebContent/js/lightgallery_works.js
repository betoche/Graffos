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

				// nicachallenge
				{"src":"images/works/slide_gallery/nicachallenge_b.jpg",
				"thumb":"images/works/slide_gallery/nicachallenge_s.jpg",
				"sub-html":"<div class='info_pic'><h3>Nica challenge</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/nicachallenge_m.jpg"},
				// graffos card
				{"src":"images/works/slide_gallery/graffos_cards_b.jpg",
				"thumb":"images/works/slide_gallery/graffos_cards_s.jpg",
				"sub-html":"<div class='info_pic'><h3>Graffos Cards</h3>- printing -</div>",
				"mobileSrc":"images/works/slide_gallery/graffos_cards_m.jpg"},
				// menu ejecutivo
				{"src":"images/works/slide_gallery/menuejecutivo_b.jpg",
				"thumb":"images/works/slide_gallery/menuejecutivo_s.jpg",
				"sub-html":"<div class='info_pic'><h3>Menu Ejecutivo</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/menuejecutivo_m.jpg"},
				// loop swoop & pull
				{"src":"images/works/slide_gallery/loopswoop_b.jpg",
				"thumb":"images/works/slide_gallery/loopswoop_s.jpg",
				"sub-html":"<div class='info_pic'><h3>loop swoop &amp; pull</h3>- printing -</div>",
				"mobileSrc":"images/works/slide_gallery/loopswoop_m.jpg"},
				// Xfactor
				{"src":"images/works/slide_gallery/xfactor_b.jpg",
				"thumb":"images/works/slide_gallery/xfactor_s.jpg",
				"sub-html":"<div class='info_pic'><h3>Xfactor</h3>- printing -</div>",
				"mobileSrc":"images/works/slide_gallery/xfactor_m.jpg"},
				// green salon
				{"src":"images/works/slide_gallery/green_b.jpg",
				"thumb":"images/works/slide_gallery/green_s.jpg",
				"sub-html":"<div class='info_pic'><h3>green salon spa</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/green_m.jpg"},
				// dantec
				{"src":"images/works/slide_gallery/dantec_b.jpg",
				"thumb":"images/works/slide_gallery/dantec_s.jpg",
				"sub-html":"<div class='info_pic'><h3>dantec</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/dantec_m.jpg"},
				// ciaobell@
				{"src":"images/works/slide_gallery/ciaobella_b.jpg",
				"thumb":"images/works/slide_gallery/ciaobella_s.jpg",
				"sub-html":"<div class='info_pic'><h3>ciaobell@</h3>- digital -</div>",
				"mobileSrc":"images/works/slide_gallery/ciaobella_m.jpg"},
				// heliosone
				{"src":"images/works/slide_gallery/helios_b.jpg",
				"thumb":"images/works/slide_gallery/helios_s.jpg",
				"sub-html":"<div class='info_pic'><h3>heliosone</h3>- branding -</div>",
				"mobileSrc":"images/works/slide_gallery/helios_m.jpg"}
				],
			onCloseAfter: function(){
				console.log("CLICK");
				document.location="#portafolio";
			}
		}); 
	}) 
});