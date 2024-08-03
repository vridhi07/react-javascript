// 1. a = 10;
// 2. timeout of 10 sec
// 3. promise
// 4. timeout of 0 sec
// 5. async await
// 6. console(a)
// 7. interval(5)

//output
// a = 10; - Synchronous code.
// console(a); - Synchronous code.
// promise - Microtask, executed immediately after the synchronous code.
// async await - Microtask, part of the promise queue.
// timeout of 0 sec - Macrotask, executed after microtasks.
// interval(5) - Macrotask, executed after the 0 sec timeout and then repeatedly at 5ms intervals.
// timeout of 10 sec - Macrotask, executed after the 10 seconds delay.
//1,6,3,5,4,7,2


//what is event delegation?


var name="Akash";

let me = {

	name: "Anit",

	thisInArrow:() => {

		console.log("My name is "+ this.name);

	},

	thisInRegular(){

		console.log("My name is"; + this.name);

	}

};

me.thisInArrow();//akash
me.thisInRegular();//Anit



const a = {b: 10, c: {d: 20, e: 30}}
const x = a;

x.b = 100;
x.c.d = 200

console.log(a.b)
console.log(a.c.d)

const x  = {...a} // 10 200
const x =  JSON.parse(JSON.stringify(a)); // 10 20


//q1  const arr  = [1 ,[2], [3,4] ]

function removeFalsyValues(obj) {
	// Helper function to filter arrays
	function filterArray(arr) {
		return arr.filter(value => value || value === true || value === 1 || value === 'a');
	}

	// Iterate over the object's properties
	for (const key in obj) {
		const value = obj[key];

		if (Array.isArray(value)) {
			obj[key] = filterArray(value);
		} else if (typeof value === 'object' && value !== null) {
			obj[key] = removeFalsyValues(value);
		} else if (!value && value !== true && value !== 1 && value !== 'a') {
			delete obj[key];
		}
	}

	return obj;
}
//{ c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
const obj = {
	a: null,
	b: false,
	c: true,
	d: 0,
	e: 1,
	f: '',
	g: 'a',
	h: [null, false, '', true, 1, 'a'],
	i: { j: 0, k: false, l: 'a' }
};

const result = removeFalsyValues(obj);
console.log(result);

what is pollyfill
