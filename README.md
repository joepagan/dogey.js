# dogey.js

Pass a container element to dogey.js it'll read the text and add new "doge words" to the page for you.

View the [Demo Page](http://lexbi.github.io/dogey.js/).

Say you have a container like so:

	<div class="container">
		<p>For more info read the tutorials page</p>
	</div>

Should spit out coloured, absolutely positioned, comic sans words on your page, something like:


	very info

				many read

		wow
						such tutorials


## What is dogey.js?

The community has needed something like this ever since the meme's creation. Maybe there is one out there, but I've only ever seen generic ones with static phrases. This one goes of dynamic content from a selected element.

Essentially the plugin creates a list of all the words within the selected element, spits them out (in doge meme form) within a container.

- You can fade phrases in one after another (or turn it off all together)
- Change the offset of the the phrases fading in
- Change the duration of the fade
- Limit the amount of phrases
- Remove certain words that are used in the text that's passed to the plugin
- Add extra doge words (like "wow" and "such")

You can use dogey.js like this (defaults are listed here too):

	$(".container").dogey({
		heightMode: document, // The words will load at random points all the way down the document, you can also use "window", make sure not to use quotes for this option. This option will be ignored if a container other than "body" is set.
		container:"body", // The wrapping container element that all the Doge phrases will be injected into
		animate: true, // Will load the words in one after another (using jquery animate), otherwise they'll just appear on doc ready or window load…
		offset: 500, // The offset (in ms) in which the words will fade in
		duration: 600, // The duration of the fadeIn animation
		limit:10, // The amount of doge words that will be added to the page
		removeWords:null, // Remove specific words from the text that gets passed to the plugin, needs to be in quotes and space seperated "like this"
		addDogeWords:null, // Add doge words like "such", "much", "very" needs to be in quotes and space seperated "like this"
		overflow:"hidden" // Sets the overflow of the container element, either you may want "scroll" or "hidden"
	});
