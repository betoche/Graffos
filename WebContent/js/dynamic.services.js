// for transition links
// menu mobile
$(document).ready( function(){
$("a").attr( "data-ajax", "false" );
} );

function unhide(divID) {
	var item = document.getElementById(divID);
	if (item) {
		if( item.className.indexOf("unselected") != -1 ){
			item.className = item.className.replace( 'unselected', 'selected' );
		}else{
			item.className = item.className.replace( 'selected', 'unselected' );
		}
	}
}

/*******************************************************************************/
// var jquery="http://code.jquery.com/jquery-1.10.2.min.js";
var mjquery="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js";

var js1 = "js/skrollr.min.js";
var js2 = "js/option_skrollr.js";
var js3 = "js/anclas.js";

var imported = document.createElement('script');
imported.type = "text/javascript";

var jsimported1 = document.createElement('script');
jsimported1.type="text/javascript"
jsimported1.src=js1;

var jsimported2 = document.createElement('script');
jsimported2.type="text/javascript"
jsimported2.src=js2;

var jsimported3 = document.createElement('script');
jsimported3.type="text/javascript"
jsimported3.src=js3;

var w = window.innerWidth;
var h = window.innerHeight;

console.log( "w["+w+"] and h["+h+"]" );

if( w>900 ){
	// imported.src = jquery;
	document.head.appendChild(jsimported1);
	document.head.appendChild(jsimported2);
	document.head.appendChild(jsimported3);
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
		document.head.appendChild(jsimported2);
		document.head.appendChild(jsimported3);
	}else{
		imported.src = mjquery;
		jsimported1.parentNode.removeChild(jsimported1);
		jsimported2.parentNode.removeChild(jsimported2);
		jsimported3.parentNode.removeChild(jsimported3);
	}
	setValues();
};

/***********************************************************/
function setValues(){
	var minW = document.getElementById( 'min-width' );
	var maxW = document.getElementById( 'max-width' );
	var loadedJQ = document.getElementById( 'loaded-jquery' );
	var code = document.getElementById( 'code' );

	console.log( "minW["+minW+"], maxW[" +maxW+ "], loadedJQ["+loadedJQ+"], code["+code+"]" );

	minW.innerHTML = 'width: '+ w + 'px';
	maxW.innerHTML = 'height: ' + h + 'px';

	loadedJQ.innerHTML = imported.src;
}