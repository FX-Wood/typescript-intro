// strings
var hello = "Hello world";
var barf = "Yak, Bark";
var barfLiteral = `literally, ${barf}`;
// number
var myInt = 3;
var myFloat = 6.4;
var myHex = 0xf00d;
// booleans
var myBool;
myBool = true;
// any
var myAny = null;
myAny = 'here i am';
myAny = 2349;
var myStrings = ['asd', 'dfg'];
var moreStrings = ['asd', 'dfg'];
var twoDArray = [[2, 3], [3, 3]];
// functions
function myFunc(arg, arg2) {
    return Array(arg2).fill(arg);
}
const myArrowFunc = (arg, arg2) => {
    // logic
    return '';
};
function errorLogger(items) {
    items.forEach((item) => {
        console.log(item);
    });
}
// unions
var myUnion = null;
myUnion = "see this is ok";
let myColor = 'Red';
function isGoodDog(dog) {
    let { name, age, isGood } = dog;
    let message = `${name} is ${age} and is very good! ${dog.wagsTail ? 'wag wag' : ''}`;
    if (!isGood) {
        console.log('How dare you?! All dogs are good');
        dog.isGood = true;
    }
    return true;
}
let oneGoodBoy = {
    name: 'Harley Muffinhead',
    age: 7,
    isGood: true,
    wagsTail: true
};
let barnCat = {
    name: 'Scar Tatterear',
    age: Infinity,
    clawedKiller: true,
    isGood: false
};
isGoodDog(oneGoodBoy);
// enums
var Cheeses;
(function (Cheeses) {
    Cheeses[Cheeses["Brie"] = 0] = "Brie";
    Cheeses[Cheeses["Cheddar"] = 1] = "Cheddar";
    Cheeses[Cheeses["Swiss"] = 2] = "Swiss";
})(Cheeses || (Cheeses = {}));
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 10] = "Red";
    Colors[Colors["Green"] = 5] = "Green";
    Colors[Colors["Blue"] = 3] = "Blue";
})(Colors || (Colors = {}));
function shout(message) {
    return message.toString().toUpperCase();
}
console.log(shout('ErrOR'));
console.log(shout('All is well'));
//# sourceMappingURL=intro.js.map