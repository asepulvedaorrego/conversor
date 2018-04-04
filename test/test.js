//test y mocha son modulos de node que permiten hacer test del codigo 
const expect = require('chai').expect
const conversor = require('..').default

describe('#conversor', function () {
	it('conversor de kg a libra',function(){
		const conv = new conversor

		expect(conv.kgToLbs(1)).to.equal(2.20462)
	})

	it('conversor de libra a kg',function(){
		const conv = new conversor

		expect(conv.lbsToKg(1)).to.equal(0.453592)
	})

})