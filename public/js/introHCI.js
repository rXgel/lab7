'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(clickLikeBtn);// your code here
}
function clickLikeBtn(e){
	e.preventDefault();
	ga('create', 'UA-190152750-2', 'auto');
	//ga('send', 'event', 'signup','click');
	ga('send', 'event', 'like', 'click');
}