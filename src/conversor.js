export default class conversor{
	constructor(x = 0){
		this.x = x
	}

	kgToLbs(x){
		this.x = x * 2.20462;
		return this.x
	}

	lbsToKg(x){
		this.x = x * 0.453592;
		return this.x
	}
}