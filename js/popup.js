$(document).ready(function(){
	$('#open').click(function(){
		$('#pop_background').fadeIn();
		$('#pop_box').fadeIn();
		return false;
	});
	$('#close').click(function(){
		$('#pop_background').fadeOut();
		$('#pop_box').fadeOut();
		return false;
	});
	$('#pop_background').click(function(){
		$('#pop_background').fadeOut();
		$('#pop_box').fadeOut();
		return false;
	});
	setBindings();

	
});
		
function setBindings(){
	$("nav #navdiv ul li a").click(function(e){
		e.preventDefault();
		var sectionID= e.currentTarget.id +"Section";
		
		$("html body").animate({
			scrollTop: $("#"+sectionID).offset().top
			
		}, 500)
		
	})
}		