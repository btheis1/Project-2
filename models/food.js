// Dependencies
var orm = require("../config/orm.js");

// We pass in query parameters as required by our ORM and also a callback to receive data

var food = {
	all: function (cb) {
		orm.all("ingredients", function (res) {
			cb(res);
		});
	},
	insert: function (cols, vals, cb) {
		orm.insert("ingredients", cols, vals, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update("ingredients", objColVals, condition, function (res) {
			cb(res);
		});
	}
};
// Export
module.exports = food;