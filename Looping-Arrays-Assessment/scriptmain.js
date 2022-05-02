
const firstArray = [];

for (let i = 1000; i > 0; i -= 2) {
	firstArray.push(i);
	console.log(firstArray.pop(i));
}

const secondArray = [];

secondArray[2499] = "A quarter of the way there!";
secondArray[4999] = "Halfway there!";
secondArray[9999] = "The loop is done!";

for (let i = 0; i > 10000; i += 1) {
	secondArray.push(i);
}
alert(secondArray[2499]);
alert(secondArray[4999]);
alert(secondArray[9999]);

const thirdArray = [ [1, 2, 3, 4, 5 ], [ "Regular Show", "The Mandolorian", "River Monsters", "Breaking Bad", "Game of Thrones"]];
for (let i = 0; i = thirdArray[0].length; i++) {
	console.log("My #" + thirdArray[0].pop(i) + " Favorite TV show is " + thirdArray[1].pop(i) )
}