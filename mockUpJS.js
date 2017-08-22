/**************************************
 TITLE: jQuery
 AUTHOR: Becca Gorby
 CREATE DATE: 04/17/2015
 PURPOSE: js for mockup cupcake site
 LAST MODIFIED ON: 04/17/2015
 LAST MODIFIED BY: Becca Gorby
 MODIFICATION HISTORY:
 04/17/2015: create date
*/
$(document).ready(function() {
	var strCupcakeFlavor = String("");
	var strIcing = String("");
	
	$('input:radio[name=cakeFlavor]').click(function() {
		strCupcakeFlavor = $('input:radio[name=cakeFlavor]:checked').val();
		if(strCupcakeFlavor == "Vanilla") {
			$("#ccFlavor").css("background-image", "url(assets/vanillaCC.png)");
		}
		if(strCupcakeFlavor == "Chocolate") {
			$("#ccFlavor").css("background-image", "url(assets/chocCC.png)");
		}
		if(strCupcakeFlavor == "RedVelvet") {
			$("#ccFlavor").css("background-image", "url(assets/velvetCC.png)");
		}
		if(strCupcakeFlavor == "Marble") {
			$("#ccFlavor").css("background-image", "url(assets/marbleCC.png)");
		}
	});
	
	$('input:radio[name=icingColor]').click(function() {
		strIcing = $('input:radio[name=icingColor]:checked').val();
		console.log(strIcing);
		if(strIcing == "White") {
			$("#icing").css("background-image", "url(assets/white.png)");
		}
		if(strIcing == "Chocolate") {
			$("#icing").css("background-image", "url(assets/choc.png)");
		}
		if(strIcing == "Red") {
			$("#icing").css("background-image", "url(assets/red.png)");
		}
		if(strIcing == "Yellow") {
			$("#icing").css("background-image", "url(assets/yellow.png)");
		}
		if(strIcing == "Blue") {
			$("#icing").css("background-image", "url(assets/blue.png)");
		}
		if(strIcing == "Green") {
			$("#icing").css("background-image", "url(assets/green.png)");
		}
		if(strIcing == "Pink") {
			$("#icing").css("background-image", "url(assets/pink.png)");
		}
		if(strIcing == "Purple") {
			$("#icing").css("background-image", "url(assets/purple.png)");
		}
	});
	
	
	$("input[type=checkbox]").click(function() {
		if($("#sprink").is(":checked")) {
			$("#ccSprinkles").css("visibility", "visible");
		} /*else if($("#sprink").attr('checked', 'false')) {
			$("#ccSprinkles").css("visibility", "hidden");
		}*/
		if(!$("#sprink").is(":checked")) {
			$("#ccSprinkles").css("visibility", "hidden");
		}
		if($("#flowers").is(":checked")) {
			$("#ccFlowers").css("visibility", "visible");
		} /*else if($("#flowers").attr('checked', 'false')) {
			$("#ccFlowers").css("visibility", "hidden");
		}*/
		if(!$("#flowers").is(":checked")) {
			$("#ccFlowers").css("visibility", "hidden");
		}
		if($("#shavings").is(":checked")) {
			$("#ccShavings").css("visibility", "visible");
		} /*else if($("#shavings").attr('checked', 'false')) {
			$("#ccShavings").css("visibility", "hidden");
		}*/
		if(!$("#shavings").is(":checked")) {
			$("#ccShavings").css("visibility", "hidden");
		}
		if($("#candy").is(":checked")) {
			$("#ccCandy").css("visibility", "visible");
		}/* else if($("#candy").attr('checked', 'false')) {
			$("#ccCandy").css("visibility", "hidden");
		}*/
		if(!$("#candy").is(":checked")) {
			$("#ccCandy").css("visibility", "hidden");
		}
	});
	
});