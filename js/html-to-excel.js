
$(function() {	
	// restrict select all (ctrl-a) to the output div when mouse hovering that div
	// Selecting text of a particular element
	function selectText(elementName) {
		var doc = document
	    var elementNode = doc.getElementById(elementName)
	    var range;
		var selection;

		if (doc.body.createTextRange) {
			range = document.body.createTextRange();
			range.moveToElementText(elementNode);
			range.select();
		} else if (window.getSelection) {
			selection = window.getSelection();        
			range = document.createRange();
			range.selectNodeContents(elementNode);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
	
	$(".enter-btn").click(function(e) {
		e.preventDefault();
		var textInput = $(".textinput").val();
		// console.log(textInput);
		$(".row-2").html(textInput);
	});
	
	$(".select-output-btn").click(function() {
		selectText('textoutput');
	});
	
	$(".export-btn").click(function(e) {
		window.open('data:application/vnd.ms-excel,' + encodeURIComponent($('#textoutput').html()));
		e.preventDefault();
	});
	
	$(".clear-btn").click(function(e) {
		e.preventDefault();
		$(".textinput").val("");
		$(".row-2").text("");
	});
})