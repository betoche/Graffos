// for transition links
// menu mobile
$(document).ready( function(){
$("a").attr( "data-ajax", "false" );
} );

/*******************************************************************************/
// var jquery="http://code.jquery.com/jquery-1.10.2.min.js";
var mjquery="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js";

var js1 = "js/skrollr.min.js";
// var js1 = "/assets/skrollr.min.js";

var imported = document.createElement('script');
imported.type = "text/javascript";

var jsimported1 = document.createElement('script');
jsimported1.type="text/javascript"
jsimported1.src=js1;

var w = window.innerWidth;
var h = window.innerHeight;

if( w>900 ){
  // imported.src = jquery;
  document.head.appendChild(jsimported1);
}else{
  imported.src = mjquery;
}

document.head.appendChild(imported);

/****************************************************************************/

window.onresize = function(event) {

    w = window.innerWidth;
    h = window.innerHeight;

    console.log( "resize called{ w["+w+"] and h["+h+"] }" );
    if( w>900 ){
    // imported.src = jquery;
    document.head.appendChild(jsimported1);
  }else{
    imported.src = mjquery;
    jsimported1.parentNode.removeChild(jsimported1);
  }
};