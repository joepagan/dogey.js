dogey.js
========

Pass a container element to dogey.js it'll read the text and add new "doge words" to the page for you

Say you have a container like so

	<div class="container">
		<p>For more info read the tutorials page</p>
	</div>
  
You can use dogey.js like so

	$(".container").dogey();

Should spit out something like:

"very info" & "such tutorials"

It will absolutely position them on the page too.
