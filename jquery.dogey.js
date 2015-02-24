var text, removelist, dogewords, dogecolours, opts, options, $woofelement, dogei = 200, addtionalRemovedWords, addtionalWords, addDogeWords;
(function ( $ ) {

	$.fn.dogey = function(options){

		opts = $.extend( {}, $.fn.dogey.defaults, options );

		text = this.text().toLowerCase();
		// remove special chars
		text = text.replace(/[^\w\s]/g, "");
		// replace line breaks with space
		text = text.replace(/(\r\n|\n|\r)/gm,"");
		// replace tab space with space
		text = text.replace(/\t+/g, " ");
		// turn text string into array of words
		text = text.split(" ");

		removelist = [
			"a", "all", "an", "and", "as", "at", "before", "best", "but", "by", "could", "ever", "for", "from", "hes", "I", "is",
			"in", "into", "like", "not", "of", "off", "our", "on", "onto", "per", "shes", "since",
			"than", "the", "this", "that", "to", "up", "via", "with", "something", "there", "maybe", "has", "ive", "one", "ones", "out", "goes", "seen", "only", "within", "essentially", "spits", "creates"
		];

		// adding new words to the remove list
		if(opts.removeWords != null){
			addtionalRemovedWords = opts.removeWords.split(" ");
			removelist = addtionalRemovedWords.concat(removelist);
		}

		dogewords = [
			"many", "such", "so", "nice", "much", "very"
		];

		// adding new words to the dogewords list
		if(opts.addDogeWords != null){
			addDogeWords = opts.addDogeWords.split(" ");
			dogewords = addDogeWords.concat(dogewords);
		}

		dogecolours = [
		"#FF0000", "#2AFF00", "#000DFF", "#FFCC33"
		];

		// remove list items from the text array
		$(removelist).each(function(removeindex,removeelement){
			if(text.indexOf(removeelement) !== -1){
				for (var i=text.length-1; i>=0; i--) {
					if (text[i] === removeelement) {
						text.splice(i, 1);
					}
				}
			}
		});

		// remove empty array items
		text = $.grep(text,function(n){ return(n) });

		$(opts.container).css({"position":"relative","overflow":opts.overflow}).append("<div class='doge_woofs'></div>");
		$("body").append("<style>.woof{font-size:24px;z-index:999;font-family:Comic Sans MS, cursive, sans-serif;}</style>");

		if(opts.heightMode == window){
			$("body").append("<style>.woof{position:fixed;}</style>");
		}
		if(opts.heightMode == document){
			$("body").append("<style>.woof{position:absolute;}</style>");
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

			if(index <= opts.limit){

				$woofelement = $(element);

				if(index%2 == 0){

					$woofelement.css({
						"left": Math.floor(( Math.random() * 45 + 1) ) + "%",
						"top": Math.floor(( Math.random() * (($(opts.container).height()/100)*96) + 1) ),
						"color": dogecolours[Math.floor(Math.random() * dogecolours.length)]
					});

				}else{

					$woofelement.css({
						"right": Math.floor(( Math.random() * 45 + 1) ) + "%",
						"bottom": Math.floor(( Math.random() * (($(opts.container).height()/100)*96) + 1) ),
						"color": dogecolours[Math.floor(Math.random() * dogecolours.length)]
					});

				}

				if(opts.animate == true){
					$woofelement.delay(parseInt(dogei)).fadeIn(opts.duration);
					dogei = dogei+opts.offset;
				}

			}

		});

	};

	$.fn.dogey.defaults = {
		heightMode: document,
		container:"body",
		animate: true,
		offset: 500,
		duration: 600,
		limit:10,
		removeWords:null,
		addDogeWords:null,
		overflow:"hidden"
	};

}( jQuery ));
