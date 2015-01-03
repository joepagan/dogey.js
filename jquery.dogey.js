(function ( $ ) {

	var text, removelist, dogewords, dogecolours;

	$.fn.dogey = function(){

		text = this.text().toLowerCase();
		// remove special chars
		text = text.replace(/[^\w\s]/g, "");
		// replace line breaks with space
		text = text.replace(/(\r\n|\n|\r)/gm,"");
		// replace tab space with space
		text = text.replace(/\t+/g, " ");
		
		console.log(text);
		text = text.split(" ");

		removelist = [
	        "a", "an", "as", "at", "before", "best", "but", "by", "could", "ever", "for", "from", "hes", "I", "is",
	        "in", "into", "like", "of", "off", "on", "onto", "per", "shes", "since",
	        "than", "the", "this", "that", "to", "up", "via", "with"
	    ];

	    dogewords = [
	    	"many", "such", "so", "nice", "much", "very"
	    ];
	    
	    dogecolours = [
	    	"#FF0000", "#2AFF00", "#000DFF", "#FFCC33"
	    ];
	    
	    $(removelist).each(function(removeindex,removeelement){

	    	if(text.indexOf(removeelement) !== -1){

				for (var i=text.length-1; i>=0; i--) {
				    if (text[i] === removeelement) {
				        text.splice(i, 1);
				    }
				}
		    	
		    }

	    });

		$("body").append("<div class='doge_woofs'></div>");
		
		$(text).each(function(index, element){
			$(".doge_woofs").append("<p class='woof'>"+dogewords[Math.floor(Math.random()*dogewords.length)]+" "+element+"</p>");
		});
		$(".doge_woofs").append("<p class='woof'>wow</p><p class='woof'>amaze</p>");
		$(".doge_woofs .woof").each(function(index, element){
			$(element).css({
				"position":"absolute",
				"left": Math.floor(Math.random() * $(window).width()-200),
				"top": Math.floor(Math.random() * $(document).height()),
				"z-index":"999",
				"font-family":"Comic Sans MS, cursive, sans-serif",
				"font-size":"24px",
				"color": dogecolours[Math.floor(Math.random() * dogecolours.length)]
			});
			
		});
		
	};

}( jQuery ));