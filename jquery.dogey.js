(function ( $ ) {

	var text, removelist, dogewords, dogecolours, opts, options, dogei = 200;

	$.fn.dogey = function(options){

		opts = $.extend( {}, $.fn.dogey.defaults, options );

		text = this.text().toLowerCase();
		// remove special chars
		text = text.replace(/[^\w\s]/g, "");
		// replace line breaks with space
		text = text.replace(/(\r\n|\n|\r)/gm,"");
		// replace tab space with space
		text = text.replace(/\t+/g, " ");
		
		text = text.split(" ");

		removelist = [
	        "a", "an", "and", "as", "at", "before", "best", "but", "by", "could", "ever", "for", "from", "hes", "I", "is",
	        "in", "into", "like", "not", "of", "off", "our", "on", "onto", "per", "shes", "since",
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

		$("body").css({"position":"relative"}).append("<div class='doge_woofs'></div>");

		if(opts.heightMode == window){
			$("body").append("<style>.woof{position:fixed;font-size:24px;z-index:999;font-family:Comic Sans MS, cursive, sans-serif;}</style>");
		}
		if(opts.heightMode == document){
			$("body").append("<style>.woof{position:absolute;font-size:24px;z-index:999;font-family:Comic Sans MS, cursive, sans-serif;}</style>");
		}

		if(opts.animate == true){
			$("body").append("<style>.woof{display:none;}</style>");
		}else{
			$("body").append("<style>.woof{display:block;}</style>");
		}
		
		$(text).each(function(index, element){
			$(".doge_woofs").append("<p class='woof'>"+dogewords[Math.floor(Math.random()*dogewords.length)]+" "+element+"</p>");
		});
		$(".doge_woofs").append("<p class='woof'>wow</p><p class='woof'>amaze</p>");
		$(".doge_woofs .woof").each(function(index, element){
			if(index%2 == 0){

				$(element).css({
					"left": Math.floor(( Math.random() * 45 + 1) ) + "%",
					"top": Math.floor(( Math.random() * (($(opts.heightMode).height()/100)*96) + 1) ),
					"color": dogecolours[Math.floor(Math.random() * dogecolours.length)]
				});

			}else{

				$(element).css({
					"right": Math.floor(( Math.random() * 45 + 1) ) + "%",
					"bottom": Math.floor(( Math.random() * (($(opts.heightMode).height()/100)*96) + 1) ),
					"color": dogecolours[Math.floor(Math.random() * dogecolours.length)]
				});

			}

			setTimeout(function(){
				$(element).velocity("fadeIn", { duration:600, display:"block" });
			},parseInt(dogei));
			
			dogei = dogei+50;
			
		});
		
	};

	$.fn.dogey.defaults = {
	    heightMode:document,
	    animate:false
	};

}( jQuery ));