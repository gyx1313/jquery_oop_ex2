;(function(){
	var Myobj = function(ele, options){
		this.element = ele;
		this.defaults = {
			'color' : 'blue',
			'fontSize' : '32px'
		};
		this.opts = $.extend({},this.defaults,options);

		this.click = function(){
			_click();
		};
	};

	Myobj.prototype = {
		myfunc:function(){
			this.element.css({
				'color' : this.opts.color,
				'font-size' : this.opts.fontSize
			});
			return this;
		}
	};

	function _click(){
		this.addEventListener('click',function(event){
			console.log('click !');
		});
	}

	$.fn.myPlugin = function(options){
		var myobj = new Myobj(this,options);
		myobj.myfunc();
		myobj.click();
	};
})();