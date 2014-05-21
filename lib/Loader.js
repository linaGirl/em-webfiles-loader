!function(){

	var   Class 		= require('ee-class')
		, EventEmitter 	= require('ee-event-emitter')
		, log 			= require('ee-log');



	module.exports = new Class({
		inherits: EventEmitter



		, init: function() {
			this.tree = this._directory();
		}


		, _directory: function(){
			return Obejct.create({isDirectory: true});
		}


		, load: function() {}
		, add: function() {}
		, remove: function() {}
	});
}();
