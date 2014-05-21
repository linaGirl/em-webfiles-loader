!function(){

	var   Class 		= require('ee-class')
		, EventEmitter 	= require('ee-event-emitter')
		, log 			= require('ee-log')
		, Directory 	= require('em-webfiles-directory');



	module.exports = new Class({
		inherits: EventEmitter
		
				
		, init: function() {
			this.tree = new Directory();
		}


		, load: function() {}
		, add: function() {}
		, remove: function() {}
	});
}();
