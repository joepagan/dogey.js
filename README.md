dogey.js
========

Pass a container element to dogey.js it'll read the text and add new "doge words" to the page for you

Say you have a container like so

	<div class="container">
		<p>For more info read the tutorials page</p>
	</div>
  
You can use dogey.js like this (defaults are listed here too):

	$(".container").dogey({
		heightMode: document // the words will load at random points all the way down the document, you can also use "window", make sure not to use quotes for this option.
		animate: true, // will load the words in one after another (using jquery animate), otherwise they'll just appear on doc ready or window load...
		offset: 50 // the offset (in ms) in which the words will fade in
		duration: 600 // the duration of the fadeIn animation
	});

Should spit out something like:

"very info" & "such tutorials"
