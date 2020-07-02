import { logging } from 'protractor';

export class Automoble {
	id: bigint;
	maker: String;
	doors: String;
	body: String;
	cylinders: String;
	hp: bigint;
	rpm: bigint;
	price: bigint;

    constructor(id, maker, doors, body, cylinders, hp, rpm, price) {
		this.id = id;
		this.maker = maker;
		this.doors = doors;
		this.body = body;
		this.cylinders = cylinders;
		this.hp = hp;
		this.rpm = rpm;
		this.price = price;    
	}

	toString() {
		const auto = "{id:" + this.id +
		", maker:" + this.maker +
		", doors:" + this.doors +
		", body:" + this.body +
		", cylinders:" + this.cylinders +
		", hp:" + this.hp +
		", rpm:" + this.rpm +
		", price:" + this.price +
		"}";
		return auto;
	}
}