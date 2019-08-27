$(document).ready(function(){
	var caja=$("#caja");
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.slideDown("slow"); //.fadeTo  .slideDown//fast  normal  slow  
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		caja.slideUp("slow");  //.fadeTo  .slideUp  //fast  normal  slow
	});

	$("#boton").click(function(){
		caja.toggle("fast");  //.fadeToggle  .slideToggle   //fast  normal  slow
	});

	$("#animar").click(function(){
		caja.animate({
			marginLeft:'500px',
			fontSize:'40px',
			height:'110px'
		},'slow')
		.animate({
			borderRadius:'900px',
			marginTop:'110px'
		},'slow')
		.animate({
			borderRadius:'0px',
			marginLeft:'0px'
		},'slow')
		.animate({
			borderRadius:'100px',
			marginTop:'0px'
		},'slow')
		.animate({
			marginLeft:'500px',
			fontSize:'40px',
			height:'110px'
		},'slow')
	});
});