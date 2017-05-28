
/*
let dog = {
	sound: 'woof',
	talk: function() {
		console.log(this.sound);
	}
}

let otherTalk = dog.talk;

dog.talk();
otherTalk();

let otherTalk2 = dog.talk.bind(dog);
otherTalk2();
console.log("with bind below");
otherTalk.bind(dog)();
*/

/*
import loadImage from './load-image';

let addImg = (src) => {
	let imgElement = document.createElement("img");
	imgElement.src = src;
	document.body.appendChild(imgElement);
};

Promise.all([
	loadImage('images/cat1.jpg'),
	loadImage('images/cat2.jpg'),
	loadImage('images/cat3.jpg')
])
.then((images) => {
	images.forEach(img => addImg(img.src))
})
.catch(() => {
	// Error Handling
})*/

/*
let categories = [
	{ id: 'animals', parent: null },
	{ id: 'mammals', parent: 'animals' },
	{ id: 'dogs', parent: 'mammals' },
	{ id: 'cats', parent: 'mammals' },
	{ id: 'persian', parent: 'dogs' },
	{ id: 'daf', parent: 'dogs' },
	{ id: 'fdadfa', parent: 'cats' },
	{ id: 'fdafadfadfa', parent: 'cats' }
]

let makeTree = (categories, parent) => {
	let node = {};
	categories
		.filter(c => c.parent === parent)
		.forEach(c =>
			node[c.id] =
				makeTree(categories, c.id));
	return node;
}

console.log(JSON.stringify(makeTree(categories, null), null, 2));
*/

/*
let countDownFrom = (num) => {
	if (num === 0) return;
	console.log(num);
	countDownFrom(num - 1);
};
countDownFrom(10);
*/

/*import _ from 'lodash';
let dragons = [
	{ name: 'one', element: 'lightening' },
	{ name: 'two', element: 'lightening one' },
	{ name: 'three', element: 'lightening' }
];

let hasElement =
	_.curry((element, obj) => obj.element === element);

let lighteningDragons =
	dragons.filter(hasElement('lightening'));

console.log(lighteningDragons);
*/

/*
let dragon = name =>
							size =>
								element =>
									name + ' is a ' + size
									+ ' dragon that breathes '
									+ element + '!!!';
console.log(dragon('abc')('big')('nothing'));
*/

/*
import fs from 'fs';

const output = fs.readFileSync('data.txt', 'utf8')
									.trim()
									.split('\r\n')
									.map(line => line.split('\t'))
									.reduce((customers, line) => {
										customers[line[0]] = customers[line[0]] || [];
										customers[line[0]].push({
											name: line[1],
											price: line[2],
											quantity: line[3]
										})
										return customers;
									}, {});

console.log(JSON.stringify(output, null, 2));
*/