/*

jQuery Fluid 12columns
Copyright (c) 2013 Yannick Lamour (https://github.com/runtothesun)

Version: 1.0
Url: https://github.com/runtothesun/jquery-fluid-12columns

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function($) {
	$.fn.fluid12columns = function(options) {
		var settings = $.extend({
			'margin' : true
		}, options);
		return this.each(function() {
			var $this = $(this),
				margin = settings.margin,
				columns = $this.children();

				$this.css('clear', 'both');
				$this.css('padding', '0px');
				$this.css('margin', '0px');
						
				//$this.wrap('<div style="content:"";display:table;" />');
				//$this.parent().after('<div style="clear:both;"></div>');
				
				//.group:before,.group:after { content:"";display:table; }
				//.group:after { clear:both; }
				//.group { zoom:1; /* For IE 6/7 (trigger hasLayout) */ }
							
								
				columns.css('display', 'block');
				columns.css('float', 'left');
				if(margin) {
					columns.css('margin', '1% 0 1% 1.6%');
					$this.children(":first-child").css("margin-left","0px");
					columns.addClass('span_1_of_'+columns.length);
				}
				
			$(window).resize(function() {
				var columns = $this.children(),
					columnMin = parseInt(columns.css("minWidth")),
					columnsCount = columns.length,
					containerWidth = $this.width();

				if(margin) {
					
				} else {
			    	max = columnsCount;			
					if(columnMin>0) {
					    var remainder = containerWidth%columnMin;
				    	max = (containerWidth-remainder)/columnMin;			
				    	if(max>columnsCount) max=columnsCount;
				    	columns.show();
				    	columns.slice(max,columnsCount).hide();
					}
					columns.width((100/max)+"%");
				}

			}).resize();
			

		});
		
		
		function addRule(selector, styles, sheet) {
	 
	        styles = (function (styles) {
	            if (typeof styles === "string") return styles;
	            var clone = "";
	            for (var p in styles) {
	                if (styles.hasOwnProperty(p)) {
	                    var val = styles[p];
	                    p = p.replace(/([A-Z])/g, "-$1").toLowerCase(); // convert to dash-case
	                    clone += p + ":" + (p === "content" ? '"' + val + '"' : val) + "; ";
	                }
	            }
	            return clone;
	        }(styles));
	        sheet = sheet || document.styleSheets[document.styleSheets.length - 1];

	        if (sheet.insertRule) sheet.insertRule(selector + " {" + styles + "}", sheet.cssRules.length);
	        else if (sheet.addRule) sheet.addRule(selector, styles);

	        return this;

	    };
		
		
	};
})(jQuery);
