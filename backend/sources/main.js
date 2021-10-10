function postToServer(what) {
	$.ajax({
		url: '/index.php',
		method: 'post',
		dataType: 'html',
		data: {dat: what},
		success: function(data){
			alert(data);
		}
	});
}

//game script
function intializeGame(argument) {
	// body...
}
function leftUpdateGame(argument) {
	// body...
}
function rightUpdateGame(argument) {
	// body...
}