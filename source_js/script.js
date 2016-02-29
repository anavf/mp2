// Write any custom javascript functions here
$(document).ready(function(){
  $(document).foundation();
});

//CAROUSEL - SLICK
$(document).ready(function(){

	$('.one-time').slick({
  		dots: true,
  		infinite: true,
  		speed: 300,
  		slidesToShow: 1,
  		adaptiveHeight: true,
	});

});


//MOBILE NAV MENU EXPANDING
$(document).ready(function(){

	$("#hamburger").on("click", function(e){

		e.preventDefault();

		$("#mobileNav").toggle();

	});

});


//MOBILE EXPANDING CLASS
$(document).ready(function(){

	$("#BioLabel").on("click", function(e){

		e.preventDefault();

		$("#expandBio").removeClass("hide").addClass("show");

	});

	$("#closeBio").on("click", function(e){
		e.preventDefault();

		$("#expandBio").removeClass("show").addClass("hide");
	});

	$("#InterestsLabel").on("click", function(e){

		e.preventDefault();

		$("#expandInterests").removeClass("hide").addClass("show");

	});

	$("#closeInterests").on("click", function(e){
		e.preventDefault();

		$("#expandInterests").removeClass("show").addClass("hide");
	});

	$("#ContactLabel").on("click", function(e){

		e.preventDefault();

		$("#expandContact").removeClass("hide").addClass("show");

	});

	$("#closeContact").on("click", function(e){
		e.preventDefault();

		$("#expandContact").removeClass("show").addClass("hide");
	});

});


//NAVBAR RESIZING
$(document).on("scroll",function() {

	if($(document).scrollTop()>50){
		$("header").removeClass("big").addClass("small");
		$("#mobileNav").removeClass("bigger").addClass("smaller");
	} else {
		$("header").removeClass("small").addClass("big");
		$("#mobileNav").removeClass("smaller").addClass("bigger");
	}

});

//SMOOTH SCROLLING
$(document).ready(function() {

	$("a[href^='#']").on("click", function(e) {

		e.preventDefault();

		var hash = $(this.hash);
		
		$("html, body").animate({scrollTop: hash.offset().top-59}, 800, function(){
			window.location.hash = hash;
		});

	});

});

//POSITION INDICATOR - NAVBAR SMALL
$(document).ready(function() {

	$(window).scroll(function(){

		var position = $(window).scrollTop();

		var navAbout = $("#navAboutSmall");
		var navArtwork = $("#navArtworkSmall");
		var navMusic = $("#navMusicSmall");

		if ( position >= $("#AboutSmall").offset().top-60 && position < ($("#AboutSmall").offset().top + $("#AboutSmall").height()-61) ) {
			navAbout.removeClass("navRegular").addClass("navHighlight");
		} else {
			navAbout.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $("#Artwork").offset().top-60 && position < ($("#Artwork").offset().top + $("#Artwork").height() + $("#ArtInfo").height()-60) ) {
			navArtwork.removeClass("navRegular").addClass("navHighlight");
		} else {
			navArtwork.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $("#Music").offset().top-60 && position < ($(footer).offset().top)) {
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else if(position + $(window).height() == $(document).height()){
			navArtwork.removeClass("navHighlight").addClass("navRegular");
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else {
			navMusic.removeClass("navHighlight").addClass("navRegular");
		}


	});

});


//POSITION INDICATOR - NAVBAR MEDIUM
$(document).ready(function() {

	$(window).scroll(function(){

		var position = $(window).scrollTop();

		var navAbout = $("#navAbout");
		var navArtwork = $("#navArtwork");
		var navMusic = $("#navMusic");

		if ( position >= $("#About").offset().top-60 && position < ($("#About").offset().top + $("#About").height()-60) ) {
			navAbout.removeClass("navRegular").addClass("navHighlight");
		} else {
			navAbout.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $("#Artwork").offset().top-60 && position < ($("#Artwork").offset().top + $("#Artwork").height() + $("#ArtInfo").height()-60) ) {
			navArtwork.removeClass("navRegular").addClass("navHighlight");
		} else {
			navArtwork.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $("#Music").offset().top-60 && position < ($("#Music").offset().top + $("#Music").height() ) ) {
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else if(position + $(window).height() == $(document).height()){
			navArtwork.removeClass("navHighlight").addClass("navRegular");
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else {
			navMusic.removeClass("navHighlight").addClass("navRegular");
		}


	});

});


// POSITION INDICATOR - NAVBAR LARGE
$(document).ready(function() {

	$(window).scroll(function(){

		var position = $(window).scrollTop();

		var navAbout = $("#navAboutLarge");
		var navArtwork = $("#navArtworkLarge");
		var navMusic = $("#navMusicLarge");

		if ( position >= $("#About").offset().top-60 && position < ($("#About").offset().top + $("#About").height()-60) ) {
			navAbout.removeClass("navRegular").addClass("navHighlight");
		} else {
			navAbout.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $("#Artwork").offset().top-60 && position < ($("#Artwork").offset().top + $("#Artwork").height() + $("#ArtInfo").height()-60) ) {
			navArtwork.removeClass("navRegular").addClass("navHighlight");
		} else {
			navArtwork.removeClass("navHighlight").addClass("navRegular");
		}

		if ( position >= $("#Music").offset().top-60 && position < ($("#Music").offset().top + $("#Music").height() ) ) {
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else if(position + $(window).height() == $(document).height()){
			navArtwork.removeClass("navHighlight").addClass("navRegular");
			navMusic.removeClass("navRegular").addClass("navHighlight");
		} else {
			navMusic.removeClass("navHighlight").addClass("navRegular");
		}


	});

});

//REFERENCES
//http://codepen.io/Kseso/pen/bfzjC
//http://kenwheeler.github.io/slick/
//http://foundation.zurb.com/sites/docs/reveal.html
//http://api.jquery.com/toggle/
//
//
//

