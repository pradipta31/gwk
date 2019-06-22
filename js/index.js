$(function(){

$("#beranda").hide();


 $("#button-tampil").click(function(){
 	$("#tampil").hide('slow', function(){ $("#tampil").remove(); });
 	$("#beranda").show('slow', function(){ $("#beranda").show(); });
 });


});