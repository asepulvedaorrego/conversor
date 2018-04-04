"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var conversor = function () {
	function conversor() {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		_classCallCheck(this, conversor);

		this.x = x;
	}

	_createClass(conversor, [{
		key: "kgToLbs",
		value: function kgToLbs(x) {
			this.x = x * 2.20462;
			return this.x;
		}
	}, {
		key: "lbsToKg",
		value: function lbsToKg(x) {
			this.x = x * 0.453592;
			return this.x;
		}
	}]);

	return conversor;
}();

exports.default = conversor;